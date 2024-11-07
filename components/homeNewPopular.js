
import styles from '../styles/Home.module.css'
import Products15 from './products15'

function HomeNewProduct(props){
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.title}>New</div>
        <div className={styles.desc}>You&apos;ve never seen it before!</div>
        <Products15 count={props.count}/>
      </section>
    </div>
  )
}

// function HomePopularProduct(props){
//   return (
//     <div className={styles.container}>
//       <section className={styles.section}>
//         <div className={styles.title}>Popular</div>
//         <div className={styles.desc}>Find clothes that are trending recently</div>
//         <Products15 count={props.count}/>
//       </section>
//     </div>
//   )
// }

function HomePopularProduct(props){
  return (
    <div >
      <section >
        <div >Popular</div>
        <div >Find clothes that are trending recently</div>
        <Products15 count={props.count}/>
      </section>
    </div>
  )
}

export {HomeNewProduct, HomePopularProduct};
// export {HomeNewProduct};