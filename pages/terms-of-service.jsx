import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import WaButton from '@/components/utils/buttons/WaButton'
import axios from 'axios'
import client from '@/helpers/sanity/client'
import { useEffect } from 'react'

export default function TermsOfService({ terms }) {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title="Terms Of Service" />
        <div className="bg-white w-full">
          <div className="max-w-2xl w-full mx-auto px-5 text-morin-blue">
            <h2 className=" text-4xl lg:text-h2 leading-none font-nutmeg text-left">
              Terms Of Service
            </h2>
            <p
              className="mt-3 font-medium"
              dangerouslySetInnerHTML={{ __html: terms.body }}
            ></p>
            <WaButton />
          </div>
        </div>
      </Layout>
        <Footer />
    </>
  )
}

export async function getStaticProps() {
  const getData = await axios.get(
    'https://morin-jams.myshopify.com/admin/api/2022-04/policies.json',
    {
      headers: {
        'X-Shopify-Access-Token': process.env.STOREFRONT_KEY,
      },
    },
  )
  const terms = getData.data.policies.find(
    (data) => data.handle === 'terms-of-service',
  )
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `)
  return {
    props: {
      terms,
      seoAPI,
      footerAPI,
    },
  }
}
