import handleCheckout from './handleCheckout'
import increaseQuantityCart from './increaseQuantityCart'
import handleRemoveItem from './handleRemoveItem'
import fetchDataCheckout from './fetchDataCheckout'
import { useEffect, useState } from 'react'
import decreaseQuantityCart from './decreaseQuantityCart'
import useCartState from './useCartState'

const useCart = () => {
  const [
    setQuantity,
    dataCart,
    setCart,
    loading,
    setLoading,
    cartLoading,
    setCartLoading,
  ] = useCartState()

  const onDecQuantity = (id) => {
    decreaseQuantityCart(id, dataCart, setCart, setQuantity, setCartLoading)
  }

  const onIncQuantity = (id) => {
    increaseQuantityCart(id, dataCart, setCart, setQuantity, setCartLoading)
  }

  const onCheckout = () => {
    handleCheckout()
  }

  const onRemoveItem = (id) => {
    handleRemoveItem(id, setCart, setQuantity, setCartLoading)
  }

  useEffect(() => {
    fetchDataCheckout(setLoading, setCart)
  }, [])

  return [
    dataCart,
    loading,
    cartLoading,
    onCheckout,
    onRemoveItem,
    onIncQuantity,
    onDecQuantity,
  ]
}

export default useCart
