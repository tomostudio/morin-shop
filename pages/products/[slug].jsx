import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import MorinButton from '@/components/utils/morinButton'
import Header from '@/components/modules/header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css/pagination'
import MorinTabs from '@/components/utils/morinTabs'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import SliderDesktop from '@/components/modules/sliderDesktop'
import SliderMobile from '@/components/modules/sliderMobile'
import { parseShopifyResponse, shopifyClient } from '@/helpers/shopify'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useRouter } from 'next/router'
import SEO from '@/components/utils/seo'
import { useAppContext } from 'context/state'

export default function ProductSlug({ productAPI, seoAPI }) {
  const router = useRouter()
  const [product] = productAPI
  const [seo] = seoAPI
  const [productCurrent, setProductCurrent] = useState(0
  )
  const [cart, setCart] = useState({
    index: '',
    qty: 1,
  })
  const appContext = useAppContext()

  const onChangeCart = (value) => {
    if (parseInt(value) <= 20) {
      setCart(value)
    } else if (!value) {
      setCart('')
    }
  }

  const onCart = () => {
    {
      console.log(cart)
    }
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    if (dataCheckout) {
      shopifyClient.product
        .fetchByHandle(product.slug.current)
        .then((product) => {
          const lineItemsToAdd = [
            {
              variantId: product.variants[cart.index].id,
              quantity: cart.qty,
            },
          ]
          shopifyClient.checkout
            .addLineItems(dataCheckout.id, lineItemsToAdd)
            .then((checkout) => {
              let jumlah = 0
              checkout.lineItems.forEach((data) => {
                jumlah += data.quantity
              })
              appContext.setQuantity(jumlah)
            })
        })
    } else {
      shopifyClient.checkout.create().then((checkout) => {
        const data = {
          id: checkout.id,
        }
        localStorage.setItem('dataCheckout', JSON.stringify(data))

        shopifyClient.product
          .fetchByHandle(product.slug.current)
          .then((product) => {
            // Do something with the product
            const lineItemsToAdd = [
              {
                variantId: product.variants[cart.index].id,
                quantity: cart.qty,
              },
            ]
            shopifyClient.checkout
              .addLineItems(checkout.id, lineItemsToAdd)
              .then((checkout) => {
                let jumlah = 0
                checkout.lineItems.forEach((data) => {
                  jumlah += data.quantity
                })
                appContext.setQuantity(jumlah)
              })
          })
      })
    }
  }

  return (
    <Layout>
      <SEO
        title={product.shopifyProduct.title}
        pagelink={router.pathname}
        inputSEO={product.seo_en}
        defaultSEO={typeof seo !== 'undefined' && seo.seo_en}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col md:flex-row w-full md:gap-16 h-full mb-10 md:mb-24">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative hidden lg:block w-full h-full aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden">
              <Image
                src={urlFor(product.slider_image[0].image).url()}
                layout="fill"
                objectFit="contain"
                objectPosition="center"
              />
            </div>
            {useMediaQuery('(min-width: 768px)') ? (
              <SliderDesktop data={product.slider_image} />
            ) : (
              <SliderMobile data={product.slider_image} />
            )}
          </div>
          <div className="w-full md:w-1/2 flex flex-col mt-5 md:mt-0 space-y-5 md:space-y-8 text-morin-blue">
            <div className="w-full flex flex-col">
              <h2 className="text-ctitle md:text-h2 font-nutmeg font-normal m-0">
                {product.title}
              </h2>
              <h3 className="text-mtitleSmall md:text-ctitle font-normal m-0">
                IDR {product.shopifyProduct.priceRange.maxVariantPrice}
              </h3>
            </div>
            <div>
              <span className="font-medium hidden md:block">select size</span>
              <MorinTabs
                tabData={product.shopifyProduct.variants}
                onChange={(e) => setProductCurrent(e)}
                className="md:mt-3"
              />
            </div>
            <div className="flex w-full h-12 md:h-auto">
              <div className="flex justify-between items-center mr-4 md:mr-6 px-5 pt-1 md:pt-3 md:pb-2 h-full md:h-auto rounded-full border-2 border-morin-blue w-32">
                <FancyLink
                  onClick={() =>
                    setCart({
                      index: productCurrent,
                      qty: cart.qty - 1 < 1 ? 1 : cart.qty - 1,
                    })
                  }
                  className="pb-1.5 md:pb-2"
                >
                  <Minus />
                </FancyLink>
                <input
                  className="w-full text-center font-medium text-default md:text-ctitleSmall pointer-events-none"
                  value={cart.qty}
                  readOnly
                />
                <FancyLink
                  onClick={() =>
                    setCart({
                      index: productCurrent,
                      qty: cart.qty + 1,
                    })
                  }
                  className="pb-0.5"
                >
                  <Plus />
                </FancyLink>
              </div>
              <FancyLink
                onClick={onCart}
                className="w-44 h-full md:h-auto md:w-40 lg:w-52 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-default md:text-[20px] lg:text-[26px] text-white"
              >
                Add to Cart
              </FancyLink>
            </div>
            <div className="flex flex-col md:max-w-md">
              <p className="font-medium text-[12px] md:text-default">
                {product.description_en}
              </p>
              <MorinButton
                color={colors.morinBlue}
                border
                showText
                arrow="right"
                className="mt-5 md:mt-8 h-[30px]"
              >
                View Products Details
              </MorinButton>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const res = await client.fetch(`
        *[_type == "shopifyData"]
      `)

  const paths = []

  res.map((data) => {
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
