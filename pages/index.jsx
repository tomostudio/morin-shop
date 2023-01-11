import Layout from '@/components/modules/layout';
import Footer from '@/components/modules/footer';
import Container from '@/components/modules/container';
import HeaderGap from '@/components/modules/headerGap';
import Header from '@/components/modules/header';
import SEO from '@/components/utils/seo';
import { useRouter } from 'next/router';
import client from '@/helpers/sanity/client';
import { useProductList } from '@/helpers/functional/products';
import { ProductList } from '@/components/modules/products';
import { HomeTabsDesktop } from '@/components/utils/tabs';

export default function Home({ seoAPI, productTypeAPI }) {
  const [seo] = seoAPI;
  const router = useRouter();
  const [loading, dataProduct, showButton, onLoadMore, onChangeCategory] =
    useProductList();

  return (
    <>
      <Header tabData={productTypeAPI} />
      <div className='fixed z-[51] w-full flex items-center flex-col pointer-events-none'>
        <HeaderGap />
        <HomeTabsDesktop
          tabData={productTypeAPI}
          onChangeCategory={onChangeCategory}
          className='relative mt-6 lg:mt-0 lg:-translate-y-1/2 pointer-events-auto'
        />
      </div>
      <Layout className='bg-morin-skyBlue'>
        <SEO
          title={''}
          pagelink={router.pathname}
          inputSEO={seo.seo}
          defaultSEO={typeof seo !== 'undefined' && seo.seo}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <HeaderGap />
        <Container className='relative flex-grow'>
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
  );
}

export async function getStaticProps() {
  const productTypeAPI = await client.fetch(`
  *[_type == "productType"]
  `);
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `);
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `);
  return {
    props: {
      productTypeAPI,
      seoAPI,
      footerAPI,
    },
  };
}
