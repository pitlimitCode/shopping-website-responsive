import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/LoginRegister.module.css'

import React, {useState} from 'react'

function FormCustomer() {
  return (
    <>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Name"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Email"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Password"/>
    </>
  )
}

function FormSeller() {
  return (
    <>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Name"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Email"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Phone number"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Store name"/>
      <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Password"/>
    </>
  )
}

export default function Register() {
  const [user, setUser] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Register</title>
        <meta name="description" content="Login or Register" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='row d-flex justify-content-center my-5'>
        <div className='col-4'>
          <div className='text-center'>
            <Link href="/">
              <div style={{cursor:'pointer'}}>
                <div className='d-flex justify-content-center mb-4'>
                  <Image 
                    className={styles.logo}
                    src="/logo/logoShop.svg"
                    alt='category'
                    width='40'
                    height='40'
                  />
                  <div className='theme-color fw-bold fs-3 pt-2'>Shop.id</div>
                </div>
              </div>
            </Link>

            <div className='fw-bold mb-4'>Please sign up with your account</div>

            <div className='row d-flex justify-content-center mb-4'>
              <div className='col-4'>
                <div className={styles.active} style={{cursor:'pointer'}} onClick={() => setUser(true)}>
                  Customer
                </div>
              </div>
              <div className='col-4'>
                <div className={styles.inactive} style={{cursor:'pointer'}} onClick={() => setUser(false)}>
                  Seller
                </div>
              </div>
            </div>

            {user ? <FormCustomer /> : <FormSeller />}

            <Link href="/login">
              <div className={styles.button} type='button'>Primary</div> 
            </Link>

            <Link href="/login">
              <div>Already have a Shop.id account?&nbsp;<span className='theme-color' style={{cursor:'pointer'}}>Login</span></div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
