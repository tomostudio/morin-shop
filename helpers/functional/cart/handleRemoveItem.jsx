import { removeItemCheckout } from '@/helpers/shopify'

const handleRemoveItem = (id, setCart, setQuantity, setCartLoading) => {
  setCartLoading({
    id: id,
    status: true,
  })
  const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
  removeItemCheckout(dataCheckout.id, id).then((checkout) => {
    // Do something with the updated checkout
    setCart(checkout.lineItems)
    let jumlah = 0
    checkout.lineItems.forEach((data) => {
      jumlah += data.quantity
    })
    setQuantity(jumlah)
    setCartLoading({
      id: id,
      status: false,
    })
  })
}

export default handleRemoveItem
