import React from 'react'
import Link from 'next/link'
import { Arrow, ArrowLeft, Cart } from './svg'
import colors from '@/helpers/preset/colors'

const MorinButton = ({
  children,
  color = '#fff',
  border = false,
  arrow = false,
  cart = false,
  showText = false,
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
          arrow === 'left'
            ? showText
              ? 'mr-2'
              : children
              ? 'lg:mr-2'
              : ''
            : arrow === 'right' || cart
            ? showText
              ? 'ml-2'
              : children
              ? 'lg:ml-2'
              : ''
            : ''
        }`}
      >
        {cart ? (
          <Cart color={colors.white} className="mx-auto" />
        ) : arrow === 'left' ? (
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
    border || cart ? 'px-2 lg:px-3' : ''
  }`

  return !destination ? (
    <button
      type="button"
      onClick={onClick}
      className={`${defaultClass} ${className ? className : ''}`}
      style={{ borderColor: border ? color : 'transparent' }}
      {...others}
    >
      {cart ? (
        <>
          <span
            className={`pt-px md:pt-0.5 ${!showText ? 'hidden lg:block' : ''}`}
          >
            {children}
          </span>
          {renderArrow()}
        </>
      ) : (
        <>
          {arrow === 'left' ? (
            <>
              {renderArrow()}
              <span
                className={`pt-px md:pt-0.5 ${
                  !showText ? 'hidden lg:block' : ''
                }`}
              >
                {children}
              </span>
            </>
          ) : arrow === 'right' ? (
            <>
              <span
                className={`pt-px md:pt-0.5 ${
                  !showText ? 'hidden lg:block' : ''
                }`}
              >
                {children}
              </span>
              {renderArrow()}
            </>
          ) : (
            <span
              className={`pt-px md:pt-0.5 ${
                !showText ? 'hidden lg:block' : ''
              }`}
            >
              {children}
            </span>
          )}
        </>
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
        {cart ? (
          <>
            <span
              className={`${
                !showText ? 'hidden lg:block' : ''
              }`}
            >
              {children}
            </span>
            {renderArrow()}
          </>
        ) : (
          <>
            {arrow === 'left' ? (
              <>
                {renderArrow()}
                <span
                  className={`pt-px md:pt-0.5 ${
                    !showText ? 'hidden lg:block' : ''
                  }`}
                >
                  {children}
                </span>
              </>
            ) : arrow === 'right' ? (
              <>
                <span
                  className={`pt-px md:pt-0.5 ${
                    !showText ? 'hidden lg:block' : ''
                  }`}
                >
                  {children}
                </span>
                {renderArrow()}
              </>
            ) : (
              <span
                className={`pt-px md:pt-0.5 ${
                  !showText ? 'hidden lg:block' : ''
                }`}
              >
                {children}
              </span>
            )}
          </>
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
          <span
            className={`pt-px md:pt-0.5 ${!showText ? 'hidden lg:block' : ''}`}
          >
            {children}
          </span>
        </>
      ) : arrow === 'right' ? (
        <>
          <span
            className={`pt-px md:pt-0.5 ${!showText ? 'hidden lg:block' : ''}`}
          >
            {children}
          </span>
          {renderArrow()}
        </>
      ) : (
        <span
          className={`pt-px md:pt-0.5 ${!showText ? 'hidden lg:block' : ''}`}
        >
          {children}
        </span>
      )}
    </a>
  )
}

export default MorinButton
