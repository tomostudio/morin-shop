import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import ProductCard from '@/components/modules/productCard'
import MoreButton from '@/components/utils/moreButton'

export default function Home() {
  const productData = [
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
    {
      title: 'Hazelnut Spread with Cocoa',
      imgSrc: '/product/apricot.png',
      imgAlt: 'Apricot',
      link: '/products/apricot',
    },
  ]

  return (
    <Layout>
      <NextSeo title="Home" />
      <Header />
      <div className="bg-morin-skyBlue w-full">
        <HeaderGap />
        <Container className="relative my-14 lg:mt-20 lg:mb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {productData.map((data, index) => (
              <ProductCard
                key={index}
                title={data.title}
                imgSrc={data.imgSrc}
                imgAlt={data.imgAlt}
                link={data.link}
              />
            ))}
          </div>
          <div className="absolute bottom-[-2%] left-0 z-10 h-36 w-full flex justify-center items-end linearMore">
            <MoreButton>See More Products</MoreButton>
          </div>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
