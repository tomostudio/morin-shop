import { useEffect, useState } from 'react'
import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import FancyLink from '@/components/utils/fancyLink'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import HeaderGap from '@/components/modules/headerGap'
import { Minus, Plus, Trash } from '@/components/utils/svg'
import Header from '@/components/modules/header'
import { useMediaQuery } from '@/helpers/functional/checkMedia'
import CartDesktop from '@/components/modules/cartDesktop'
import CartMobile from '@/components/modules/cartMobile'
import { shopifyClient } from '@/helpers/shopify'

export default function Cart() {
  const cartData = [
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
    {
      title: 'Blueberry Jam',
      weight: '170gr',
      imgSrc: '/product/blueberry-product.png',
      imgAlt: 'Blueberry Jam',
    },
  ]
  const [dataCart, setCart] = useState(null)

  const fetchCart = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    if (dataCheckout) {
      shopifyClient.checkout.fetch(dataCheckout.id).then((checkout) => {
        setCart(checkout.lineItems)
      })
    }
  }

  const updateItem = (id, itemAttributes) => {
    var index = dataCart.findIndex((x) => x.id === id)
    if (index === -1) {
      // handle error
    } else {
      setCart([
        ...dataCart.slice(0, index),
        Object.assign({}, dataCart[index], itemAttributes),
        ...dataCart.slice(index + 1),
      ])
    }
  }

  const decQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    const data = dataCart.find((el) => el.id === id)
    if (data.quantity > 1) {
      updateItem(id, { quantity: data.quantity - 1 })

      const lineItemsToUpdate = [
        { id: id, quantity: parseInt(data.quantity - 1) },
      ]
      shopifyClient.checkout.updateLineItems(dataCheckout.id, lineItemsToUpdate)
    }
  }

  const increQuantity = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    const data = dataCart.find((el) => el.id === id)

    updateItem(id, { quantity: data.quantity + 1 })

    const lineItemsToUpdate = [
      { id: id, quantity: parseInt(data.quantity + 1) },
    ]
    shopifyClient.checkout.updateLineItems(dataCheckout.id, lineItemsToUpdate)
  }

  const onCheckout = () => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    shopifyClient.checkout.fetch(dataCheckout.id).then((checkout) => {
      window.location.href = checkout.webUrl
    })
  }

  const removeItem = (id) => {
    const dataCheckout = JSON.parse(localStorage.getItem('dataCheckout'))
    shopifyClient.checkout
      .removeLineItems(dataCheckout.id, id)
      .then((checkout) => {
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
    fetchCart()
  }, [])

  return (
    <Layout>
      <NextSeo title="Cart" />
      <Header home={false} />
      <div className="bg-white w-full">
        <HeaderGap />
        <Container
          className={`flex flex-col items-center w-full h-full mb-24 ${
            !dataCart && 'h-[30vh]'
          }
              ${dataCart && dataCart.length < 1 ? 'h-[30vh]' : ''}`}
        >
          <h2 className="text-ctitle lg:text-h2 text-morin-blue font-nutmeg">
            My Cart
          </h2>
          {useMediaQuery('(min-width: 1024px)')
            ? dataCart &&
              dataCart.length > 0 && (
                <CartDesktop
                  data={dataCart}
                  decQuantity={decQuantity}
                  increQuantity={increQuantity}
                  onCheckout={onCheckout}
                  removeItem={removeItem}
                />
              )
            : dataCart &&
              dataCart.length > 0 && (
                <CartMobile
                  data={dataCart}
                  decQuantity={decQuantity}
                  increQuantity={increQuantity}
                  onCheckout={onCheckout}
                  removeItem={removeItem}
                />
              )}
        </Container>
        <Footer />
      </div>
    </Layout>
  )
}
