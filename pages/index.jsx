import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import { Arrow } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'

export default function Home() {
  return (
    <Layout>
      <NextSeo title="Home" />
      <Header />
      <div className="bg-morin-skyBlue w-full">
        <HeaderGap />
        <Container className="relative my-14 lg:mt-20 lg:mb-28">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
            <FancyLink
              destination="/products/apricot"
              className="w-full h-full bg-white rounded-3xl overflow-hidden"
            >
              <div className="relative w-full bg-white">
                <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
                  <Image
                    src="/product/apricot.png"
                    blurDataURL="/product/apricot.png"
                    placeholder="blur"
                    alt="Apricot"
                    width={225}
                    height={410}
                  />
                </div>
              </div>

              <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
                <div className="font-nutmeg text-[12px] lg:text-default  md:text-[18px]">
                  Hazelnut Spread with Cocoa
                </div>
              </div>
            </FancyLink>
          </div>
          <div className="absolute bottom-[-2%] left-0 z-10 h-36 w-full flex justify-center items-end linearMore">
            <FancyLink className="relative bottom-[-25%] flex flex-col items-center space-y-4">
              <div className="rotate-90 border-2 inline-block rounded-full border-morin-blue py-2.5 px-3">
                <Arrow color={colors.morinBlue} className="w-5" stroke={3} />
              </div>
              <span className='w-20 font-semibold text-morin-blue'>See More Products</span>
            </FancyLink>
          </div>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
