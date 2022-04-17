import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'

const ProductCard = ({ title, imgSrc, imgAlt, link }) => {
  return (
    <FancyLink
      destination={link}
      className="w-full h-full bg-white rounded-3xl overflow-hidden"
    >
      <div className="relative w-full bg-white">
        <div className="relative flex justify-center py-8 px-9 pb-0 -mt-5 translate-y-5 z-1 md:p-11 md:pb-0 md:-mt-7 md:translate-y-7 lg:pt-12 lg:px-20 lg:-mt-5 lg:translate-y-5">
          <Image
            src={imgSrc}
            blurDataURL={imgSrc}
            placeholder="blur"
            alt={imgAlt}
            width={225}
            height={410}
          />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-4 lg:px-20 pt-8 pb-4 lg:pt-10 z-1 md:pt-12 lg:pb-5 xl:pb-8">
        <div className="font-nutmeg text-[12px] lg:text-default md:text-[18px]">
          {title}
        </div>
      </div>
    </FancyLink>
  )
}

export default ProductCard
