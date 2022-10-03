import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MyBag.module.css'

import React, {useState} from "react";
import IsLogin from '../components/navbar'

export default function Profile() {
  const [theTab, setTab] = useState(MyAccount);
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="My profile: account, address, order" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IsLogin />

      <div className='d-flex'>
        {/* <div className="row">
          <div className="col-3"> */}
            <div className={styles.tabsSide}>

              <div type="button" onClick={() => setTab(MyAccount)}>My Account</div>
              <div type="button" onClick={() => setTab(ShoppingAddress)}>Shopping Address</div>
              <div type="button" onClick={() => setTab(MyOrder)}>My Order</div>

            </div>
          {/* </div> */}

          {/* <div className="col-9"> */}
            <div className={styles.panelSide}>
            
            <div className={styles.thePanel}>
              <div className='shadow-sm bg-body rounded'>
                {/* <div className='d-flex justify-content-between'> */}
                  {theTab}

                {/* </div> */}
              </div>
              </div>

            </div>
          {/* </div>
        </div> */}
      </div>
    </>
  )
}

function MyAccount() {
  return (
    <>
      My Account Panel
    </>
  )
}
function ShoppingAddress() {
  return (
    <>
      Shopping Address Panel
    </>
  )
}
function MyOrder() {
  return (
    <>
      My Order Panel
    </>
  )
}
