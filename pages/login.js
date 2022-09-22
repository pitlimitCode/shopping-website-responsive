import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Login</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Login Page
        </h1>

        <Link href="/">
          <a>
            to Home Page
          </a>
        </Link>

        <Link href="/product/1">
          <a>
            to Product 1 Page
          </a>
        </Link>

        <Link href="/product/2">
          <a>
            to Product 2 Page
          </a>
        </Link>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
