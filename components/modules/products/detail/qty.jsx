import { Minus, Plus } from '@/components/utils/svg'

const { DefaultButton } = require('@/components/utils/buttons')

const PDQuantity = ({ soldOut, qty, maxQty, productCurrent, setCart }) => {
  return (
    <div className="flex justify-between items-center mr-4 md:mr-6 px-5 py-2 h-full rounded-full border-2 border-morin-blue w-36">
      <DefaultButton
        onClick={() =>
          setCart({
            index: productCurrent,
            qty: qty - 1 < 1 ? 1 : qty - 1,
          })
        }
        className={`h-full w-5 flex-shrink-0 flex items-center justify-center ${soldOut ? '!pointer-events-none' : ''}`}
      >
        <Minus />
      </DefaultButton>
      <input
        className="w-full text-center font-medium text-lg lg:text-2xl focus:outline-0 relative top-[2px] pointer-events-none"
        value={isNaN(qty) || qty < 0 ? 1 : qty}
        onChange={(e) => {
          if (e.target.value <= maxQty) {
            setCart({
              index: productCurrent,
              qty: parseInt(e.target.value),
            })
          }
        }}
      />
      <DefaultButton
        onClick={() => {
          if (qty < maxQty) {
            setCart({
              index: productCurrent,
              qty: qty + 1,
            })
          }
        }}
        className={`h-full w-5 flex-shrink-0 flex items-center justify-center ${soldOut ? '!pointer-events-none' : ''}`}
      >
        <Plus />
      </DefaultButton>
    </div>
  )
}

export default PDQuantity
