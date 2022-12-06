import { Minus, Plus } from '@/components/utils/svg'

const { DefaultButton } = require('@/components/utils/buttons')

const PDQuantity = ({ soldOut, qty, maxQty, productCurrent, setCart }) => {
  return (
    <div className="flex justify-between items-center mr-4 md:mr-6 px-5 py-2 h-full rounded-full border-2 border-morin-blue w-32">
      <DefaultButton
        onClick={() =>
          setCart({
            index: productCurrent,
            qty: qty - 1 < 1 ? 1 : qty - 1,
          })
        }
        className={`h-full ${soldOut ? '!pointer-events-none' : ''}`}
      >
        <Minus />
      </DefaultButton>
      <input
        className="w-full text-center font-medium text-default md:text-ctitleSmall pointer-events-none"
        value={qty}
        readOnly
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
        className={`h-full ${soldOut ? '!pointer-events-none' : ''}`}
      >
        <Plus />
      </DefaultButton>
    </div>
  )
}

export default PDQuantity
