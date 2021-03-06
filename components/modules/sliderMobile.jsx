import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import Image from 'next/image'
import urlFor from '@/helpers/sanity/urlFor'

const SliderMobile = ({ data }) => {
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
          <div className="relative w-full h-96 rounded-3xl overflow-hidden">
            <Image
              src={urlFor(item.image).url()}
              alt={item.image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SliderMobile
