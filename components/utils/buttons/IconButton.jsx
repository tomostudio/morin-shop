import Link from 'next/link'

const ArrowButton = ({
  color = '#fff',
  center = true,
  borderColor = false,
  bgColor = 'bg-transparent',
  className,
  destination,
  targetBlank,
  ariaLabel,
  hover,
  icon,
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
      {icon}
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
        {icon}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} ${bgColor} ${
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
      {icon}
    </a>
  )
}

export default ArrowButton
