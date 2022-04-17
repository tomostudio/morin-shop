import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import Header from '@/components/modules/header'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import CartDesktop from '@/components/modules/cartDesktop'
import CartMobile from '@/components/modules/cartMobile'

export default function Cart() {
  const cartData = [
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
  ]

  return (
    <Layout>
      <NextSeo title="Cart" />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col items-center w-full h-full mb-24">
          <h2 className="text-ctitle lg:text-h2 text-morin-blue font-nutmeg">
            My Cart
          </h2>
          {useMediaQuery('(min-width: 1024px)') ? (
            <CartDesktop data={cartData} />
          ) : (
            <CartMobile data={cartData} />
          )}
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
