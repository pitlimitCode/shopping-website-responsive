import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from "react";

function Product(props){
  
  return (
    <Link href={`/product/${props.id}`}>
      <div className={styles.card}>
        <Image
          className={styles.card_imageProduct}
          src={props.image}
          alt='product'
          width='236'
          height='136'
        />
        <div className={styles.card_body}>
          <div className={styles.card_title}>{props.title}</div>
          <div className={styles.card_price}>$ {props.price}</div>
          {/* <div className={styles.card_brand}>Zabora Cloth</div> */}
          <div>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-half"></i></span>
            <span className={styles.card_starPoint}>{props.rating.rate}</span>
          </div>
        </div>
      </div>
    </Link>
  )
    {/* <Link href={`/product/${props.count}`}>
      <div className={styles.card}>
        <Image
          className={styles.card_imageProduct}
          src="/product/product.png"
          alt='product'
          width='236'
          height='136'
        />
        <div className={styles.card_body}>
          <div className={styles.card_title}>Men&apos;s format suit - Black & White</div>
          <div className={styles.card_price}>$ 40.0</div>
          <div className={styles.card_brand}>Zabora Cloth</div>
          <div>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
            <span className={styles.card_star}><i className="bi bi-star-half"></i></span>
            <span className={styles.card_starPoint}>9.5</span>
          </div>
        </div>
      </div>
    </Link> */}
}

export default function Products15(props){
  const [datas, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/products');
      const datas = await response.json();
      setData(datas);
    };
    fetchData();
  }, []);

  return (
    <>
      { !datas
      ? <>Loading...</>
      : (datas.length >= 0 )
         ? <div className={styles.products}>
            { datas.map((data)=>(
              <Product key={data.id} id={data.id} title={data.title} price={data.price} image={data.image} rating={data.rating}/>
            ))}
          </div>
         : <> Data Null </> 
        

      }
      {/* <div className={styles.products}>
        <Product count={props.count[0]}/>
        <Product count={props.count[1]}/>
        <Product count={props.count[2]}/>
        <Product count={props.count[3]}/>
        <Product count={props.count[4]}/>
      </div>
      <div className={styles.products}>
        <Product count={props.count[5]}/>
        <Product count={props.count[6]}/>
        <Product count={props.count[7]}/>
        <Product count={props.count[8]}/>
        <Product count={props.count[9]}/>
      </div>
      <div className={styles.products}>
        <Product count={props.count[10]}/>
        <Product count={props.count[11]}/>
        <Product count={props.count[12]}/>
        <Product count={props.count[13]}/>
        <Product count={props.count[14]}/>
      </div> */}
    </>
  )
}

// export {HomeNewProduct, HomePopularProduct};