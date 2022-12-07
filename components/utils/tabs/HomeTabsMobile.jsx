import { useMediaQuery } from '@/helpers/functional/checkMedia'
import { useState, useEffect, useRef } from 'react'

const HomeTabsMobile = ({ tabData, onChange = () => {}, className }) => {
  const [currentTab, setCurrentTab] = useState('tab-1')
  const [thisEl, setThisEl] = useState(0)
  const [width, setWidth] = useState(null)
  const layoutRef = useRef({})
  layoutRef.current = currentTab

  const handleTabChange = (id) => {
    // do callback function here
    onChange()

    measureEl(id)
    setCurrentTab(id)
  }

  const measureEl = (id) => {
    const parent = document
      .querySelector('.radio-switch')
      .getBoundingClientRect()
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect()
    const left = current.left - parent.left
    const marker = {
      transform: left,
      width: (window.innerWidth - 32) / 5,
    }

    setThisEl(marker)
  }
  const resize = () => {
    setWidth((window.innerWidth - 32) / 5)
    measureEl(layoutRef.current)
  }

  useEffect(() => {
    setThisEl({
      transform: 7,
      width: (window.innerWidth - 32) / 5,
    })
    setWidth((window.innerWidth - 32) / 5)
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    useMediaQuery('(max-width: 1023px)') && (
      <div className="absolute w-full h-[45px] left-0 top-[45px] flex justify-center items-center">
        <div
          className={`flex items-center ${className} justify-around w-full px-2`}
        >
          <form
            className="radio-switch flex px-2 py-1.5 bg-white relative shadow-softer rounded-full w-full grow-0"
            onSubmit={(e) => e.preventDefault()}
          >
            {tabData?.map((item, id) => (
              <div
                key={id}
                className="radio-switch__item relative block h-8 w-full"
              >
                <input
                  type="radio"
                  name="desktop-nav"
                  className="radio-switch__input sr-only"
                  id={`tab-${id + 1}`}
                  value={item.value}
                  checked={`tab-${item.id + 1}` === currentTab}
                  onChange={() => handleTabChange(`tab-${id + 1}`)}
                />
                <label
                  className="radio-switch__label relative flex items-center justify-center h-full rounded-full leading-none select-none z-2 cursor-pointer transition-all duration-300 pt-[2px]"
                  htmlFor={`tab-${item.id + 1}`}
                >
                  {item.title_en}
                </label>
              </div>
            ))}
            {thisEl ? (
              <div
                aria-hidden="true"
                style={{
                  transform: `translate(${thisEl.transform}px, 0%)`,
                  width: `${thisEl.width}px`,
                }}
                className="radio-switch__marker absolute z-1 top-[6px] left-[1px] shadow-softer rounded-full lg:w-20 h-8 bg-morin-blue duration-300"
              />
            ) : (
              ''
            )}
          </form>
        </div>
      </div>
    )
  )
}

export default HomeTabsMobile
