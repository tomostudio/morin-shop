import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight } from './svg'

const StrokeButton = ({
  children,
  color = '#fff',
  arrowLeft = false,
  arrowRight = false,
  center = true,
  className,
  destination,
  targetBlank,
  ariaLabel,
  hover,
  onClick = () => {},
  ...others
}) => {
  const defaultClass = `stroke-button flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full border-2 border-solid px-5 hover:shadow-softer hover:bg-current duration-300 transition-all ${
    center ? 'mx-auto' : ''
  } `

  return !destination ? (
    <button
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      className={`${defaultClass} bg-[${color.toLowerCase()}]  ${
        className ? className : ''
      } ${hover === 'white' ? 'hover-black' : 'hover-white'}`}
      style={{ color: color, borderColor: color }}
      {...others}
    >
      {arrowLeft ? (
        <div className={`w-5 mr-2 md:w-6 ${!children ? 'last:mr-0' : ''}`}>
          <ArrowLeft color={color} />
        </div>
      ) : (
        ''
      )}
      <div className="pt-[2px]">{children}</div>
      {arrowRight ? (
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      ) : (
        ''
      )}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} bg-[${color.toLowerCase()}] select-none ${
          className ? className : ''
        } ${hover === 'white' ? 'hover-black' : 'hover-white'}`}
        style={{ color: color, borderColor: color }}
        onClick={onClick}
        {...others}
      >
        {arrowLeft ? (
          <div className={`w-5 mr-2 md:w-6 ${!children ? 'last:mr-0' : ''}`}>
            <ArrowLeft color={color} />
          </div>
        ) : (
          ''
        )}
        <div className="pt-[2px]">{children}</div>
        {arrowRight ? (
          <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
            <ArrowRight color={color} />
          </div>
        ) : (
          ''
        )}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} bg-[${color.toLowerCase()}]  ${
        className ? className : ''
      } ${hover === 'white' ? 'hover-black' : 'hover-white'}`}
      style={{ color: color, borderColor: color }}
      target="_blank"
      {...others}
    >
      {arrowLeft ? (
        <div className={`w-5 mr-2 md:w-6 ${!children ? 'last:mr-0' : ''}`}>
          <ArrowLeft color={color} />
        </div>
      ) : (
        ''
      )}
      <div className="pt-[2px]">{children}</div>
      {arrowRight ? (
        <div className={`w-5 ml-2 md:w-6 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      ) : (
        ''
      )}
    </a>
  )
}

export default StrokeButton
