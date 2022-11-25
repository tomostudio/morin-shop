import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import HeaderGap from '@/components/modules/headerGap'
import Header from '@/components/modules/header'
import axios from 'axios'
const fs = require('fs')

export default function Confirmation() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const {
      order_id,
      nama_pengirim,
      nama_bank,
      nominal,
      foto_transfer,
    } = e.target

    let formData = new FormData()
    formData.append('order_id', order_id.value)
    formData.append('nama_pengirim', nama_pengirim.value)
    formData.append('nama_bank', nama_bank.value)
    formData.append('nominal', nominal.value)
    formData.append('foto_transfer', foto_transfer.files[0])

    axios
      .post('/api/sheet', formData)
      .then((res) => {
        console.log('Success')
      })
      .catch(() => console.log('error'))
  }

  return (
    <Layout>
      <NextSeo title="Confirm Payment" />
      <Header home={false} />
      <div className="bg-white w-full">
        <Container className="flex flex-col text-morin-blue mb-16">
          <h2 className="text-mtitle lg:text-h2 leading-none font-nutmeg text-center">
            Confirm Payment
          </h2>
          <div className="w-96 mt-3 mx-auto">
            <form method="post" onSubmit={handleSubmit} className="space-y-4">
              <div className="relative w-full">
                <label>Order ID</label>
                <input
                  name="order_id"
                  className="border border-morin-blue rounded-md p-2 mt-2 w-full"
                  type="number"
                  required
                />
              </div>
              <div className="relative w-full">
                <label>Nama Pengirim</label>
                <input
                  name="nama_pengirim"
                  className="border border-morin-blue rounded-md p-2 mt-2 w-full"
                  type="text"
                  required
                />
              </div>
              <div className="relative w-full">
                <label>Nama Bank</label>
                <input
                  name="nama_bank"
                  className="border border-morin-blue rounded-md p-2 mt-2 w-full"
                  type="text"
                  required
                />
              </div>
              <div className="relative w-full">
                <label>Nominal</label>
                <input
                  name="nominal"
                  className="border border-morin-blue rounded-md p-2 mt-2 w-full"
                  type="text"
                  required
                />
              </div>
              <div className="relative w-full">
                <label>Foto Transfer</label>
                <input
                  name="foto_transfer"
                  className="border border-morin-blue rounded-md p-2 mt-2 w-full"
                  type="file"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-morin-blue text-white rounded-md p-3"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <Footer className="w-full" />
    </Layout>
  )
}
