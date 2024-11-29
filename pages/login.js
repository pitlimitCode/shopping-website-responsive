import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/LoginRegister.module.css'
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import {useState} from 'react'

import LogoBrand from '../components/logoBrand';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch(); 
  const [user, setUser] = useState(true);

  const handleLogin = () => {
    dispatch({
      type: 'SET_ISLOGIN',
      payload: true
    }),
    router.push("/");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login or Register" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='row d-flex justify-content-center my-5'>
        <div className='col-4'>
          <div className='text-center'>
            <div className='mb-4'> <LogoBrand size={40}/> </div>

            <div className='fw-bold mb-4'>Please login with your account</div>

            <div className="btn-group mb-4" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check btn-outline-custom" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => setUser(true)} defaultChecked/>
              <label className="btn btn-outline-custom" for="btnradio1"> Customer </label>

              <input type="radio" className="btn-check btn-outline-custom" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setUser(false)}/>
              <label className="btn btn-outline-custom" for="btnradio2"> Seller </label>
            </div>

            <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Email"/>
            <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Password"/>

            <div className='text-end theme-color' style={{cursor:'pointer'}}>Forgot password?</div> 

            <div className={styles.button} type='button' onClick={handleLogin}> Login </div> 

            <Link href="/register">
              <div>Didn&apos;t have a Shop.id account?&nbsp;<span className='theme-color' style={{cursor:'pointer'}}>Register</span></div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
