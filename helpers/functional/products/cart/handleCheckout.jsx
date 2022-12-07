import { fetchCheckout } from "@/helpers/shopify"

const handleCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    fetchCheckout(dataCheckout.id).then((checkout) => {
      if (checkout) window.location.href = checkout.webUrl
    })
}

export default handleCheckout