import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Image from 'next/legacy/image';
import colors from '@/helpers/preset/colors';
import urlFor from '@/helpers/sanity/urlFor';
import { ArrowButton, DefaultButton } from '@/components/utils/buttons';

const SliderDesktop = ({ data, getIndex, setIndex }) => {
  return (
    <>
      <div className='relative w-full'>
        <DefaultButton
          hover={false}
          className='absolute linearProduct-90 w-28 h-28 top-0 left-0 mt-7 z-2 swiper-button-prev'
        />
        <Swiper
          slidesPerView='auto'
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
            setIndex(e.realIndex);
          }}
          className='sliderDesktop w-full mt-7'
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <DefaultButton
                onClick={() => setIndex(index)}
                className={`relative w-28 h-28 border-2 border-white p-2 rounded-3xl bg-white ${index} overflow-hidden ${
                  getIndex === index ? '!border-morin-blue' : ''
                }`}
              >
                <div className='w-full h-full relative'>
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.image.alt}
                    layout='fill'
                    objectFit='contain'
                    objectPosition='center'
                    placeholder='blur'
                    blurDataURL={urlFor(item.image)
                      .width(50)
                      .blur(20)
                      .format('auto')
                      .url()}
                  />
                </div>
              </DefaultButton>
            </SwiperSlide>
          ))}
        </Swiper>
        <DefaultButton
          hover={false}
          className='absolute linearProduct-270 w-28 h-28 top-0 right-0 mt-7 z-2 swiper-button-next'
        />
      </div>
      <div className='mt-5 flex justify-end'>
        <ArrowButton
          color={colors.morinBlue}
          arrowLeft
          center={false}
          showText={false}
          hover='white'
          borderColor={colors.morinBlue}
          className='h-9 swiper-button-prev'
        />
        <ArrowButton
          center={false}
          color={colors.morinBlue}
          arrowRight
          showText={false}
          hover='white'
          borderColor={colors.morinBlue}
          className='ml-2 h-9 swiper-button-next'
        />
      </div>
    </>
  );
};

export default SliderDesktop;
