import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import Header from '@/components/modules/header'
import client from '@/helpers/sanity/client'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { GradientButton } from '@/components/utils/buttons'
import { useAppContext } from 'context/state'
import { useProductDetail } from '@/helpers/functional/products'
import {
  PDDescription,
  PDImage,
  PDQuantity,
  PDSize,
  PDTitle,
} from '@/components/modules/products'
import HeaderGap from '@/components/modules/headerGap'

export default function ProductSlug({ productAPI, seoAPI, slug }) {
  const router = useRouter()
  const [productDetail] = productAPI
  const [seo] = seoAPI
  const appContext = useAppContext()
  const [
    product,
    soldOut,
    addToCart,
    onCart,
    productCurrent,
    setProductCurrent,
    cart,
    setCart,
    maxQty,
    setMaxQty,
  ] = useProductDetail(productDetail, slug, appContext.setQuantity)

  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <SEO
          title={product.shopifyProduct.title}
          pagelink={router.pathname}
          inputSEO={product.seo_en}
          defaultSEO={typeof seo !== 'undefined' && seo.seo_en}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <Container className="flex flex-col md:flex-row w-full md:gap-16 px-8 lg:px-16 h-full mt-4 md:mt-0 mb-10 md:mb-16">
          <PDImage sliderImage={product.slider_image} />
          <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 space-y-5 md:space-y-8 text-morin-blue">
            <PDTitle
              title={product.shopifyProduct.title}
              price={product.shopifyProduct.priceRange.maxVariantPrice}
              soldOut={soldOut}
            />
            <PDSize
              variants={product.shopifyProduct.variants}
              setProductCurrent={setProductCurrent}
              setCart={setCart}
              setMaxQty={setMaxQty}
            />
            <div className="flex w-full h-12 md:h-auto">
              <PDQuantity
                soldOut={soldOut}
                qty={cart.qty}
                maxQty={maxQty}
                productCurrent={productCurrent}
                setCart={setCart}
              />
              <GradientButton
                onClick={onCart}
                className={
                  soldOut
                    ? '!pointer-events-none'
                    : addToCart
                    ? '!pointer-events-none'
                    : ''
                }
              >
                {addToCart ? 'Adding..' : 'Add to Cart'}
              </GradientButton>
            </div>
            <PDDescription
              getProduct={product.getProduct}
              description={product.description_en}
            />
          </div>
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "shopifyData"]
      `)

  const paths = []

  res.map((data) => {
    if (!data.slug || data.shopifyProduct.variants[0].title === 'Default Title')
      return
    return paths.push({
      params: {
        slug: data.slug.current,
      },
    })
  })

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const productAPI = await client.fetch(
    `
      *[_type == "shopifyData" && slug.current == "${params.slug}"] {
        ...,
        type->,
        getProduct {
          custom_link,
          linkStore-> {
            slug,
            type-> {
              slug,
            }
          }
        }
      }
    `,
  )
  const seoAPI = await client.fetch(`
  *[_type == "settings"]
  `)
  const footerAPI = await client.fetch(`
  *[_type == "footer"]
  `)

  return {
    props: {
      productAPI,
      seoAPI,
      footerAPI,
      slug: params.slug,
    },
  }
}
