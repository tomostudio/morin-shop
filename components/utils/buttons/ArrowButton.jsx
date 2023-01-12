import Link from 'next/link'
import { ArrowLeft, ArrowRight, Cart } from '../svg'

const ArrowButton = ({
  children,
  quantity,
  color = '#fff',
  cart = false,
  arrowLeft = false,
  arrowRight = false,
  center = true,
  borderColor = false,
  showText = true,
  mobileText = true,
  bgColor = 'bg-transparent',
  className = '',
  destination,
  targetBlank,
  ariaLabel,
  hover,
  onClick = () => {},
  ...others
}) => {
  const defaultClass = `stroke-button flex flex-wrap items-center w-fit min-h-[2rem] font-semibold leading-none rounded-full ${
    borderColor
      ? `border-2 border-solid hover:bg-current ${
          bgColor === 'bg-transparent' ? 'hover:shadow-softer' : ''
        }`
      : ''
  } px-3 duration-300 transition-all ${center ? 'mx-auto' : ''} ${className}`

  return !destination ? (
    <button
      aria-label={ariaLabel}
      type="button"
      onClick={onClick}
      className={`transition-all ${defaultClass} ${bgColor} ${
        className ? className : ''
      } ${
        hover === 'white'
          ? 'hover-white'
          : hover === 'blue'
          ? 'hover-blue'
          : 'hover:opacity-50 '
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
        <div className={` transition-allmr-2 ${!children ? 'last:mr-0' : ''}`}>
          <ArrowLeft color={color} />
        </div>
      )}
      {quantity && <>{quantity}</>}
      {showText && (
        <span className={`transition-all pt-[2px] ${!mobileText ? 'hidden md:block' : ''}`}>
          {children}
        </span>
      )}
      {arrowRight && (
        <div className={`transition-all ml-2 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      )}
    </button>
  ) : !targetBlank ? (
    <Link
      href={destination}
      aria-label={ariaLabel}
      className={`transition-all ${defaultClass} ${bgColor} select-none ${
        className ? className : ''
      } ${
        hover === 'white'
          ? 'hover-white'
          : hover === 'blue'
          ? 'hover-blue'
          : 'hover:opacity-50 transition-opacity'
      } ${quantity ? 'py-[2px] md:py-[0.5px]' : ''}`}
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
        <div
          className={`${mobileText ? 'mr-2' : 'mr-0'} md:mr-2 ${
            !children ? 'last:mr-0' : ''
          }`}
        >
          <ArrowLeft color={color} />
        </div>
      )}
      {quantity && <>{quantity}</>}
      {showText && (
        <span className={`pt-[2px] ${!mobileText ? 'hidden md:block' : ''}`}>
          {children}
        </span>
      )}
      {arrowRight && (
        <div
          className={`${mobileText ? 'ml-2' : 'ml-0'} md:ml-2 ${
            !children ? 'last:ml-0' : ''
          }`}
        >
          <ArrowRight color={color} />
        </div>
      )}
      {cart && (
        <div
          className={`${mobileText ? 'ml-2' : 'ml-0'} md:ml-2 ${
            !children ? 'last:ml-0' : ''
          }`}
        >
          <Cart color={color} className={`w-5 h-auto`} />
        </div>
      )}
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`transition-all ${defaultClass} bg-[${bgColor}] ${
        className ? className : ''
      } ${
        hover === 'white'
          ? 'hover-white'
          : hover === 'blue'
          ? 'hover-blue'
          : 'hover:opacity-50'
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
      {quantity && <>{quantity}</>}
      {showText && (
        <span className={`pt-[2px] ${!mobileText ? 'hidden md:block' : ''}`}>
          {children}
        </span>
      )}
      {arrowRight && (
        <div className={`ml-2 ${!children ? 'last:ml-0' : ''}`}>
          <ArrowRight color={color} />
        </div>
      )}
    </a>
  )
}

export default ArrowButton
