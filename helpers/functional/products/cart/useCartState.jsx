import { useAppContext } from "context/state"
import { useState } from "react"

const useCartState = () => {
  const appContext = useAppContext()
  const [dataCart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [cartLoading, setCartLoading] = useState({
    id: 0,
    status: false,
  })

  return [appContext.setQuantity, dataCart, setCart, loading, setLoading, cartLoading, setCartLoading]
}

export default useCartState
