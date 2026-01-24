import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/LoginRegister.module.css'

import {useState} from 'react'

import LogoBrand from '../components/logoBrand';

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
      <div style={{width:'30rem'}}>
          <div className='text-center'>
          <div className='mb-4'> <LogoBrand size={40}/> </div>

            <div className='fw-bold mb-4'>Please sign up with your account</div>

            <div className="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check btn-outline-custom" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => setUser(true)} defaultChecked/>
              <label className="btn btn-outline-custom" for="btnradio1"> Customer </label>

              <input type="radio" className="btn-check btn-outline-custom" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setUser(false)}/>
              <label className="btn btn-outline-custom" for="btnradio2"> Seller </label>
            </div>

            {user ? <FormCustomer /> : <FormSeller />}

            <Link href="/login">
              <div className={styles.button} type='button'> Register </div> 
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
