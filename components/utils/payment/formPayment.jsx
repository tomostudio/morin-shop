import { usePayment } from "@/helpers/functional/payment"
import colors from "@/helpers/preset/colors"
import { ArrowButton } from "../buttons"

const FormPayment = () => {
  const [loading, response, onPayment] = usePayment()
  return (
    <div className="max-w-md w-full mt-3 mx-auto">
      <form method="post" onSubmit={onPayment} className="space-y-4">
        <div className="relative w-full">
          <input
            name="order_id"
            className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
            type="number"
            placeholder="Order ID"
            required
          />
        </div>
        <div className="relative w-full">
          <input
            name="nama_pengirim"
            className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
            type="text"
            placeholder="Sender Name"
            required
          />
        </div>
        <div className="relative w-full">
          <input
            name="nama_bank"
            className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
            type="text"
            placeholder="Bank Name"
            required
          />
        </div>
        <div className="relative w-full">
          <input
            name="nominal"
            className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
            type="text"
            placeholder="Amount"
            required
          />
        </div>
        <div className="relative w-full">
          <label className="block border-2 border-morin-blue rounded-full text-morin-blue font-semibold px-5 py-2.5 w-full">
            Proof of Transfer
            <div className="absolute top-0 right-0 h-full border-2 cursor-pointer hover:bg-morin-blue hover:text-white hover:shadow-softer duration-300 transition-all border-morin-blue rounded-full px-5 py-2.5">
              Select File
            </div>
            <input
              name="foto_transfer"
              className="absolute top-0 right-0 px-5 py-2.5 opacity-0 w-full rounded-full pointer-events-none"
              type="file"
              required
            />
          </label>
        </div>
        <div>
          <ArrowButton
            disabled={loading}
            type="submit"
            color={response.status === 'error' ? colors.morinRed : colors.white}
            arrowRight={response.status === 'error' ? false : true}
            borderColor={
              response.status === 'error' ? colors.morinRed : colors.morinBlue
            }
            hover={'blue'}
            bgColor={response.status === 'error' ? 'bg-white' : `bg-morin-blue`}
            className={`py-2 ${loading ? 'pointer-events-none' : ''}`}
          >
            {loading ? 'Submitting..' : response.message}
          </ArrowButton>
        </div>
      </form>
    </div>
  )
}

export default FormPayment
