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
      <NextSeo title="Home" />
      <Header />
      <div className="bg-morin-skyBlue w-full">
        <HeaderGap />
        <Container className="relative mb-14 lg:mt-20 lg:mb-28">
          {useMediaQuery('(max-width: 1023px)') && (
            <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
              <MorinTabsMobile tabData={mobileTabData} />
            </div>
          )}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-[120px] lg:pt-0">
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
