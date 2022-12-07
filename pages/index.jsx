import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import MorinTabsMobile from '@/components/utils/morinTabsMobile'
import SEO from '@/components/utils/seo'
import { useRouter } from 'next/router'
import client from '@/helpers/sanity/client'
import { useProductList } from '@/helpers/functional/products'
import { ProductList } from '@/components/utils/products'

export default function Home({ seoAPI, productTypeAPI }) {
  const [seo] = seoAPI
  const router = useRouter()
  const [
    loading,
    dataProduct,
    showButton,
    onLoadMore,
    onChangeCategory,
  ] = useProductList()

  return (
    <>
      <Header tabData={productTypeAPI} onChangeCategory={onChangeCategory} />
      <Layout className="bg-morin-skyBlue">
        <SEO
          title={'Home'}
          pagelink={router.pathname}
          inputSEO={seo.seo}
          defaultSEO={typeof seo !== 'undefined' && seo.seo}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <HeaderGap />
        <Container className="relative flex-grow">
          <MorinTabsMobile tabData={productTypeAPI} />
          <ProductList
            loading={loading}
            dataProduct={dataProduct}
            showButton={showButton}
            loadMore={onLoadMore}
          />
        </Container>
        <Footer />
      </Layout>
    </>
  )
}

export async function getStaticProps() {
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
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  }
}
