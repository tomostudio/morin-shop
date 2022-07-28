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

  return (
    <Layout>
      <SEO
        title={'Home'}
        pagelink={router.pathname}
        inputSEO={seo.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Header product={productAPI} />
      <div className="bg-morin-skyBlue w-full">
        <HeaderGap />
        <Container className="relative lg:mt-20">
          {useMediaQuery('(max-width: 1023px)') && (
            <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
              <MorinTabsMobile tabData={productTypeAPI} />
            </div>
          )}
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-0 ${
              productAPI.length === 0 ||
              (ctx.category !== 'all' &&
                productAPI.filter(
                  (data) => data.type.slug.current === ctx.category,
                ).length === 0) ||
              ctx.listProduct === 0
                ? 'h-[80vh]'
                : ''
            }`}
          >
            {ctx.category === 'all'
              ? productAPI.slice(0, ctx.listProduct).map((data, index) => (
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
                ))
              : productAPI
                  .filter((data) => data.type.slug.current === ctx.category)
                  .slice(0, ctx.listProduct)
                  .map((data, index) => {
                    return (
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
                    )
                  })}
          </div>
          <div
            className={`${
              productAPI.length > 4 &&
              ctx.listProduct < productAPI.length &&
              (ctx.category !== 'all'
                ? productAPI.filter(
                    (data) => data.type.slug.current === ctx.category,
                  ).length > 8
                : true)
                ? 'absolute'
                : 'relative mt-24'
            } left-0 bottom-0 w-full`}
          >
            {productAPI.length > 8 &&
              ctx.listProduct < productAPI.length &&
              (ctx.category !== 'all'
                ? productAPI.filter(
                    (data) => data.type.slug.current === ctx.category,
                  ).length > 8
                : true) &&
              ctx.listProduct !== 0 && (
                <div className="h-52 w-full flex justify-center pt-8 linearMore">
                  <MoreButton
                    onClick={() => ctx.setListProduct(ctx.listProduct + 8)}
                  >
                    See More Products
                  </MoreButton>
                </div>
              )}
            <Footer
              padding={
                productAPI.length > 4 && ctx.listProduct < productAPI.length
                  ? true
                  : false
              }
              className="bg-morin-skyBlue"
            />
          </div>
        </Container>
      </div>
    </Layout>
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
