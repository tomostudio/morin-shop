import axios from 'axios'
import { useState } from 'react'

const usePayment = () => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState({
    status: 'info',
    message: 'Submit',
  })
  const [getName, setName] = useState(null);

  const onPayment = async (e) => {
    setLoading(true)
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
        setTimeout(() => {
          setResponse({
            status: 'info',
            message: 'Submit',
          })
        }, 3000);
        setLoading(false)
      })
      .catch(() => {
        setResponse({
          status: 'error',
          message: 'Submission Error',
        })
        setTimeout(() => {
          setResponse({
            status: 'info',
            message: 'Submit',
          })
        }, 3000);
        setLoading(false)
      })
  }

  return [loading, response, onPayment, getName, setName]
}

export default usePayment
