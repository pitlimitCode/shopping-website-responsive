import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Product() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Product</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Product Page
        </h1>

        <Link href="/login">
          <a>
            to Login Page
          </a>
        </Link>

        <Link href="/">
          <a>
            to Home Page
          </a>
        </Link>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
