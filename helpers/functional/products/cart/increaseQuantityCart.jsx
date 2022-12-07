import { updateItemCheckout } from "@/helpers/shopify"

const increaseQuantityCart = (id, dataCart, setCart, setQuantity, setCartLoading) => {
  setCartLoading({
    id: id,
    status: true,
  })
  const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
  const data = dataCart.find((el) => el.id === id)

  const lineItemsToUpdate = [{ id: id, quantity: parseInt(data.quantity + 1) }]
  updateItemCheckout(dataCheckout.id, lineItemsToUpdate).then((checkout) => {
    if (!checkout) return
    let jumlah = 0
    checkout.lineItems.forEach((data) => {
      jumlah += data.quantity
    })
    setCart(checkout.lineItems)
    setQuantity(jumlah)
    setCartLoading({
      id: id,
      status: false,
    })
  })
}

export default increaseQuantityCart
