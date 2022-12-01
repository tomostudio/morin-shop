import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import Header from '@/components/modules/header'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import CartDesktop from '@/components/modules/cartDesktop'
import CartMobile from '@/components/modules/cartMobile'
import {
  fetchCheckout,
  removeItemCheckout,
  updateItemCheckout,
} from '@/helpers/shopify'
import { useAppContext } from 'context/state'

export default function Cart() {
  const appContext = useAppContext()
  const [dataCart, setCart] = useState([])
  const [loading, setLoading] = useState(true)

  const decQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    const data = dataCart.find((el) => el.id === id)

    const lineItemsToUpdate = [
      { id: id, quantity: parseInt(data.quantity - 1) },
    ]
    updateItemCheckout(dataCheckout.id, lineItemsToUpdate).then((checkout) => {
      if (checkout && checkout.lineItems.length > 0) {
        let jumlah = 0
        checkout.lineItems.forEach((data) => {
          jumlah += data.quantity
        })
        setCart(checkout.lineItems)
        appContext.setQuantity(jumlah)
      } else {
        setCart(null)
        appContext.setQuantity(0)
      }
    })
  }

  const increQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    const data = dataCart.find((el) => el.id === id)

    const lineItemsToUpdate = [
      { id: id, quantity: parseInt(data.quantity + 1) },
    ]
    updateItemCheckout(dataCheckout.id, lineItemsToUpdate).then((checkout) => {
      if (!checkout) return
      let jumlah = 0
      checkout.lineItems.forEach((data) => {
        jumlah += data.quantity
      })
      setCart(checkout.lineItems)
      appContext.setQuantity(jumlah)
    })
  }

  const onCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    fetchCheckout(dataCheckout.id).then((checkout) => {
      if (checkout) window.location.href = checkout.webUrl
    })
  }

  const removeItem = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    removeItemCheckout(dataCheckout.id, id).then((checkout) => {
      // Do something with the updated checkout
      setCart(checkout.lineItems)
      let jumlah = 0
      checkout.lineItems.forEach((data) => {
        jumlah += data.quantity
      })
      appContext.setQuantity(jumlah)
    })
  }

  useEffect(() => {
    fetchCheckout().then((response) => {
      if (response) setCart(response.lineItems)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Header home={false} />
      <Layout>
        <NextSeo title="Cart" />
        <div className="bg-white w-full">
          <Container
            className={`flex flex-col items-center w-full h-full mb-24`}
          >
            <h2 className="text-ctitle lg:text-h2 text-morin-blue font-nutmeg">
              My Cart
            </h2>
            {loading ? (
              <div className="w-full h-[50vh] flex justify-center items-center">
                <span className="font-semibold text-ctitleSmall">Loading</span>
              </div>
            ) : dataCart.length > 0 ? (
              useMediaQuery('(min-width: 1024px)') ? (
                <CartDesktop
                  data={dataCart}
                  decQuantity={decQuantity}
                  increQuantity={increQuantity}
                  onCheckout={onCheckout}
                  removeItem={removeItem}
                />
              ) : (
                <CartMobile
                  data={dataCart}
                  decQuantity={decQuantity}
                  increQuantity={increQuantity}
                  onCheckout={onCheckout}
                  removeItem={removeItem}
                />
              )
            ) : (
              <div className="w-full h-[50vh] flex justify-center items-center">
                <span className="font-semibold text-ctitleSmall">Cart is Empty</span>
              </div>
            )}
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
