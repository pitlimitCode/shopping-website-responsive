import Head from 'next/head'

import IsLogin from '../components/navbar'
import {HomeThemes, HomeCategory} from '../components/homeThemesCategory'
import {HomeNewProduct, HomePopularProduct} from '../components/homeNewPopular'

export default function Home() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IsLogin />
      <HomeThemes/>
      <HomeCategory/>
      <HomeNewProduct count={count}/>
      <HomePopularProduct count={count}/>
    </>
  )
}
