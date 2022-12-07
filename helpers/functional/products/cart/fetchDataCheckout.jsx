import { fetchCheckout } from '@/helpers/shopify'

const fetchDataCheckout = (setLoading, setCart) => {
  fetchCheckout().then((response) => {
    if (response) setCart(response.lineItems)
    setLoading(false)
  })
}

export default fetchDataCheckout
