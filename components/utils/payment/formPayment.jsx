import { useEffect, useState, useRef } from 'react';
import { usePayment } from '@/helpers/functional/payment';
import colors from '@/helpers/preset/colors';
import { ArrowButton } from '../buttons';

const FormPayment = () => {
  const [loading, response, onPayment, getName, setName] = usePayment();
  const [formStatus, setSubmission] = useState('idle');
  const formRef = useRef();
  const [resetStatus, setReset] = useState(false);
  let reset = false;

  useEffect(() => {
    if (response.status == 'error') {
      setSubmission('error');
      setReset(true);
    } else if (response.status == 'success') {
      setSubmission('success');
      setReset(true);
    } else if (response.status == 'info') {
      setSubmission('idle');
      if (resetStatus) {
        setName('');
        setAmount('');
        formRef.current.reset();
        setReset(false);
      }
    }
    if (loading) {
      setSubmission('loading');
    }
  }, [response.status, loading]);

  const [ammount, setAmount] = useState('');

  const addCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, '');

  const handleChange = (event) =>
    setAmount(`${addCommas(removeNonNumeric(event.target.value))}`);

  return (
    <div className='max-w-md w-full mt-3 mx-auto'>
      <form
        method='post'
        onSubmit={onPayment}
        className={`space-y-3  ${
          formStatus === 'idle' ? '' : 'pointer-events-none'
        }`}
        ref={formRef}
      >
        <div className='relative w-full'>
          <input
            name='order_id'
            className='focus:outline-none border-2 border-morin-blue text-black rounded-full placeholder:text-morin-blue font-semibold px-5 pt-2.5 pb-2 w-full'
            type='text'
            placeholder='Order ID'
            required
          />
        </div>
        <div className='relative w-full'>
          <input
            name='nama_pengirim'
            className='focus:outline-none border-2 border-morin-blue text-black rounded-full placeholder:text-morin-blue font-semibold px-5 pt-2.5 pb-2 w-full'
            type='text'
            placeholder='Sender Name'
            required
          />
        </div>
        <div className='relative w-full'>
          <input
            name='nama_bank'
            className='focus:outline-none border-2 border-morin-blue text-black rounded-full placeholder:text-morin-blue font-semibold px-5 pt-2.5 pb-2 w-full'
            type='text'
            placeholder='Bank Name'
            required
          />
        </div>
        <div className='relative w-full'>
          <input
            name='nominal'
            className='focus:outline-none border-2 border-morin-blue  text-black rounded-full placeholder:text-morin-blue font-semibold px-5 pt-2.5 pb-2 w-full'
            type='text'
            onInput={handleChange}
            value={ammount}
            placeholder='Amount'
            required
          />
        </div>
        <div className='relative w-full'>
          <label
            className={`block border-2 border-morin-blue rounded-full text-morin-blue font-semibold px-5 pt-2.5 pb-2 w-full cursor-pointer `}
          >
            <span className={`${getName ? 'text-black' : ''}`}>
              {getName ? getName : 'Proof of Transfer'}
            </span>
            <div className='absolute top-0 right-0 h-full border-2 cursor-pointer bg-white hover:bg-morin-blue hover:text-white hover:shadow-softer duration-300 transition-all border-morin-blue rounded-full px-5 pt-2.5 pb-2'>
              Select File
            </div>
            <input
              name='foto_transfer'
              className='focus:outline-none absolute top-0 right-0 px-5 pt-2.5 pb-2 opacity-0 w-full rounded-full pointer-events-none'
              onChange={(e) => {
                setName(e.target.files[0].name);
              }}
              type='file'
              accept='image/x-png,image/jpeg'
              required
            />
          </label>
        </div>
        <div>
          <ArrowButton
            disabled={loading}
            type='submit'
            color={
              formStatus === 'error'
                ? colors.morinRed
                : formStatus === 'loading'
                ? colors.morinBlue
                : colors.white
            }
            arrowRight={formStatus === 'idle' ? true : false}
            borderColor={
              formStatus === 'error'
                ? colors.morinRed
                : formStatus === 'success'
                ? colors.green
                : colors.morinBlue
            }
            hover={'blue'}
            bgColor={
              formStatus === 'error' || formStatus === 'loading'
                ? 'bg-white'
                : formStatus === 'success'
                ? 'bg-green-600'
                : 'bg-morin-blue'
            }
            className={`pt-2.5 pb-2 px-6`}
          >
            {loading ? 'Submitting' : response.message}
          </ArrowButton>
        </div>
      </form>
    </div>
  );
};

export default FormPayment;
