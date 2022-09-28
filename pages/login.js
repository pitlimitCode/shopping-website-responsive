import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/LoginRegister.module.css'
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch(); 

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

            <div className='fw-bold mb-4'>Please login with your account</div>

            <div className='row d-flex justify-content-center mb-4'>
              <div className='col-4'>
                <div className={styles.active} style={{cursor:'pointer'}}> Customer </div>
              </div>
              <div className='col-4'>
                <div className={styles.inactive} style={{cursor:'pointer'}}> Seller </div>
              </div>
            </div>

            <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Email"/>
            <input className="form-control form-control-lg fs-6 mb-2" type="text" placeholder="Password"/>

            <div className='text-end theme-color' style={{cursor:'pointer'}}>Forgot password?</div> 

            <div className={styles.button} type='button' onClick={handleLogin} > Primary </div> 

            <Link href="/register">
              <div>Dont&apos;have a Shop.id account?&nbsp;<span className='theme-color' style={{cursor:'pointer'}}>Register</span></div>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
