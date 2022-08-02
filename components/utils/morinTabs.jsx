import { useState, useEffect } from 'react'

const MorinTabs = ({ tabData, onChange = () => {}, className }) => {
  const data = []
  tabData.map((item, id) => {
    return data.push({
      ...item,
      idTab: `tab-${id + 1}`,
    })
  })
  const defaultTab = data[0]

  const [currentTab, setCurrentTab] = useState(defaultTab?.title)
  const [thisEl, setThisEl] = useState(null)

  const handleTabChange = (val, index, idTab) => {
    // do callback function here
    onChange(index)

    measureEl(idTab)
    setCurrentTab(val)
  }

  const measureEl = (id) => {
    const parent = document
      .querySelector('.radio-switch')
      .getBoundingClientRect()
    const current = document
      .querySelector(`input#${id}`)
      .getBoundingClientRect()
    const left = current.left - parent.left

    setThisEl(left)
  }
  const resize = () => {
    measureEl(currentTab.idTab)
    setCurrentTab(currentTab)
  }

  useEffect(() => {
    measureEl(defaultTab?.idTab)
    document.querySelector('resize', resize)
  }, [])

  return (
    <div className={`flex items-center justify-start ${className}`}>
      <form
        className="radio-switch flex px-2 py-1.5 bg-white relative shadow-softer rounded-full w-auto grow-0"
        onSubmit={(e) => e.preventDefault()}
      >
        {data?.map((item, id) => (
          <div key={id} className="radio-switch__item relative block w-20 h-8 ">
            <input
              type="radio"
              name="desktop-nav"
              className="radio-switch__input sr-only"
              id={item.idTab}
              value={item.title}
              checked={item.title === currentTab}
              onChange={(e) =>
                handleTabChange(
                  e.target.value,
                  data.indexOf({
                    id: item.id,
                  }),
                  item.idTab,
                )
              }
            />
            <label
              className="radio-switch__label relative flex items-center justify-center h-full rounded-full leading-none select-none z-2 cursor-pointer transition-all duration-300 pt-[2px]"
              htmlFor={item.idTab}
            >
              {item.title}
            </label>
          </div>
        ))}
        {thisEl ? (
          <div
            aria-hidden="true"
            style={{ transform: `translate(${thisEl}px, 0%)` }}
            className="radio-switch__marker absolute z-1 top-[6px] left-[1px] shadow-softer rounded-full w-20 h-8 bg-morin-blue duration-300"
          />
        ) : (
          ''
        )}
      </form>
    </div>
  )
}

export default MorinTabs
