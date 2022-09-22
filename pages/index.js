import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Home Page
        </h1>

        <Link href="/login">
          <a>
            to Login Page
          </a>
        </Link>

        <Link href="/product/1">
          <a>
            to Product 1st Page
          </a>
        </Link>

        <Link href="/product/2">
          <a>
            to Product 2nd Page
          </a>
        </Link>

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
