import MorinTabs from '@/components/utils/morinTabs'

const PDSize = ({ variants, setProductCurrent, setCart, setMaxQty }) => {
  return (
    <div className="relative w-full">
      <span className="font-medium hidden md:block">select size</span>
      <MorinTabs
        tabData={variants}
        onChange={(e) => {
          setProductCurrent(e)
          setCart({
            index: e,
            qty: 1,
          })
          setMaxQty(variants[e].inventoryQuantity)
        }}
        className="md:mt-3"
      />
    </div>
  )
}

export default PDSize
