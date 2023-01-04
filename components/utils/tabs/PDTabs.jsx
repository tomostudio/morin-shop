import { useState, useRef, useEffect } from 'react';
import { DefaultButton } from '../buttons';

const PDTabs = ({ tabData, onChange }) => {
  const data = [];
  tabData.map((item, id) => {
    return data.push({
      ...item,
      realIndex: id,
    });
  });

  const defaultTab = data.filter((data) => data.inventoryQuantity !== 0)[0];
  // Market Variable
  const [markerW, setMarkerW] = useState(0); // width of marker
  const [markerPos, setMarkerPos] = useState(0); // position of marker
  let widthData = []; // always collect width data.

  const defaultNavRef = useRef();
  const navRef = useRef();

  // function when navigation on click
  const navMouseClick = (e, index) => {
    onChange(index);

    // set marker width according to button yang di click
    setMarkerW(e.target.clientWidth);
    defaultNavRef.current = e.target;

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus');
    });

    // set target nav color to white (with class)
    e.target.classList.add('focus');

    // set position variable
    let moveX = 0;

    // get width of all nav
    navRef.current.childNodes.forEach((item, id) => {
      widthData[id] = item.clientWidth;
    });

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (id < e.target.dataset.id) {
        moveX = moveX + w;
      }
    });

    // set marker position.
    setMarkerPos(moveX);
  };

  const navMouseEnter = (e) => {
    // set marker width according to button yang di hover
    document.getElementById('marker').style.width = `${e.target.clientWidth}px`;

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus');
    });

    // set target nav color to white (with class)
    e.target.classList.add('focus');

    // set position variable
    let moveX = 0;

    // get width of all nav
    navRef.current.childNodes.forEach((item, id) => {
      widthData[id] = item.clientWidth;
    });

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (id < e.target.dataset.id) {
        moveX = moveX + w;
      }
    });

    // set marker position according to button yang di hover
    document.getElementById(
      'marker'
    ).style.transform = `translateX(${moveX}px)`;
  };

  const navMouseLeave = (e) => {
    // set marker width according to button yang di leave
    document.getElementById('marker').style.width = `${markerW}px`;

    // set marker position according to button yang di leave
    document.getElementById(
      'marker'
    ).style.transform = `translateX(${markerPos}px)`;

    // reset and set color of navigation
    navRef.current.querySelectorAll('button').forEach((item) => {
      item.classList.remove('focus');
    });

    // set target nav color to white (with class)
    defaultNavRef.current.classList.add('focus');
  };

  useEffect(() => {
    setTimeout(() => {
      setMarkerW(defaultNavRef.current.clientWidth);
    }, 100);
  }, [defaultNavRef.current]);

  const refreshMarker = () => {
    // Get Current Button
    const currentButton = navRef.current.querySelector('button.focus');

    setMarkerW(currentButton.clientWidth);
    // set position variable
    let moveX = 0;

    // get width of all nav
    navRef.current.childNodes.forEach((item, id) => {
      widthData[id] = item.clientWidth;
    });

    // iterate nav to get position.
    widthData.forEach((w, id) => {
      if (id < currentButton.dataset.id) {
        moveX = moveX + w;
      }
    });

    // set marker position.
    setMarkerPos(moveX);
  };

  useEffect(() => {
    window.addEventListener('resize', () => {
      refreshMarker();
    });
    return () => {
      window.removeEventListener('resize', () => {
        refreshMarker();
      });
    };
  }, []);

  return (
    <>
      <nav
        className='header-nav w-fit lg:w-fit pointer-events-auto relative rounded-full bg-white py-1.5 px-2 shadow-softer flex'
        onSubmit={(e) => e.preventDefault()}
        ref={navRef}
      >
        {data?.map((item, id) =>
          item.title === defaultTab?.title ? (
            <DefaultButton
              className='focus font-medium'
              hover={false}
              onClick={(e) => navMouseClick(e, item.realIndex)}
              data-id={0}
              ref={defaultNavRef}
              key={`tab-${id}`}
            >
              {item.title}
            </DefaultButton>
          ) : (
            <DefaultButton
              key={`tab-${id}`}
              hover={false}
              className='font-medium'
              onClick={(e) => navMouseClick(e, item.realIndex)}
              data-id={id}
            >
              {item.title}
            </DefaultButton>
          )
        )}
        <div
          id='marker'
          aria-hidden='true'
          style={{
            width: markerW,
            transform: `translateX(${markerPos}px)`,
          }}
          className='absolute left-[6px] z-1 h-8 rounded-full bg-morin-blue shadow-softer transition-all duration-300 ease-in-out-expo'
        />
      </nav>
    </>
  );
};

export default PDTabs;
