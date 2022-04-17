import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css/navigation'
import Image from 'next/image'
import MorinButton from '../utils/morinButton'
import colors from '@/helpers/preset/colors'

const SliderDesktop = ({ data }) => {
  return (
    <>
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
          className="sliderDesktop w-full mt-7"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-28 h-28 rounded-3xl overflow-hidden">
                <Image
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {data.length > 5 && (
          <div className="absolute linearProduct w-32 h-28 top-0 right-0 mt-7 z-2" />
        )}
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
    </>
  )
}

export default SliderDesktop
