import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'
import { SunRay } from '../utils/svg'

const ProductCard = ({
  title,
  bgColor,
  imgSrc,
  imgBg,
  imgPlaceholder,
  imgAlt,
  link,
  small,
}) => {
  return small ? (
    <div className="w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden">
      <div className="relative w-full" style={{ background: bgColor }}>
        <div className="relative flex justify-center p-8 pb-0 -mt-5 translate-y-5 z-2 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7  xl:pt-24 xl:px-20 xl:-mt-5 xl:translate-y-5">
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="blur"
            alt={imgAlt}
            width={225}
            height={410}
          />
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full">
          <Image
            src={imgBg}
            blurDataURL={imgBg}
            placeholder="blur"
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="w-full h-full scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 overflow-hidden">
          <SunRay className="block animate-spin-slow" />
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full bg-white rounded-2xl shadow-softer overflow-hidden">
      <div className="relative w-full h-full" style={{ background: bgColor }}>
        <div className="relative h-full m-0 z-2 flex justify-center items-center">
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="blur"
            alt={imgAlt}
            width={225}
            height={410}
          />
        </div>
        <div className="absolute z-1 top-0 left-0 w-full h-full">
          <Image
            src={imgBg}
            blurDataURL={imgBg}
            placeholder="blur"
            alt={imgAlt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="w-full h-full scale-150 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 overflow-hidden">
          <SunRay className="block animate-spin-slow" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
