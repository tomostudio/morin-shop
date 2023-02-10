import { getProductSanityDetail } from '@/helpers/sanity/function'
import { addItemCheckout, getProductDetail } from '@/helpers/shopify'

const handleItemCheckout = (
  id,
  slug,
  cart,
  dataCheckout,
  setAddToCart,
  setProduct,
  setQuantity,
) => {
  getProductDetail(id).then((product) => {
    const lineItemsToAdd = [
      {
        variantId: product.variants[cart.index].id,
        quantity: cart.qty,
      },
    ]
    addItemCheckout(dataCheckout.id, lineItemsToAdd).then((checkout) => {
      let jumlah = 0
      checkout.lineItems.forEach((data) => {
        jumlah += data.quantity
      })
      setQuantity(jumlah)
      setAddToCart(false)
      getProductSanityDetail(slug).then((response) => {
        setProduct(response)
      })
    })
  })
}

export default handleItemCheckout
