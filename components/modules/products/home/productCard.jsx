import { DefaultButton } from '@/components/utils/buttons'
import Image from 'next/image'
import React from 'react'

const ProductCard = ({
  variants,
  title,
  link,
  imgSrc,
  imgPlaceholder,
  imgAlt,
}) => {
  return (
    <DefaultButton
      destination={link}
      className="relative w-full h-full bg-white rounded-2xl overflow-hidden"
    >
      <div className={`relative w-full px-5 pt-6 md:pt-10 lg:px-12 lg:pt-12`}>
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
      {variants.every((e) => e.inventoryQuantity === 0) && (
        <>
          <div className="absolute z-10 top-0 left-0 h-full w-full bg-black opacity-25 flex justify-center items-center" />
          <span className="absolute z-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white p-2 rounded-full font-medium text-morin-blue">
            SOLD OUT
          </span>
        </>
      )}

      <div className="relative text-morin-blue text-center px-8 pt-4 pb-6 md:p-8">
        <div className={`font-nutmeg leading-none text-default md:text-ctitleSmall`}>
          {title}
        </div>
      </div>
    </DefaultButton>
  )
}

export default ProductCard
