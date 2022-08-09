import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import ProductCard from '@/components/modules/productCard'
import MoreButton from '@/components/utils/moreButton'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import MorinTabsMobile from '@/components/utils/morinTabsMobile'
import FancyLink from '@/components/utils/fancyLink'
import Image from 'next/image'
import { parseShopifyResponse, shopifyClient } from '@/helpers/shopify'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useState } from 'react'
import { useAppContext } from 'context/state'

export default function Home({ productAPI, seoAPI, productTypeAPI }) {
  const [seo] = seoAPI
  const router = useRouter()
  const ctx = useAppContext()

  let displayData = 8
  const dataIncrease = 8
  const [showButton, setShowButton] = useState(
    productAPI.length <= displayData ? false : true,
  )
  const [dataProduct, setDataProduct] = useState(
    productAPI.slice(0, displayData),
  )

  const loadMore = () => {
    if (ctx.category === 'all') {
      displayData += dataIncrease
      setDataProduct(productAPI.slice(0, displayData))

      if (productAPI.length <= displayData) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    } else {
      displayData += dataIncrease
      setDataProduct(dataProduct.slice(0, displayData))

      if (dataProduct.length <= displayData) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    }
  }

  const loadCategory = (category) => {
    displayData = 8
    if (category === 'all') {
      setDataProduct(productAPI.slice(0, displayData))

      if (productAPI.length <= displayData) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    } else {
      let dataCategory = productAPI.filter(
        (data) => data.type.slug.current === category,
      )

      setDataProduct(dataCategory.slice(0, displayData))
      console.log(!showButton)

      if (dataCategory.length <= displayData) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    }
  }

  return (
    <>
      <Header tabData={productTypeAPI} loadCategory={loadCategory} />
      <Layout>
        <SEO
          title={'Home'}
          pagelink={router.pathname}
          inputSEO={seo.seo}
          defaultSEO={typeof seo !== 'undefined' && seo.seo}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <div className="bg-morin-skyBlue w-full min-h-full flex flex-col space-between self-stretch flex-grow">
          <HeaderGap />
          <Container className="relative lg:mt-20 flex-grow min-h-[60vh]">
            {useMediaQuery('(max-width: 1023px)') && (
              <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
                <MorinTabsMobile tabData={productTypeAPI} />
              </div>
            )}
            <div
              className={`relative grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-0 mb-14`}
            >
              {dataProduct.map(
                (data, index) =>
                  data.slug?.current && (
                    <FancyLink
                      destination={`products/${data.slug.current}`}
                      className="w-full h-80 lg:h-96 bg-white flex flex-col rounded-2xl"
                      key={index}
                    >
                      <div className="h-5/6 w-full px-10 pt-4 lg:pt-8">
                        <div className="relative w-full h-56">
                          <Image
                            src={urlFor(data.thumbnail).url()}
                            layout="fill"
                            objectFit="contain"
                          />
                        </div>
                      </div>
                      <div className="mx-auto w-full text-center px-4 lg:px-8 mb-4">
                        <span className="font-nutmeg text-morin-blue text-sm lg:text-mtitleSmall leading-none">
                          {data.shopifyProduct.title}
                        </span>
                      </div>
                    </FancyLink>
                  ),
              )}
              {showButton && (
                <div className={`absolute left-0 bottom-0 w-full`}>
                  <div className="h-52 w-full flex justify-center pt-8 linearMore">
                    <MoreButton onClick={loadMore}>
                      See More Products
                    </MoreButton>
                  </div>
                </div>
              )}
            </div>
          </Container>
          <Footer className="bg-morin-skyBlue" />
        </div>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const productAPI = await client.fetch(`
  *[_type == "shopifyData"] {
    ...,
    type->
  }
  `)
  const productTypeAPI = await client.fetch(`
  *[_type == "productType"]
  `)
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `)
  return {
    props: {
      productAPI,
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}
