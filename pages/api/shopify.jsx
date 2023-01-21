import client from '@sanity/client'

// Document type for all incoming synced Shopify products
const SHOPIFY_PRODUCT_DOCUMENT_TYPE = 'shopify.product'

// Prefix added to all Sanity product document ids
const SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX = 'product-'

// Enter your Sanity studio details here.
// You will also need to provide an API token with write access in order for this
// handler to be able to create documents on your behalf.
// Read more on auth, tokens and securing them: https://www.sanity.io/docs/http-auth
const sanityClient = client({
  apiVersion: 'v2021-03-25',
  dataset: 'production',
  projectId: 'rj23a9ch',
  token:
    'sk70NvdhWKtxPoFKwUEsqqbynL2ZK115nZgwfnjqbsnlyoVkKjaMV8OvKf51ej0OIGdnvkFB1RCj9TzltYLGeBZI5C3grnhv15yUIKPQU94YKHvpjO8nQ7Kbncfw98H2AnG8Bkn0PiwZorTWBg5057xNfNGbvVa6S2rO6rtTLKpbDOUnrQ98',
  useCdn: false,
})

/**
 * Sanity Connect sends POST requests and expects both:
 * - a 200 status code
 * - a response header with `content-type: application/json`
 *
 * Remember that this may be run in batches when manually syncing.
 */
export default async function handler(req, res) {
  // Next.js will automatically parse `req.body` with requests of `content-type: application/json`,
  // so manually parsing with `JSON.parse` is unnecessary.
  const { body, method } = req

  // Ignore non-POST requests
  if (method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const transaction = sanityClient.transaction()
    switch (body.action) {
      case 'create':
      case 'update':
      case 'sync':
        await createOrUpdateProducts(transaction, body.products)
        break
      case 'delete':
        const documentIds = body.productIds.map((id) =>
          getDocumentProductId(id),
        )
        await deleteProducts(transaction, documentIds)
        break
    }
    await transaction.commit()
  } catch (err) {
    console.error('Transaction failed: ', err.message)
  }

  res.status(200).json({ message: 'OK' })
}

/**
 * Creates (or updates if already existing) Sanity documents of type `shopify.product`.
 * Patches existing drafts too, if present.
 *
 * All products will be created with a deterministic _id in the format `product-${SHOPIFY_ID}`
 */
async function createOrUpdateProducts(transaction, products) {
  // Extract draft document IDs from current update
  const draftDocumentIds = products.map((product) => {
    const productId = extractIdFromGid(product.id)
    return `drafts.${getDocumentProductId(productId)}`
  })

  // Determine if drafts exist for any updated products
  const existingDrafts = await sanityClient.fetch(`*[_id in $ids]._id`, {
    ids: draftDocumentIds,
  })

  products.forEach((product) => {
    // Build Sanity product document
    const document = buildProductDocument(product)
    const draftId = `drafts.${document._id}`

    // Create (or update) existing published document
    transaction
      .createIfNotExists(document)
      .patch(document._id, (patch) => patch.set(document))

    // Check if this product has a corresponding draft and if so, update that too.
    if (existingDrafts.includes(draftId)) {
      transaction.patch(draftId, (patch) =>
        patch.set({
          ...document,
          _id: draftId,
        }),
      )
    }
  })
}

/**
 * Delete corresponding Sanity documents of type `shopify.product`.
 * Published and draft documents will be deleted.
 */
async function deleteProducts(transaction, documentIds) {
  documentIds.forEach((id) => {
    transaction.delete(id).delete(`drafts.${id}`)
  })
}

/**
 * Build Sanity document from product payload
 */
function buildProductDocument(product) {
  const {
    featuredImage,
    id,
    options,
    productType,
    priceRange,
    status,
    title,
    handle,
    variants,
    createdAt,
    updatedAt,
    vendor,
    tags,
  } = product
  const productId = extractIdFromGid(id)
  return {
    _id: getDocumentProductId(productId),
    _type: 'shopifyData',
    shopifyProduct: {
      id: productId,
      gid: id,
      options: options?.map((option, index) => ({
        _key: String(index),
        name: option.name,
        values: option.values,
      })),
      priceRange,
      productType,
      status,
      title,
      createdAt,
      updatedAt,
      vendor,
      // tags,
      variants: variants?.map((variant, index) => {
        const variantId = extractIdFromGid(variant.id)
        return {
          _key: String(index),
          id: variantId,
          inventoryQuantity: variant.inventoryQuantity || 0,
          price: Number(variant.price || 0),
          title: variant.title,
        }
      }),
    },
  }
}

/**
 * Extract ID from Shopify GID string (all values after the last slash)
 * e.g. gid://shopify/Product/12345 => 12345
 */
function extractIdFromGid(gid) {
  return gid?.match(/[^\/]+$/i)[0]
}

/**
 * Map Shopify product ID number to a corresponding Sanity document ID string
 * e.g. 12345 => product-12345
 */
function getDocumentProductId(productId) {
  return `${SHOPIFY_PRODUCT_DOCUMENT_ID_PREFIX}${productId}`
}
