import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import Image from 'next/image'
import colors from '@/helpers/preset/colors'
import urlFor from '@/helpers/sanity/urlFor'
import { ArrowButton, DefaultButton } from '../utils/buttons'

const SliderDesktop = ({ data, getIndex, setIndex }) => {
  return (
    <>
      <div className="relative w-full">
        <DefaultButton className="absolute linearProduct-90 w-32 h-28 top-0 left-0 mt-7 z-2 swiper-button-prev" />
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          centeredSlidesBounds={true}
          loop={true}
          spaceBetween={18}
          allowTouchMove={false}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          onSlideChange={(e) => {
            setIndex(e.realIndex)
          }}
          className="sliderDesktop w-full mt-7"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <DefaultButton
                onClick={() => setIndex(index)}
                className={`relative w-28 h-28 rounded-3xl ${index} overflow-hidden ${
                  getIndex === index ? 'opacity-50' : ''
                }`}
              >
                <Image
                  src={urlFor(item.image).url()}
                  alt={item.image.alt}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </DefaultButton>
            </SwiperSlide>
          ))}
        </Swiper>
        <DefaultButton className="absolute linearProduct-270 w-32 h-28 top-0 right-0 mt-7 z-2 swiper-button-next" />
      </div>
      <div className="mt-5 flex justify-end">
        <ArrowButton
          color={colors.morinBlue}
          arrowLeft
          center={false}
          showText={false}
          hover="white"
          borderColor={colors.morinBlue}
          className="h-[37px] swiper-button-prev"
        />
        <ArrowButton
          center={false}
          color={colors.morinBlue}
          arrowRight
          showText={false}
          hover="white"
          borderColor={colors.morinBlue}
          className="ml-4 h-[37px] swiper-button-next"
        />
      </div>
    </>
  )
}

export default SliderDesktop
