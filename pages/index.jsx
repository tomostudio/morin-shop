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

export default function Home({ productAPI, seoAPI }) {
  const [seo] = seoAPI
  const router = useRouter()

  const mobileTabData = [
    {
      id: 'tab-1',
      title: 'All',
      value: 'all',
      ariaText: 'All',
    },
    {
      id: 'tab-2',
      title: 'Spreads',
      value: 'spreads',
      ariaText: 'Spreads',
    },
    {
      id: 'tab-3',
      title: 'Jams',
      value: 'jams',
      ariaText: 'Jams',
    },
    {
      id: 'tab-4',
      title: 'Toppings',
      value: 'toppings',
      ariaText: 'Toppings',
    },
    {
      id: 'tab-5',
      title: 'Fillings',
      value: 'fillings',
      ariaText: 'Fillings',
    },
  ]

  return (
    <Layout>
      <SEO
        title={'Home'}
        pagelink={router.pathname}
        inputSEO={seo.seo}
        defaultSEO={typeof seo !== 'undefined' && seo.seo}
        webTitle={typeof seo !== 'undefined' && seo.webTitle}
      />
      <Header />
      <div className="bg-morin-skyBlue w-full">
        <HeaderGap />
        <Container className="relative lg:mt-20">
          {useMediaQuery('(max-width: 1023px)') && (
            <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
              <MorinTabsMobile tabData={mobileTabData} />
            </div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-0">
            {productAPI.map((data, index) => (
              <FancyLink
                destination={`products/${data.slug.current}`}
                className="w-full h-96 bg-white flex flex-col rounded-2xl"
                key={index}
              >
                <div className="w-full h-full p-6 lg:p-8">
                  <div className="w-full h-full relative">
                    <Image
                      src={urlFor(data.thumbnail).url()}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="mx-auto w-full h-1/4 text-center lg:px-20">
                  <span className="font-nutmeg text-morin-blue text-mtitleSmall leading-none">
                    {data.title_en}
                  </span>
                </div>
              </FancyLink>
              // <ProductCard
              //   key={index}
              //   title={data.title}
              //   imgSrc={data.imgSrc}
              //   imgAlt={data.imgAlt}
              //   link={data.link}
              // />
            ))}
          </div>
          <div
            className={`${
              productAPI.length > 4 ? 'absolute' : 'relative mt-24'
            } left-0 bottom-0 w-full`}
          >
            {productAPI.length > 8 && (
              <div className="h-52 w-full flex justify-center pt-8 linearMore">
                <MoreButton>See More Products</MoreButton>
              </div>
            )}
            <Footer
              padding={productAPI.length > 4 ? true : false}
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
  *[_type == "productList"]
  `);
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
