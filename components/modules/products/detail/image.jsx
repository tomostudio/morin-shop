import { useMediaQuery } from '@/helpers/functional/checkMedia'
import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/image'
import { useState } from 'react'
import { SliderDesktop, SliderMobile } from '../index'

const PDImage = ({ sliderImage }) => {
  const [getIndex, setIndex] = useState(0)

  return (
    <div className="w-full md:w-1/2 flex flex-col">
      <div className="relative hidden lg:block w-full h-full aspect-w-1 aspect-h-1 rounded-3xl overflow-hidden">
        {sliderImage[getIndex]?.image && (
          <Image
            src={urlFor(sliderImage[getIndex].image).url()}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        )}
      </div>
      {useMediaQuery('(min-width: 768px)') ? (
        <SliderDesktop
          data={sliderImage}
          getIndex={getIndex}
          setIndex={setIndex}
        />
      ) : (
        <SliderMobile
          data={sliderImage}
          getIndex={getIndex}
          setIndex={setIndex}
        />
      )}
    </div>
  )
}

export default PDImage
