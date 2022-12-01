import Link from 'next/link'
import { forwardRef } from 'react'
import { ArrowRight, ArrowLeft, Cart } from '@/components/utils/svg'

const DefaultButton = forwardRef(
  (
    {
      destination,
      a11yText,
      className = '',
      children,
      hover = true,
      blank = false,
      onClick = () => {},
      ...others
    },
    ref,
  ) => {
    return !destination ? (
      <button
        aria-label={a11yText}
        className={`cursor-pointer ${className} pointer-events-auto ${
          hover ? 'hover:opacity-50 transition-opacity' : ''
        }`}
        onClick={onClick}
        ref={ref}
        {...others}
      >
        {children}
      </button>
    ) : !blank ? (
      <Link href={destination} scroll={false}>
        <a
          aria-label={a11yText}
          className={`${className} pointer-events-auto ${
            hover ? 'hover:opacity-50 transition-opacity' : ''
          }`}
          ref={ref}
          {...others}
        >
          {children}
        </a>
      </Link>
    ) : (
      <a
        aria-label={a11yText}
        className={`${
          destination ? 'pointer-events-auto' : 'pointer-events-none'
        } ${hover ? 'hover:opacity-50 transition-opacity' : ''} ${className}`}
        target="_blank"
        href={destination}
        ref={ref}
        {...others}
      >
        {children}
      </a>
    )
  },
)

const MoreButton = ({ children, onClick = () => {} }) => {
  return (
    <DefaultButton
      onClick={onClick}
      className="relative flex flex-col items-center space-y-4"
    >
      <div className="rotate-90 border-2 inline-block rounded-full border-morin-blue py-2.5 px-3">
        <ArrowRight color={colors.morinBlue} className="w-5" stroke={3} />
      </div>
      <span className="w-20 font-semibold text-morin-blue">{children}</span>
    </DefaultButton>
  )
}

const ArrowButton = ({
  children,
  color = '#fff',
  cart = false,
  arrowLeft = false,
  arrowRight = false,
  center = true,
  borderColor = false,
  showText = true,
  bgColor = 'bg-transparent',
  className,
  destination,
  targetBlank,
  ariaLabel,
  hover,
  onClick = () => {},
  ...others
}) => {
  const defaultClass = `stroke-button flex flex-wrap items-center w-fit min-h-[30px] font-semibold leading-none rounded-full ${
    borderColor ? 'border-2 border-solid hover:shadow-softer hover:bg-current' : ''
  } px-3 duration-300 transition-all ${center ? 'mx-auto' : ''} `

  return !destination ? (
    <button
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      className={`${defaultClass} ${bgColor} ${className ? className : ''} ${
        hover === 'white'
          ? 'hover-white'
          : hover === 'blue'
          ? 'hover-blue'
          : 'hover:opacity-50 transition-opacity'
      }`}
      style={
        borderColor
          ? { color: color, borderColor: borderColor }
          : {
              color: color,
            }
      }
      {...others}
    >
      {arrowLeft && (
        <div className={`mr-2 ${!children ? 'last:mr-0' : ''}`}>
          <ArrowLeft color={color} />
        </div>
      )}
      {showText && <span className="pt-[2px]">{children}</span>}
      {arrowRight && (
        <div className={`ml-2 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      )}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} ${bgColor} select-none ${
          className ? className : ''
        } ${
          hover === 'white'
            ? 'hover-white'
            : hover === 'blue'
            ? 'hover-blue'
            : 'hover:opacity-50 transition-opacity'
        }`}
        style={
          borderColor
            ? { color: color, borderColor: borderColor }
            : {
                color: color,
              }
        }
        onClick={onClick}
        {...others}
      >
        {arrowLeft && (
          <div className={`mr-2 ${!children ? 'last:mr-0' : ''}`}>
            <ArrowLeft color={color} />
          </div>
        )}
        {showText && <span className="pt-[2px]">{children}</span>}
        {arrowRight && (
          <div className={`ml-2 ${!children ? 'last:ml-0' : ''}`}>
            <ArrowRight color={color} />
          </div>
        )}
        {cart && (
          <div className={`ml-2 ${!children ? 'last:ml-0' : ''}`}>
            <Cart color={color} />
          </div>
        )}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} bg-[${bgColor}] ${
        className ? className : ''
      } ${
        hover === 'white'
          ? 'hover-white'
          : hover === 'blue'
          ? 'hover-blue'
          : 'hover:opacity-50 transition-opacity'
      }`}
      style={
        borderColor
          ? { color: color, borderColor: borderColor }
          : {
              color: color,
            }
      }
      target="_blank"
      {...others}
    >
      {arrowLeft && (
        <div className={`mr-2 ${!children ? 'last:mr-0' : ''}`}>
          <ArrowLeft color={color} />
        </div>
      )}
      {showText && <span className="pt-[2px]">{children}</span>}
      {arrowRight && (
        <div className={`ml-2 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      )}
    </a>
  )
}

const GradientButton = ({ children, className, ...others }) => {
  return (
    <DefaultButton
      className={`w-44 py-3 md:w-40 lg:w-52 rounded-full bg-header shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] font-semibold text-default md:text-[20px] lg:text-[26px] text-white ${className}`}
      {...others}
    >
      {children}
    </DefaultButton>
  )
}

export { DefaultButton, MoreButton, ArrowButton, GradientButton }
