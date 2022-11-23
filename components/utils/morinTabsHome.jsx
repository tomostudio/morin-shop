import { useAppContext } from 'context/state'
import { useState, useRef, useEffect } from 'react'
import { DefaultButton } from './buttons'

const MorinTabsHome = ({ tabData, loadCategory }) => {
  // Market Variable
  const [markerW, setMarkerW] = useState(58) // width of marker
  const [markerPos, setMarkerPos] = useState(0) // position of marker
  let widthData = [] // always collect width data.
  const ctx = useAppContext()

  const defaultNavRef = useRef()
  const navRef = useRef()

  // function when navigation on click
  const navMouseClick = (e, category) => {
    if (loadCategory) loadCategory(category)

    // if (category === 'all') {
    //   ctx.setListProduct(8)
    // } else {
    //   ctx.setListProduct(
    //     product.filter((data) => data.type.slug.current === category).length < 8
    //       ? product.filter((data) => data.type.slug.current === category).length
    //       : 9,
    //   )
    // }
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
      className="header-nav w-full lg:w-fit pointer-events-auto relative rounded-full bg-white py-1.5 px-2 shadow-softer flex justify-around lg:justify-start"
      onSubmit={(e) => e.preventDefault()}
      ref={navRef}
    >
      <DefaultButton
        className="focus font-medium"
        hover={false}
        onClick={(e) => navMouseClick(e, 'all')}
        onMouseEnter={navMouseEnter}
        onMouseLeave={navMouseLeave}
        a11yText={'Navigate to the Get Morin shop page'}
        data-id={0}
        ref={defaultNavRef}
      >
        All
      </DefaultButton>
      {tabData?.map((item, id) => (
        <DefaultButton
          key={`tab-${id + 1}`}
          hover={false}
          className="font-medium"
          onClick={(e) => navMouseClick(e, item.slug.current)}
          onMouseEnter={navMouseEnter}
          onMouseLeave={navMouseLeave}
          data-id={id + 1}
        >
          {item.title.en}
        </DefaultButton>
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

export default MorinTabsHome
