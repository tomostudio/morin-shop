import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import MorinButton from '@/components/utils/morinButton'
import Header from '@/components/modules/header'
import ProductCard from '@/components/modules/productCard'

export default function Cart() {
  return (
    <Layout>
      <NextSeo title="Cart" />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col items-center w-full h-full mb-24">
          <h2 className="text-h2 text-morin-blue font-nutmeg">My Cart</h2>
          <table className="table-auto text-morin-blue max-w-3xl w-full mt-12">
            <thead className="border-b-2 border-morin-blue">
              <tr>
                <th className="font-medium pb-2">Product</th>
                <th className="font-medium pb-2">Quantity</th>
                <th className="font-medium pb-2">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="flex items-center pl-4 py-6 w-full h-full">
                  <div className="relative w-[128px] h-[128px]">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="flex flex-col w-full h-full ml-6">
                    <span className="text-ctitleSmall font-nutmeg">
                      Blueberry Jam
                    </span>
                    <span className="font-medium mt-1">170gr</span>
                  </div>
                </td>
                <td className="px-8">
                  <div className="flex justify-between items-center mx-auto px-4 pt-2 pb-1 rounded-full border-2 border-morin-blue w-28">
                    <FancyLink className="pb-1">
                      <Minus width={15} />
                    </FancyLink>
                    <span className="font-medium">1</span>
                    <FancyLink>
                      <Plus width={18} height={18} />
                    </FancyLink>
                  </div>
                </td>
                <td className="text-center w-36">
                  <span className="font-medium text-morin-blue">
                    IDR 39.000,-
                  </span>
                </td>
                <td className="w-20 text-center">
                  <FancyLink className="border-2 border-morin-blue p-1.5 rounded-full">
                    <Trash />
                  </FancyLink>
                </td>
              </tr>
              <tr className="border-t-2 border-morin-blue">
                <td></td>
                <td className="text-center pt-3">
                  <span className="font-semibold">Sub-Total</span>
                </td>
                <td className="text-center pt-3">
                  <span className="font-semibold">IDR 39.000,-</span>
                </td>
              </tr>
            </tbody>
          </table>
          <FancyLink className="w-52 p-2 mt-36 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-[26px] text-white">
            Checkout
          </FancyLink>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
