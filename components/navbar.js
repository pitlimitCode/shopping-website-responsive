import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Navbar.module.css'

function NonLogin(props){
  return (
    <div className={styles.container}>
      <div className={styles.justifyLeft}>
        <Link href="/">
          <div className={styles.logoBrandToHome}>
            <Image 
              className={styles.logo}
              src="/logo/logoShop.svg"
              alt='category'
              width='18'
              height='18'
            />
            <div className={styles.brand}>Shop.id</div>
          </div>
        </Link>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          <div className={styles.icon}><i className="bi bi-search" style={{color:'grey'}}/></div>
        </div>
      </div>
      
      <div className={styles.justifyRight}>
        <Link href="/mybag">
          <div className={styles.icon}><i className="bi bi-cart2" style={{color:'grey'}}/></div>
        </Link>
        <Link href="/login">
          <div className={styles.button}> <div className={styles.login} type='button'>Login</div> </div>
        </Link>
        <Link href="/register">
          <div className={styles.button}> <div className={styles.signup} type='button'>Signup</div> </div>
        </Link>
      </div>
    </div>
  )
}

function Login(props){
  return (
    <div className={styles.container}>
      <div className={styles.justifyLeft}>
        <Link href="/">
          <div className={styles.logoBrandToHome}>
            <Image 
              className={styles.logo}
              src="/logo/logoShop.svg"
              alt='category'
              width='18'
              height='18'
            />
            <div className={styles.brand}>Shop.id</div>
          </div>
        </Link>
        <div className={styles.searchBar}>
          <input type="text" className={styles.searchInput} placeholder="Search" />
          <div className={styles.iconSearch}><i className="bi bi-search"/></div>
        </div>
        {/* <Link href="/filterpopup"> */}
          <div className={styles.funnelIcon}><i className="bi bi-funnel"/></div>
        {/* </Link> */}
      </div>
      
      <div className={styles.justifyRight}>
        <Link href="/mybag">
          <div className={styles.icon}><i className="bi bi-cart2"/></div>
        </Link>
        {/* <Link href="/#"> */}
          <div className={styles.icon}><i className="bi bi-bell"/></div>
        {/* </Link> */}
        {/* <Link href="#"> */}
          <div className={styles.icon}><i className="bi bi-envelope"/></div>
        {/* </Link> */}
        {/* <Link href="#"> */}
          {/* <div className={styles.icon}><i className="bi bi-person"/></div> */}
          <Image 
            className='dropdown-toggle'
            data-bs-toggle="dropdown-toggle"
            aria-expanded="false"
            src="/logo/christian-buehner.jpg"
            alt='category'
            width='18'
            height='18'
            style={{
              cursor: 'pointer',
              borderRadius: '50%'
            }}
          />
        {/* </Link> */}

      </div>
    </div>
  )
}

export {Login, NonLogin};