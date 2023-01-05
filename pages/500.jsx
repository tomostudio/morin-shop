import client from '@/helpers/sanity/client';
import { useRouter } from 'next/router';
import Header from '@/components/modules/header';
import { NextSeo } from 'next-seo';
import Footer from '@/components/modules/footer';
import Layout from '@/components/modules/layout';

const Error500 = ({ seoAPI }) => {
  const [seo] = seoAPI;
  const router = useRouter();
  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title='500' />
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

export default Error500;
