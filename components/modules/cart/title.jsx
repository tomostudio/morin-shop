const CartTitle = () => {
  return (
    <div className='w-full grid grid-cols-6 font-medium text-morin-blue text-defaultSmall'>
      <span className='pl-6 lg:pl-8 col-span-3 flex'>
        <span className='w-[128px] block mr-5 lg:mr-10' />
        <span>Product</span>
      </span>
      <span className='min-w-[90px]'>Quantity</span>
      <span className='col-span-2'>Price</span>
    </div>
  );
};

export default CartTitle;
