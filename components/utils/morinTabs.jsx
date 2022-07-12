import { useState, useRef, useEffect } from 'react'
import FancyLink from './fancyLink'

const MorinTabs = ({ tabData }) => {
  // Market Variable
  const [markerW, setMarkerW] = useState(58) // width of marker
  const [markerPos, setMarkerPos] = useState(0) // position of marker
  let widthData = [] // always collect width data.

  const defaultNavRef = useRef()
  const navRef = useRef()

  // function when navigation on click
  const navMouseClick = (e) => {
    // set marker width according to button yang di click
    setMarkerW(e.target.clientWidth)
    defaultNavRef.current = e.target

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus')
    })

    // set target nav color to white (with class)
    e.target.classList.add('focus')

    // set position variable
    let moveX = 0

    // get width of all nav
    navRef.current.childNodes.forEach((item, id) => {
      widthData[id] = item.clientWidth
    })

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (id < e.target.dataset.id) {
        moveX = moveX + w
      }
    })

    // set marker position.
    setMarkerPos(moveX)
  }

  const navMouseEnter = (e) => {
    // set marker width according to button yang di hover
    document.getElementById('marker').style.width = `${e.target.clientWidth}px`

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus')
    })

    // set target nav color to white (with class)
    e.target.classList.add('focus')

    // set position variable
    let moveX = 0

    // get width of all nav
    navRef.current.childNodes.forEach((item, id) => {
      widthData[id] = item.clientWidth
    })

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (id < e.target.dataset.id) {
        moveX = moveX + w
      }
    })

    // set marker position according to button yang di hover
    document.getElementById('marker').style.transform = `translateX(${moveX}px)`
  }

  const navMouseLeave = (e) => {
    // set marker width according to button yang di leave
    document.getElementById('marker').style.width = `${markerW}px`

    // set marker position according to button yang di leave
    document.getElementById(
      'marker',
    ).style.transform = `translateX(${markerPos}px)`

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus')
    })

    // set target nav color to white (with class)
    defaultNavRef.current.classList.add('focus')
  }

  return (
    <nav
      className="header-nav w-full lg:w-fit pointer-events-auto relative rounded-full font-medium bg-white py-1.5 px-2 shadow-softer flex justify-around lg:justify-start"
      onSubmit={(e) => e.preventDefault()}
      ref={navRef}
    >
      <FancyLink
        className="focus"
        onClick={navMouseClick}
        onMouseEnter={navMouseEnter}
        onMouseLeave={navMouseLeave}
        a11yText={'Navigate to the Get Morin shop page'}
        data-id={0}
        ref={defaultNavRef}
      >
        All
      </FancyLink>
      {tabData?.map((item, id) => (
        <FancyLink
          a11yText={item.ariaText}
          key={item.id}
          className=""
          onClick={navMouseClick}
          onMouseEnter={navMouseEnter}
          onMouseLeave={navMouseLeave}
          data-id={id + 1}
        >
          {item.title}
        </FancyLink>
      ))}
      <div
        id="marker"
        aria-hidden="true"
        style={{
          width: markerW,
          transform: `translateX(${markerPos}px)`,
        }}
        className="absolute left-[6px] z-1 h-8 rounded-full bg-morin-blue shadow-softer transition-all duration-300 ease-in-out-expo"
      />
    </nav>
  )
}

export default MorinTabs
