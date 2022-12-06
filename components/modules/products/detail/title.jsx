const PDTitle = ({ title, price, soldOut }) => {
  return (
    <div className="w-full flex flex-col">
      <h2 className="text-ctitle md:text-h2 font-nutmeg font-normal m-0">
        {title}
      </h2>
      <h3
        className={`text-mtitleSmall md:text-ctitle font-normal m-0 w-fit ${
          soldOut
            ? 'font-semibold border-2 px-4 pt-2 pb-1 leading-none border-morin-blue rounded-full'
            : ''
        }`}
      >
        {soldOut ? (
          'SOLD OUT'
        ) : (
          <>
            IDR {price.toLocaleString('id')}
            ,-
          </>
        )}
      </h3>
    </div>
  )
}

export default PDTitle
