// import Link from 'next/link'
import Image from 'next/image'
import Link from 'next/link'
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
            <div>
              <Image 
                className={styles.rounded}
                src={imgProducts[4].src}
                alt='productMain'
                width='400'
                height='400'
              />
            </div>
            <div className='d-flex justify-content-between pt-2'>
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

          <div className='col-8 ps-4'>
            <div className={styles.title}>Baju muslim pria</div>
            <div className={styles.h4Grey}>Zabora Cloth</div>
            <div className='pb-4'>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-fill"></i></span>
              <span className={styles.logoStar}><i className="bi bi-star-half"></i></span>
              <span className={styles.desc}>(8.5)</span>
            </div>
            
            <div className={styles.h4Grey}>Price</div>
            <div className={styles.title}>$ 40.0</div>
            <div className='pb-4' />

            <div className={styles.h4Black}>Color</div>
            <div className={styles.productColorGroup}>
              <div className={styles.productColor1}/>
              <div className={styles.productColor2}/>
              <div className={styles.productColor3}/>
              <div className={styles.productColor4}/>
            </div>
            <div className='pb-4' />
            
            <div className='row row-cols-auto'>
              <div className='col me-5'>
                <div className={styles.h4Black}>Size</div>
                <div className='pb-1' />
                <div className='row row-cols-auto'>
                  <div className='col'>
                    <i className="bi bi-dash-circle-fill" style={{color:'#9B9B9B'}}/>
                  </div>
                  <div className='col'>28</div>
                  <div className='col'>
                    <i className="bi bi-plus-circle" style={{color:'#9B9B9B'}}/>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div className={styles.h4Black}>Jumlah</div>
                <div className='pb-1' />
                <div className='row row-cols-auto'>
                  <div className='col'>
                    <i className="bi bi-dash-circle-fill" style={{color:'#9B9B9B'}}/>
                  </div>
                  <div className='col'>1</div>
                  <div className='col'>
                    <i className="bi bi-plus-circle" style={{color:'#9B9B9B'}}/>
                  </div>
                </div>
              </div>
            </div>
            <div className='pb-3' />

            <div className='row'>
              <div className='col-3'> <div className={styles.button}> <div className={styles.buttonCol3} type='button'>Chat</div> </div> </div>
              <div className='col-3'> <div className={styles.button}> <div className={styles.buttonCol3} type='button'>Add bag</div> </div> </div>
              <Link href="/mybag">
                <div className='col-6'> <div className={styles.button}> <div className={styles.buttonCol6} type='button'>Buy</div> </div> </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
        
      <section className='py-4'>
        <div className={styles.title}>Informasi Produk</div>
        <div className='pb-3'/>
        <div className={styles.h3}>Condition</div>
        <div className={styles.h3red}>New</div>
        <div className='pb-3'/>
        <div className={styles.h3}>Description</div>
        <div className='pb-2'/>
        <div className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
        <div className='pb-2'/>
        <div className={styles.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        <div className='pb-2'/>
        <div className={styles.desc}>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
        <div className='pb-2'/>
        <div className={styles.desc}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
        <div className='pb-2'/>

        <div className='pt-4'/>
        <div className={styles.title}>Product review </div>
        <div className='pb-3'/>
        <div className='row row-cols-auto'>

          <div className='col'>
            <div>
              <span style={{fontSize:'50px', fontWeight:"bold"}}>8.5</span>  
              <span style={{fontSize:'16px', color:'grey'}}>/10</span>  
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
            <div className={styles.rating}>
              <div className={styles.logoStar}><i className="bi bi-star-fill"></i></div>
              <div className={styles.ratingValue}>5</div>
              <div className={styles.ratingBar5}/>
              <div className={styles.ratingValue}>5</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.logoStar}><i className="bi bi-star-fill"></i></div>
              <div className={styles.ratingValue}>4</div>
              <div className={styles.ratingBar4}/>
              <div className={styles.ratingValue}>4</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.logoStar}><i className="bi bi-star-fill"></i></div>
              <div className={styles.ratingValue}>3</div>
              <div className={styles.ratingBar2}/>
              <div className={styles.ratingValue}>2</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.logoStar}><i className="bi bi-star-fill"></i></div>
              <div className={styles.ratingValue}>2</div>
              <div className={styles.ratingBar0}/>
              <div className={styles.ratingValue}>0</div>
            </div>
            <div className={styles.rating}>
              <div className={styles.logoStar}><i className="bi bi-star-fill"></i></div>
              <div className={styles.ratingValue}>1</div>
              <div className={styles.ratingBar0}/>
              <div className={styles.ratingValue}>0</div>
            </div>
          </div>

        </div>
      </section>
        
      <hr/>
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