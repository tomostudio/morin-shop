import React from 'react'
import Link from 'next/link'
import { Arrow, ArrowLeft } from './svg'

const MorinButton = ({
  children,
  color = '#fff',
  border = false,
  arrow = false,
  className,
  destination,
  targetBlank,
  ariaLabel,
  onClick = () => {},
  ...others
}) => {
  const renderArrow = () => {
    return (
      <div
        className={`w-5 ${
          arrow === 'left' ? 'mr-2' : arrow === 'right' ? 'ml-2' : ''
        }`}
      >
        {arrow === 'left' ? (
          <ArrowLeft color={color} />
        ) : arrow === 'right' ? (
          <Arrow color={color} />
        ) : (
          <></>
        )}
      </div>
    )
  }

  const defaultClass = `flex flex-wrap items-center w-fit min-h-[25px] font-semibold leading-none rounded-full border-2 border-solid md:min-h-[30px] ${
    border ? 'px-5' : ''
  }`

  return !destination ? (
    <button
      type="button"
      onClick={onClick}
      className={`${defaultClass} ${className ? className : ''}`}
      style={{ borderColor: border ? color : 'transparent' }}
      {...others}
    >
      {arrow === 'left' ? (
        <>
          {renderArrow()}
          <span className="pt-px md:pt-0.5">{children}</span>
        </>
      ) : arrow === 'right' ? (
        <>
          <span className="pt-px md:pt-0.5">{children}</span>
          {renderArrow()}
        </>
      ) : (
        <span className="pt-px md:pt-0.5">{children}</span>
      )}
    </button>
  ) : !targetBlank ? (
    <Link href={destination}>
      <a
        aria-label={ariaLabel}
        className={`${defaultClass} ${className ? className : ''}`}
        style={{ borderColor: border ? color : 'transparent' }}
        onClick={onClick}
        {...others}
      >
        {arrow === 'left' ? (
          <>
            {renderArrow()}
            <span className="pt-px md:pt-0.5">{children}</span>
          </>
        ) : arrow === 'right' ? (
          <>
            <span className="pt-px md:pt-0.5">{children}</span>
            {renderArrow()}
          </>
        ) : (
          <span className="pt-px md:pt-0.5">{children}</span>
        )}
      </a>
    </Link>
  ) : (
    <a
      href={destination}
      aria-label={ariaLabel}
      className={`${defaultClass} ${className ? className : ''}`}
      style={{ borderColor: border ? color : 'transparent' }}
      target="_blank"
      {...others}
    >
      {arrow === 'left' ? (
        <>
          {renderArrow()}
          <span className="pt-px md:pt-0.5">{children}</span>
        </>
      ) : arrow === 'right' ? (
        <>
          <span className="pt-px md:pt-0.5">{children}</span>
          {renderArrow()}
        </>
      ) : (
        <span className="pt-px md:pt-0.5">{children}</span>
      )}
    </a>
  )
}

export default MorinButton
