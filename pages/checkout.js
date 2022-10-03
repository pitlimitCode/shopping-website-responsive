import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MyBag.module.css'
import IsLogin from '../components/navbar'

// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import ModalPayment from '../components/modalPayment'

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Checkout my ordered" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IsLogin />

      <div className={styles.container}>
        <section className='section'>
          <div className='fs-1 fw-bold mt-4 mb-3'>Checkout</div>

          <div className='row'> 

            <div className='mb-2 fw-bold'>Shipping Address</div>

            <div className='col-8'>

              {/* Checkbox all items */}
              <div className='shadow p-3 mb-4 bg-body rounded'>
                <div className='mb-2 fw-bold'>Andreas Jane</div>
                <div className='mb-2'>Perumahan BSD, Kota Tangerang Selatan, Banten, Indonesia, 15151</div>
                <button className={styles.buttonChangeAddress} type='button'>Choose another address</button>
              </div>

              {/* Checkbox each item */}
              <div className='shadow ps-4 py-3 pe-3 mb-3 bg-body rounded'>
                <div className='d-flex justify-content-between'>
                  <div className='row row-cols-auto d-flex align-items-center'>
                    <Image 
                      className='rounded'
                      src='/mybag/mybag1.png'
                      alt='productInBag'
                      width='65'
                      height='65'
                    />
                    <div className='col'>
                      <div className='fw-bold'>Men&apos;s formal suit - Black</div>
                      <div className='grey2'>Zabora Cloth</div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center fw-bold'>$ 20.0</div>
                </div>
              </div>
              <div className='shadow ps-4 py-3 pe-3 mb-3 bg-body rounded'>
                <div className='d-flex justify-content-between'>
                  <div className='row row-cols-auto d-flex align-items-center'>
                    <Image 
                      className='rounded'
                      src='/mybag/mybag2.png'
                      alt='productInBag'
                      width='65'
                      height='65'
                    />
                    <div className='col'>
                      <div className='fw-bold'>Men&apos;s formal suit - Black</div>
                      <div className='grey2'>Zabora Cloth</div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center fw-bold'>$ 20.0</div>
                </div>
              </div>

            </div>

            {/* Shopping summary */}
            <div className='col-4'>
              <div className='shadow p-3 bg-body rounded'>
                <div className='fw-bold pt-1 pb-2'>Shopping summary</div>
                <div className='d-flex justify-content-between'>
                  <div className='grey1 py-1'>Order</div>
                  <div className='fw-bold'>$ 40.0</div>
                </div>
                <div className='d-flex justify-content-between'>
                  <div className='grey1 py-1'>Delivery</div>
                  <div className='fw-bold'>$ 5.0</div>
                </div>
                <hr/>
                <div className='pb-3 d-flex justify-content-between'>
                  <div className='fw-bold'>Shopping summary</div>
                  <div className='fw-bold theme-color'>$ 45.0</div>
                </div>

                <ModalPayment />


              </div>
            </div>

          </div>


        </section>
      </div>

    </>
  )
}
