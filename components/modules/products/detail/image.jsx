import { DefaultButton } from '@/components/utils/buttons'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import urlFor from '@/helpers/sanity/urlFor'
import Image from 'next/legacy/image'
import { useState } from 'react'
import { SliderDesktop, SliderMobile } from '../index'

const PDImage = ({ sliderImage }) => {
  const [getIndex, setIndex] = useState(0)

  return (
    <div className="w-full md:w-1/2 md:h-[calc(100vh-105px)] md:min-h-[720px] flex flex-col">
      <div className="relative hidden md:block w-full h-full overflow-hidden">
        {sliderImage[getIndex]?.image && (
          <Image
            src={urlFor(sliderImage[getIndex].image).url()}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            placeholder="blur"
            blurDataURL={urlFor(sliderImage[getIndex].image)
              .width(100)
              .blur(20)
              .format('auto')
              .url()}
          />
        )}
      </div>
      {useMediaQuery('(min-width: 768px)') ? (
        sliderImage.legth > 3 ? (
          <SliderDesktop
            data={sliderImage}
            getIndex={getIndex}
            setIndex={setIndex}
          />
        ) : (
          <div className="w-full flex gap-[18px] mt-7">
            {sliderImage.map((item, index) => (
              <DefaultButton
                key={index}
                onClick={() => setIndex(index)}
                className={`relative w-28 h-28 border-2 border-white p-2 rounded-3xl bg-white overflow-hidden ${
                  getIndex === index ? '!border-morin-blue' : ''
                }`}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.image.alt}
                    layout="fill"
                    objectFit="contain"
                    objectPosition="center"
                    placeholder="blur"
                    blurDataURL={urlFor(item.image)
                      .width(50)
                      .blur(20)
                      .format('auto')
                      .url()}
                  />
                </div>
              </DefaultButton>
            ))}
          </div>
        )
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
