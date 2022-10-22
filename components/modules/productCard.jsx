import Image from 'next/image'
import React from 'react'
import FancyLink from '../utils/fancyLink'

const ProductCard = ({ title, link, imgSrc, imgPlaceholder, imgAlt }) => {
  return (
    <FancyLink
      destination={link}
      className="w-full h-full bg-white rounded-2xl overflow-hidden"
    >
      <div className={`relative w-full px-5 pt-10 lg:px-12 lg:pt-12`}>
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

      <div className="relative text-morin-blue text-center p-8">
        <div className={`font-nutmeg leading-none text-ctitleSmall`}>
          {title}
        </div>
      </div>
    </FancyLink>
  )
}

export default ProductCard
