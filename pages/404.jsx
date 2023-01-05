import client from '@/helpers/sanity/client';
import Layout from '@/components/modules/layout';
import Footer from '@/components/modules/footer';
import { NextSeo } from 'next-seo';
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header';

const Error404 = ({ seoAPI }) => {
  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title='404' />
        <div className='bg-white w-full h-full flex justify-center items-center grow'>
          <h2 className=' text-morin-blue text-mtitle lg:text-h2 leading-none font-nutmeg text-center'>
            404 ERROR
          </h2>
        </div>
        <Footer />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  const seoAPI = await client.fetch(`
    *[_type == "settings"]
    `);
  const footerAPI = await client.fetch(`
      *[_type == "footer"]
      `);
  return {
    props: {
      seoAPI,
      footerAPI,
    },
  };
}

export default Error404;
