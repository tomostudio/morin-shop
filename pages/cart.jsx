import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import Header from '@/components/modules/header'
import CartComponent from '@/components/modules/cart'
import { useCart } from '@/helpers/functional/cart'
import HeaderGap from '@/components/modules/headerGap'

export default function Cart() {
  const [
    dataCart,
    loading,
    cartLoading,
    onCheckout,
    onRemoveItem,
    onIncQuantity,
    onDecQuantity,
  ] = useCart()
  return (
    <>
      <Header home={false} />
      <Layout>
        <HeaderGap />
        <NextSeo title="Cart" />
        <div className="bg-white w-full">
          <Container
            className={`flex flex-col items-center w-full h-full mb-24`}
          >
            <h2 className="text-ctitle lg:text-h2 text-morin-blue font-nutmeg">
              My Cart
            </h2>
            <CartComponent
              data={dataCart}
              decQuantity={onDecQuantity}
              increQuantity={onIncQuantity}
              onCheckout={onCheckout}
              removeItem={onRemoveItem}
              cartLoading={cartLoading}
              loading={loading}
            />
          </Container>
        </div>
        <Footer />
      </Layout>
    </>
  )
}
