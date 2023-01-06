import { useMediaQuery } from '@/helpers/functional/checkMedia'
import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { SliderDesktop, SliderMobile } from '../index'

const PDImage = ({ sliderImage }) => {
  const [getIndex, setIndex] = useState(0)

  return (
    <div className="w-full md:w-1/2 md:h-[calc(100vh-105px)] md:min-h-[720px] flex flex-col">
      <div className="relative hidden md:block w-full h-full rounded-3xl overflow-hidden">
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
