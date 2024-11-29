import Link from 'next/link'
import Image from 'next/image'

export default function LogoBrand(props) {
  return (
    <Link href="/">
      <div style={{cursor:'pointer'}}>

        <div className='d-flex justify-content-center'>
          <Image 
            // className={styles.logo}
            src="/logo/logoShop.svg"
            alt='category'
            width={props.size}
            height={props.size}
            // style={{
            //   fontWeight:'bold',
            //   alignItems:'center',
            //   display:'flex'
            // }}
          />

          <div className='theme-color fw-bold' style={{fontSize:props.size}}>Shop.id</div>
          
        </div>
      </div>
    </Link>
  )
}