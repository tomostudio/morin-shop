import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import MorinTabsMobile from '@/components/utils/morinTabsMobile'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import client from '@/helpers/sanity/client'
import urlFor from '@/helpers/sanity/urlFor'
import { useState } from 'react'
import { useAppContext } from 'context/state'
import ProductCard from '@/components/modules/productCard'
import { MoreButton } from '@/components/utils/buttons'

export default function Home({ productAPI, seoAPI, productTypeAPI }) {
  const [seo] = seoAPI
  const router = useRouter()
  const ctx = useAppContext()

  let displayData = 8
  const dataIncrease = 8
  const [showButton, setShowButton] = useState(
    productAPI.filter(
      (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
    ).length <= displayData
      ? false
      : true,
  )
  const [dataProduct, setDataProduct] = useState(
    productAPI
      .filter(
        (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
      )
      .slice(0, displayData),
  )

  const loadMore = () => {
    if (ctx.category === 'all') {
      displayData += dataIncrease
      setDataProduct(
        productAPI
          .filter(
            (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
          )
          .slice(0, displayData),
      )

      if (
        productAPI.filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        ).length <= displayData
      ) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    } else {
      displayData += dataIncrease
      setDataProduct(
        dataProduct
          .filter(
            (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
          )
          .slice(0, displayData),
      )

      if (
        dataProduct.filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        ).length <= displayData
      ) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    }
  }

  const loadCategory = (category) => {
    displayData = 8
    if (category === 'all') {
      setDataProduct(
        productAPI
          .filter(
            (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
          )
          .slice(0, displayData),
      )

      if (
        productAPI.filter(
          (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
        ).length <= displayData
      ) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }
    } else {
      let dataCategory = productAPI.filter(
        (data) =>
          data.type?.slug.current === category &&
          data.shopifyProduct.variants[0].title !== 'Default Title',
      )

      setDataProduct(
        dataCategory
          .filter(
            (data) => data.shopifyProduct.variants[0].title !== 'Default Title',
          )
          .slice(0, displayData),
      )

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
      <Layout className="bg-morin-skyBlue">
        <SEO
          title={'Home'}
          pagelink={router.pathname}
          inputSEO={seo.seo}
          defaultSEO={typeof seo !== 'undefined' && seo.seo}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <HeaderGap />
        <Container className="relative lg:pt-20 flex-grow min-h-[60vh]">
          {useMediaQuery('(max-width: 1023px)') && (
            <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
              <MorinTabsMobile tabData={productTypeAPI} />
            </div>
          )}
          <div
            className={`relative grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-0 mb-16`}
          >
            {dataProduct.map(
              (data, index) =>
                data.slug?.current && (
                  <ProductCard
                    key={index}
                    title={data.shopifyProduct.title}
                    link={`products/${data.slug.current}`}
                    imgSrc={urlFor(data.thumbnail).url()}
                    imgPlaceholder={urlFor(data.thumbnail).url()}
                    imgAlt={data.shopifyProduct.title}
                  />
                ),
            )}
            {showButton && (
              <div className={`absolute left-0 bottom-0 w-full`}>
                <div className="h-52 w-full flex justify-center pt-8 linearMore">
                  <MoreButton onClick={loadMore}>See More Products</MoreButton>
                </div>
              </div>
            )}
          </div>
        </Container>
        <Footer />
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
