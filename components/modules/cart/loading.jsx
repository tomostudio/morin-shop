const CartLoading = () => {
  return (
    <>
      <div className="w-full max-w-4xl mt-3 flex flex-col space-y-4">
        <div className="w-full grid grid-cols-6 font-medium text-morin-blue">
          <span className="col-span-3 text-center">Product</span>
          <span>Quantity</span>
          <span className="col-span-2">Price</span>
        </div>
        <div className="w-full flex flex-col">
          <div
            className={`w-full grid grid-cols-6 rounded-2xl shadow-cart py-4`}
          >
            <div
              className={`col-span-3 flex items-center space-x-6 h-full pl-8 pr-12`}
            >
              <div className="w-[128px] h-[128px] rounded-xl bg-loading" />
              <div className="min-w-max flex flex-col justify-center space-y-2">
                <div className="w-full h-6 rounded-full bg-loading" />
                <div className="w-full h-6 rounded-full bg-loading" />
              </div>
            </div>
            <div className="flex items-center pr-12">
              <div className="w-full h-8 rounded-full bg-loading" />
            </div>
            <div className="flex items-center">
              <div className="w-full h-6 rounded-full bg-loading" />
            </div>
            <div className={`flex items-center justify-end pr-8`}>
              <div className="w-8 h-8 rounded-full bg-loading" />
            </div>
          </div>
          <div
            className={`w-full grid grid-cols-6 rounded-2xl shadow-cart py-4`}
          >
            <div
              className={`col-span-3 flex items-center space-x-6 h-full pl-8 pr-12`}
            >
              <div className="w-[128px] h-[128px] rounded-xl bg-loading" />
              <div className="min-w-max flex flex-col justify-center space-y-2">
                <div className="w-full h-6 rounded-full bg-loading" />
                <div className="w-full h-6 rounded-full bg-loading" />
              </div>
            </div>
            <div className="flex items-center pr-12">
              <div className="w-full h-8 rounded-full bg-loading" />
            </div>
            <div className="flex items-center">
              <div className="w-full h-6 rounded-full bg-loading" />
            </div>
            <div className={`flex items-center justify-end pr-8`}>
              <div className="w-8 h-8 rounded-full bg-loading" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartLoading
