import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Product.module.css'
import Products15 from './products15'

// function Product(props){
//   return (
//     <Link href={`/product/${props.count}`}>
//       <div className={styles.card}>
//         <Image
//           className={styles.card_imageProduct}
//           src="/product/product.png"
//           alt='product'
//           width='236'
//           height='136'
//         />
//         <div className={styles.card_body}>
//           <div className={styles.card_title}>Men&apos;s format suit - Black & White</div>
//           <div className={styles.card_price}>$ 40.0</div>
//           <div className={styles.card_brand}>Zabora Cloth</div>
//           <div>
//             <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
//             <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
//             <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
//             <span className={styles.card_star}><i className="bi bi-star-fill"></i></span>
//             <span className={styles.card_star}><i className="bi bi-star-half"></i></span>
//             <span className={styles.card_starPoint}>9.5</span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// function HomeProduct15(props){
//   return (
//     <>
//       <div className={styles.products}>
//         <Product count={props.count[0]}/>
//         <Product count={props.count[1]}/>
//         <Product count={props.count[2]}/>
//         <Product count={props.count[3]}/>
//         <Product count={props.count[4]}/>
//       </div>
//       <div className={styles.products}>
//         <Product count={props.count[5]}/>
//         <Product count={props.count[6]}/>
//         <Product count={props.count[7]}/>
//         <Product count={props.count[8]}/>
//         <Product count={props.count[9]}/>
//       </div>
//       <div className={styles.products}>
//         <Product count={props.count[10]}/>
//         <Product count={props.count[11]}/>
//         <Product count={props.count[12]}/>
//         <Product count={props.count[13]}/>
//         <Product count={props.count[14]}/>
//       </div>
//     </>
//   )
// }



function ProductDetail(props){

  const imgProducts = [
    { src: "/detailProduct/detailproduct5.png" },
    { src: "/detailProduct/detailproduct4.png" },
    { src: "/detailProduct/detailproduct3.png" },
    { src: "/detailProduct/detailproduct2.png" },
    { src: "/detailProduct/detailproduct1.png" }
  ];

  return (
    <div className={styles.container}>

      <section className={styles.section}>
        <div className={styles.categoryClass}>{'Home > category > T-shirt'}</div>

        <div className='row'>

          <div className='col-4'>
            <div className='row pb-2'>
              <Image 
                className={styles.rounded}
                src={imgProducts[4].src}
                alt='productMain'
                width='400'
                height='400'
              />
            </div>
            <div className='d-flex justify-content-between'>
              {imgProducts.map((img, index) => (
                <div key={index}>
                  <Image 
                    className={styles.rounded}
                    src={img.src}
                    alt='productMain'
                    width='80'
                    height='80'
                  />
                </div>
              ))}
            </div>
          </div>

          <div className='col-8'>

            <div className={styles.title}>Baju muslim pria</div>
            <div className={styles.h4Grey}>Zabora Cloth</div>
            <div>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-half"></i></span>
              <span className={styles.desc}>(9.5)</span>
            </div>
            
            <div className={styles.h4Grey}>Price</div>
            <div className={styles.title}>$ 40.0</div>

            <div className={styles.h4Black}>Color</div>
            <div>
              4Color
            </div>
            
            <div className='row row-cols-auto'>
              <div className='col me-5'>
                <div className={styles.h4Black}>Size</div>
                <div className='row row-cols-auto'>
                  <div className='col'>
                    <i className="bi bi-dash-circle-fill"/>
                  </div>
                  <div className='col'>28</div>
                  <div className='col'>
                    <i className="bi bi-plus-circle"/>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className={styles.h4Black}>Jumlah</div>
                <div className='row row-cols-auto'>
                  <div className='col'>
                    <i className="bi bi-dash-circle-fill"/>
                  </div>
                  <div className='col'>1</div>
                  <div className='col'>
                    <i className="bi bi-plus-circle"/>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-3'> <div className={styles.button}> <div className={styles.buttonCol3} type='button'>Chat</div> </div> </div>
              <div className='col-3'> <div className={styles.button}> <div className={styles.buttonCol3} type='button'>Add bag</div> </div> </div>
              <div className='col-6'> <div className={styles.button}> <div className={styles.buttonCol6} type='button'>Buy</div> </div> </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className={styles.title}>Informasi Produk</div>
          <div className={styles.h3}>Condition</div>
          <div className={styles.h3red}>New</div>
          <div className={styles.h3}>Description</div>
          <div className={styles.desc}>Lorem </div>
          <div className={styles.desc}>Lorem </div>
          <div className={styles.desc}>Lorem </div>
          <div className={styles.desc}>Lorem </div>

          <div className={styles.title}>Product review </div>
          <div className='row row-cols-auto'>
            <div className='col'>
              <div>
                <span>9.5</span>  
                <span>/10</span>  
              </div>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span className={styles.logoStar}><i className="bi bi-star-half"></i></span>
              </div>
            </div>
            <div className='col'>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span>5</span>
                <span>-----</span>
                <span>4</span>
              </div>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span>4</span>
                <span>-----</span>
                <span>0</span>
              </div>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span>3</span>
                <span>-----</span>
                <span>0</span>
              </div>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span>2</span>
                <span>-----</span>
                <span>0</span>
              </div>
              <div>
                <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
                <span>1</span>
                <span>-----</span>
                <span>0</span>
              </div>
            </div>
                
          </div>

        </div>
      </section>

    </div>
  )
}

function OtherProduct(props){
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.other}>Other products like this</div>
        <div className={styles.desc}>You&apos;ve never seen it before!</div>
        <Products15 count={props.count}/>
      </section>
    </div>
  )
}

export {ProductDetail, OtherProduct};