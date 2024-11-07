import Head from 'next/head'
import IsLogin from '../../components/navbar'
import {ProductDetail, OtherProduct} from '../../components/productDetail'

export async function getServerSideProps({ params }) {
  const { id } = params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await res.json();
  // const post = id;

  return {
    props: {
      data,
    },
  };
}

export default function Product({data}) {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Head>
        <title>Product</title>
        <meta name="description" content="Product, buy, add, chat, description, review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IsLogin />
      <ProductDetail id={data.id} title={data.title} price={data.price} image={data.image} rating={data.rating}/>
      <OtherProduct count={count}/>
    </>
  )
}
