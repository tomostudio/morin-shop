import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'

const ProductCard = ({ title, link, imgSrc, imgPlaceholder, imgAlt }) => {
  return (
    <FancyLink
      destination={link}
      className="w-full h-full bg-white rounded-2xl overflow-hidden"
    >
      <div
        className={`relative w-full px-5 pt-10 md:px-10 md:pt-14 lg:px-20 lg:pt-20`}
      >
        <div className={`relative aspect-[4/5] z-2 flex justify-center`}>
          <Image
            src={imgSrc}
            blurDataURL={imgPlaceholder}
            placeholder="blur"
            alt={imgAlt}
            layout={'fill'}
            objectFit={'contain'}
          />
        </div>
      </div>

      <div className="relative text-morin-blue text-center px-3 pt-10 pb-8 z-2 md:pt-10 lg:px-4 lg:pb-8 xl:px-5 xl:pb-8">
        <div className={`font-nutmeg leading-none text-ctitleSmall`}>
          {title}
        </div>
      </div>
    </FancyLink>
  )
}

export default ProductCard
