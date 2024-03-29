import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import Image from 'next/legacy/image'
import urlFor from '@/helpers/sanity/urlFor'
import { DefaultButton } from '@/components/utils/buttons'

const SliderMobile = ({ data, setIndex }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={true}
      modules={[Pagination]}
      className="w-full"
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <DefaultButton
            onClick={() => setIndex(index)}
            className="relative w-full h-[65vh] min-h-[450px] md:h-96 rounded-3xl overflow-hidden"
          >
            <Image
              src={urlFor(item.image).url()}
              alt={item.image.alt}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              placeholder='blur'
              blurDataURL={urlFor(item.image).width(50).blur(20).format('auto').url()}
            />
          </DefaultButton>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderMobile
