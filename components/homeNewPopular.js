import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Product(props){
  return (
    <Link href={`/product/${props.count}`}>
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
    </Link>
  )
}

function HomeProduct15(props){
  return (
    <>
      <div className={styles.products}>
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
      </div>
    </>
  )
}

function HomeNewProduct(props){
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.title}>New</div>
        <div className={styles.desc}>You&apos;ve never seen it before!</div>
        <HomeProduct15 count={props.count}/>
      </section>
    </div>
  )
}

function HomePopularProduct(props){
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.title}>Popular</div>
        <div className={styles.desc}>Find clothes that are trending recently</div>
        <HomeProduct15 count={props.count}/>
      </section>
    </div>
  )
}

export {HomeNewProduct, HomePopularProduct};