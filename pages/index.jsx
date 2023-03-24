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
import { PHLoading } from '@/components/utils/products';
import WaButton from '@/components/utils/buttons/WaButton';
import { useEffect } from 'react';

export default function Home({ seoAPI, productTypeAPI }) {
  const [seo] = seoAPI;
  const router = useRouter();
  const [loading, dataProduct, showButton, onLoadMore, onChangeCategory] =
    useProductList();

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

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
          title={'Home'}
          pagelink={router.pathname}
          inputSEO={seo.seo}
          defaultSEO={typeof seo !== 'undefined' && seo.seo}
          webTitle={typeof seo !== 'undefined' && seo.webTitle}
        />
        <HeaderGap />
        {loading ? (
          <PHLoading />
        ) : dataProduct.length > 0 ? (
          <ProductList
            dataProduct={dataProduct}
            showButton={showButton}
            loadMore={onLoadMore}
          />
        ) : (
          <Container className='relative flex justify-center items-center grow'>
            <div className='flex justify-center items-center h-full'>
              <span className='font-semibold text-morin-blue text-ctitleSmall'>
                No Products Available
              </span>
            </div>
            <WaButton className='pb-10 md:pb-16' />
          </Container>
        )}
      </Layout>
      <Footer className='bg-morin-skyBlue' />
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
