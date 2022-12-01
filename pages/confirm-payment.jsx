import Layout from '@/components/modules/layout'
import Footer from '@/components/modules/footer'
import Container from '@/components/modules/container'
import { NextSeo } from 'next-seo'
import Header from '@/components/modules/header'
import axios from 'axios'
import { useState } from 'react'
import { ArrowButton } from '@/components/utils/buttons'
import colors from '@/helpers/preset/colors'

export default function ConfirmPayment() {
  const [submit, setSubmit] = useState(false)
  const [response, setResponse] = useState({
    status: 'info',
    message: 'Submit',
  })

  const handleSubmit = async (e) => {
    setSubmit(true)
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
        setResponse({
          status: 'success',
          message: 'Submitted',
        })
        setSubmit(false)
      })
      .catch(() => {
        setResponse({
          status: 'error',
          message: 'Submission Error',
        })
        setSubmit(false)
      })
  }

  return (
    <Layout>
      <NextSeo title="Payment Confirmation" />
      <Header home={false} />
      <div className="bg-white w-full">
        <Container className="flex flex-col text-morin-blue mb-16">
          <h2 className="text-mtitle lg:text-h2 leading-none font-nutmeg text-center">
            Payment Confirmation
          </h2>
          <div className="w-96 mt-3 mx-auto">
            <form method="post" onSubmit={handleSubmit} className="space-y-4">
              <div className="relative w-full">
                <input
                  name="order_id"
                  className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
                  type="number"
                  placeholder="Order ID"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  name="nama_pengirim"
                  className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
                  type="text"
                  placeholder="Sender Name"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  name="nama_bank"
                  className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
                  type="text"
                  placeholder="Bank Name"
                  required
                />
              </div>
              <div className="relative w-full">
                <input
                  name="nominal"
                  className="border-2 border-morin-blue rounded-full placeholder:text-morin-blue font-semibold px-5 py-2.5 w-full"
                  type="text"
                  placeholder="Amount"
                  required
                />
              </div>
              <div className="relative w-full">
                <label className="block border-2 border-morin-blue rounded-full text-morin-blue font-semibold px-5 py-2.5 w-full">
                  Proof of Transfer
                  <div className="absolute top-0 right-0 h-full border-2 cursor-pointer hover:bg-morin-blue hover:text-white hover:shadow-softer duration-300 transition-all border-morin-blue rounded-full px-5 py-2.5">
                    Select File
                  </div>
                  <input
                    name="foto_transfer"
                    className="absolute top-0 right-0 px-5 py-2.5 opacity-0 w-full rounded-full pointer-events-none"
                    type="file"
                    required
                  />
                </label>
              </div>
              <div>
                <ArrowButton
                  disabled={submit}
                  type="submit"
                  color={
                    response.status === 'error' ? colors.morinRed : colors.white
                  }
                  arrowRight={response.status === 'error' ? false : true}
                  borderColor={
                    response.status === 'error'
                      ? colors.morinRed
                      : colors.morinBlue
                  }
                  hover={'blue'}
                  bgColor={
                    response.status === 'error' ? 'bg-white' : `bg-morin-blue`
                  }
                  className={`py-2`}
                >
                  {response.message}
                </ArrowButton>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <Footer className="w-full" />
    </Layout>
  )
}
