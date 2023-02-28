import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import Header from '@/components/modules/header'
import HeaderGap from '@/components/modules/headerGap'
import { FormPayment } from '@/components/utils/payment'
import WaButton from '@/components/utils/buttons/WaButton'
import client from '@/helpers/sanity/client'
import { useEffect } from 'react'

export default function PaymentConfirmation() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title="Payment Confirmation" />
        <div className="bg-white w-full">
          <Container className="flex flex-col text-morin-blue mt-4 md:mt-0 mb-10 md:mb-16">
            <h2 className="text-4xl lg:text-h2 leading-none font-nutmeg text-center">
              Payment Confirmation
            </h2>
            <FormPayment />
            <WaButton />
          </Container>
        </div>
        <Footer className="w-full" />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `)
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `)
  return {
    props: {
      seoAPI,
      footerAPI,
    },
  }
}
