import Head from 'next/head'
import IsLogin from '../components/navbar'
import {ProductDetail, OtherProduct} from '../../components/productDetail'

export default function Product() {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product, buy, add, chat, description, review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IsLogin />
      <ProductDetail count={count}/>
      <OtherProduct count={count}/>
    </>
  )
}
