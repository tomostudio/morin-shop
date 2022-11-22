import { useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import Image from 'next/image'
import { Minus, Plus } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import Header from '@/components/modules/header'
import 'swiper/css/pagination'
import MorinTabs from '@/components/utils/morinTabs'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import SliderDesktop from '@/components/modules/sliderDesktop'
import SliderMobile from '@/components/modules/sliderMobile'
import {
  addItemCheckout,
  createCheckout,
  getProductDetail,
} from '@/helpers/shopify'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { useAppContext } from 'context/state'
import { ArrowButton, DefaultButton, GradientButton } from '@/components/utils/buttons'

export default function ProductSlug({ productAPI, seoAPI }) {
  const router = useRouter()
  const [product] = productAPI
  const [seo] = seoAPI
  const [productCurrent, setProductCurrent] = useState(0)
  const [cart, setCart] = useState({
    index: 0,
    qty: 1,
  })
  const appContext = useAppContext()
  const [getIndex, setIndex] = useState(0)
  const [titleCart, setTitleCart] = useState('Add to Cart')

  const onCart = () => {
    setTitleCart('Adding..')
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    if (dataCheckout) {
      getProductDetail(product.slug.current).then((product) => {
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
          appContext.setQuantity(jumlah)
          setTitleCart('Add to Cart')
        })
      })
    } else {
      createCheckout().then((checkout) => {
        const data = {
          id: checkout.id,
        }
        localStorage.setItem('dataCheckout', JSON.stringify(data))

        getProductDetail(product.slug.current).then((product) => {
          // Do something with the product
          const lineItemsToAdd = [
            {
              variantId: product.variants[cart.index].id,
              quantity: cart.qty,
            },
          ]
          addItemCheckout(checkout.id, lineItemsToAdd).then((checkout) => {
            let jumlah = 0
            checkout.lineItems.forEach((data) => {
              jumlah += data.quantity
            })
            appContext.setQuantity(jumlah)
            setTitleCart('Add to Cart')
          })
        })
      })
    }
  }

  return (
    <>
      <Header home={false} />
      <Layout>
        <SEO
          title={product.shopifyProduct.title}
          pagelink={router.pathname}
          inputSEO={product.seo_en}
          defaultSEO={typeof seo !== 'undefined' && seo.seo_en}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <Container className="flex flex-col md:flex-row w-full md:gap-16 h-full mb-10 md:mb-24">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative hidden lg:block w-full h-full aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden">
              {product.slider_image[getIndex]?.image && (
                <Image
                  src={urlFor(product.slider_image[getIndex].image).url()}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              )}
            </div>
            {useMediaQuery('(min-width: 768px)') ? (
              <SliderDesktop
                data={product.slider_image}
                getIndex={getIndex}
                setIndex={setIndex}
              />
            ) : (
              <SliderMobile
                data={product.slider_image}
                getIndex={getIndex}
                setIndex={setIndex}
              />
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 space-y-5 md:space-y-8 text-morin-blue">
            <div className="w-full flex flex-col">
              <h2 className="text-ctitle md:text-h2 font-nutmeg font-normal m-0">
                {product.shopifyProduct.title}
              </h2>
              <h3 className="text-mtitleSmall md:text-ctitle font-normal m-0">
                IDR{' '}
                {product.shopifyProduct.priceRange.maxVariantPrice.toLocaleString(
                  'id',
                )}
                ,-
              </h3>
            </div>
            <div>
              <span className="font-medium hidden md:block">select size</span>
              <MorinTabs
                tabData={product.shopifyProduct.variants}
                onChange={(e) => {
                  setProductCurrent(e)
                  setCart({
                    index: e,
                    qty: cart.qty,
                  })
                }}
                className="md:mt-3"
              />
            </div>
            <div className="flex w-full h-12 md:h-auto">
              <div className="flex justify-between items-center mr-4 md:mr-6 px-5 py-2 h-full rounded-full border-2 border-morin-blue w-32">
                <DefaultButton
                  onClick={() =>
                    setCart({
                      index: productCurrent,
                      qty: cart.qty - 1 < 1 ? 1 : cart.qty - 1,
                    })
                  }
                >
                  <Minus />
                </DefaultButton>
                <input
                  className="w-full text-center font-medium text-default md:text-ctitleSmall pointer-events-none"
                  value={cart.qty}
                  readOnly
                />
                <DefaultButton
                  onClick={() =>
                    setCart({
                      index: productCurrent,
                      qty: cart.qty + 1,
                    })
                  }
                >
                  <Plus />
                </DefaultButton>
              </div>
              <GradientButton
                onClick={onCart}
                className={
                  titleCart === 'Add to Cart'
                    ? 'pointer-events-auto'
                    : '!pointer-events-none'
                }
              >
                {titleCart}
              </GradientButton>
            </div>
            <div className="flex flex-col md:max-w-md">
              <p className="font-medium text-[12px] md:text-default">
                {product.description_en}
              </p>
              <ArrowButton
                destination={`https://morin.id/products/${product.type.slug.current}/${product.slug.current}`}
                targetBlank
                color={colors.morinBlue}
                borderColor={colors.morinBlue}
                hover="white"
                arrowRight
                center={false}
                className="mt-5 md:mt-8 h-[30px] inhover"
              >
                View Products Details
              </ArrowButton>
            </div>
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
        type->
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
    },
  }
}
