// import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

function NonLogin(props){
  return (
    <div className={styles.container}>
      <div className={styles.justifyLeft}>
        <img className={styles.logo} src="/logo/logoShop.svg"/>
        <div className={styles.brand}>Shop.id</div>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          <div className={styles.icon}><i className="bi bi-search" style={{color:'grey'}}/></div>
        </div>
      </div>
      
      <div className={styles.justifyRight}>
        <div className={styles.icon}><i className="bi bi-cart2" style={{color:'grey'}}/></div>
        <div className={styles.button}> <div className={styles.login} type='button'>Login</div> </div>
        <div className={styles.button}> <div className={styles.signup} type='button'>Signup</div> </div>
      </div>
    </div>
  )
}

function Login(props){
  return (
    <div className={styles.container}>
    </div>
  )
}

export {Login, NonLogin};