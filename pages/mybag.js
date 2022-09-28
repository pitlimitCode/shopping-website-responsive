import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/MyBag.module.css'
import IsLogin from '../components/navbar'

export default function MyBag() {
  // const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <Head>
        <title>My Bag</title>
        <meta name="description" content="My ordered product" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <IsLogin />

      <div className={styles.container}>
        <section className='section'>
          <p className='fs-1 fw-bold my-4'>My Bag</p>
          <div className='row'> 

            <div className='col-8'>

              {/* Checkbox all items */}
              <div className='shadow p-3 mb-5 bg-body rounded'>
                <div className='d-flex justify-content-between'>
                  <div className='row row-cols-auto'>
                    <div className="col">
                      <div classname="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked/>
                      </div>
                    </div>
                    <div className='col fw-bold'>Select all items</div>
                    <div className='col fw-bold grey1'>{'(2 items selected)'}</div>
                  </div>

                  <div className='text-danger fw-bold'>Delete</div>
                </div>
              </div>

              {/* Checkbox each item */}
              <div className='shadow p-3 mb-4 bg-body rounded'>
                <div className='d-flex justify-content-between'>
                  <div className='row row-cols-auto d-flex align-items-center'>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked/>
                      </div>
                    </div>
                    <Image 
                      className='rounded'
                      src='/mybag/mybag1.png'
                      alt='productInBag'
                      width='65'
                      height='65'
                    />
                    <div className='col'>
                      <div className='fw-bold'>Men&apos;s formal suit - Black</div>
                      <div className='grey2'>Zabora Cloth</div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center row row-cols-auto'>
                    <div className='col'>
                      <i className="bi bi-dash-circle-fill grey1"/>
                    </div>
                    <div className='col fw-bold'>1</div>
                    <div className='col'>
                      <i className="bi bi-plus-circle grey1"/>
                    </div>
                  </div>
                  <div className='d-flex align-items-center fw-bold'>$ 20.0</div>
                </div>
              </div>

              
              <div className='shadow p-3 mb-4 bg-body rounded'>
                <div className='d-flex justify-content-between'>
                  <div className='row row-cols-auto d-flex align-items-center'>
                    <div className="col">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultChecked/>
                      </div>
                    </div>
                    <Image 
                      className='rounded'
                      src='/mybag/mybag2.png'
                      alt='productInBag'
                      width='65'
                      height='65'
                    />
                    <div className='col'>
                      <div className='fw-bold'>Men&apos;s formal suit - Black</div>
                      <div className='grey2'>Zabora Cloth</div>
                    </div>
                  </div>
                  <div className='d-flex align-items-center row row-cols-auto'>
                    <div className='col'>
                      <i className="bi bi-dash-circle-fill grey1"/>
                    </div>
                    <div className='col fw-bold'>1</div>
                    <div className='col'>
                      <i className="bi bi-plus-circle grey1"/>
                    </div>
                  </div>
                  <div className='d-flex align-items-center fw-bold'>$ 20.0</div>
                </div>
              </div>

            </div>

            {/* Shopping summary */}
            <div className='col-4'>
              <div className='shadow p-3 mb-5 bg-body rounded'>
                <div className='fw-bold'>Shooping Summary</div>
                <div className='d-flex justify-content-between py-4'>
                  <div className='grey1'>Total price</div>
                  <div className='fw-bold'>$ 40.0</div>
                </div>
                <div className={styles.button} type='button'>Buy</div> 
              </div>
            </div>

          </div>


        </section>
      </div>

    </>
  )
}
