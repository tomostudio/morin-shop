import Link from 'next/link'
import { ArrowLeft, ArrowRight, Cart } from '../svg'

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
    borderColor
      ? 'border-2 border-solid hover:shadow-softer hover:bg-current'
      : ''
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

export default ArrowButton
