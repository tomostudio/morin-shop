import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus } from '@/components/utils/svg'
import colors from '@/helpers/preset/colors'
import MorinButton from '@/components/utils/morinButton'
import Header from '@/components/modules/header'
import ProductCard from '@/components/modules/productCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/pagination'

export default function ProductSlug() {
  const sizeData = [
    {
      id: 'size-1',
      title: '17gr',
      value: '17gr',
      ariaText: 'Size 17gr',
    },
    {
      id: 'size-2',
      title: '170gr',
      value: '170gr',
      ariaText: 'Size 170gr',
    },
    {
      id: 'size-3',
      title: '330gr',
      value: '330gr',
      ariaText: 'Size 330gr',
    },
    {
      id: 'size-4',
      title: '590gr',
      value: '590gr',
      ariaText: 'Size 590gr',
    },
  ]
  const defaultSize = sizeData[1]
  const [selectSize, setSelectSize] = useState(defaultSize?.value)
  const [thisEl, setThisEl] = useState(null)

  const handleActiveSize = (val, id) => {
    // do navigational function here

    measureEl(id)
    setSelectSize(val)
  }

  const measureEl = (id) => {
    const parent = document
      .querySelector('.size-switch')
      .getBoundingClientRect()
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect()
    const left = current.left - parent.left

    setThisEl(left)
  }

  useEffect(() => {
    measureEl(defaultSize?.id)
    window.addEventListener('LocoCall', (e) => {
      console.log(' triggered', e.detail)
    })
    return () => {}
  }, [])

  return (
    <Layout>
      <NextSeo title="Products" />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container className="flex flex-col lg:flex-row w-full gap-16 h-full mb-24">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="relative w-full lg:h-[754px] rounded-3xl overflow-hidden">
              <Image
                src="/product/blueberry.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="relative w-full">
              <Swiper
                slidesPerView="auto"
                spaceBetween={18}
                allowTouchMove={false}
                modules={[Navigation]}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                className="w-full mt-7"
              >
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                    <Image
                      src="/product/blueberry.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="absolute linearProduct w-32 h-28 top-0 right-0 mt-7 z-2"></div>
            </div>
            <div className="mt-5 flex justify-end">
              <MorinButton
                color={colors.morinBlue}
                arrow="left"
                border
                className="h-[37px] swiper-button-prev"
              ></MorinButton>
              <MorinButton
                color={colors.morinBlue}
                arrow="right"
                border
                className="ml-4 h-[37px] swiper-button-next"
              ></MorinButton>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-8 text-morin-blue">
            <div className="w-full flex flex-col">
              <h2 className="text-h2 font-nutmeg font-normal m-0">
                Blueberry Jam
              </h2>
              <h3 className="text-ctitle font-normal m-0">IDR 39.000,-</h3>
            </div>
            <div>
              <span className="font-medium">select size</span>
              <div
                className="size-switch mt-3 hidden lg:flex w-fit"
                onSubmit={(e) => e.preventDefault()}
              >
                {sizeData?.map((item) => (
                  <div key={item.id} className="size-switch__item">
                    <input
                      type="radio"
                      name="slectSize"
                      className="size-switch__input sr-only"
                      id={item.id}
                      value={item.value}
                      checked={item.value === selectSize}
                      onChange={(e) =>
                        handleActiveSize(e.target.value, item.id)
                      }
                    />
                    <label className="size-switch__label" htmlFor={item.id}>
                      {item.title}
                    </label>
                  </div>
                ))}
                {thisEl ? (
                  <div
                    aria-hidden="true"
                    style={{ transform: `translate(${thisEl}px, -50%)` }}
                    className="size-switch__marker"
                  />
                ) : (
                  ''
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className="flex justify-between items-center mr-6 px-5 pt-3 pb-2 rounded-full border-2 border-morin-blue w-40">
                <FancyLink className="pb-2">
                  <Minus />
                </FancyLink>
                <span className="font-medium text-ctitleSmall">1</span>
                <FancyLink>
                  <Plus />
                </FancyLink>
              </div>
              <FancyLink className="w-52 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-[26px] text-white">
                Add to Cart
              </FancyLink>
            </div>
            <div className="flex flex-col max-w-md">
              <p className="font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
                enim nulla scelerisque viverra scelerisque eu. Dolor sit amet,
                consectetur adipiscing elit. Sit enim nulla scelerisque viverra
                sc. <br />
                <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sit enim nulla scelerisque viverra scelerisque eu. Dolor sit
                amet.
              </p>
              <MorinButton
                color={colors.morinBlue}
                border
                arrow="right"
                className="mt-8 h-[30px]"
              >
                View Products Details
              </MorinButton>
            </div>
          </div>
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
