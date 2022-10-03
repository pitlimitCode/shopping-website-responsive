import React, {useState} from "react";
import { Modal } from "reactstrap";

import Image from 'next/image'
import styles from '../styles/MyBag.module.css'

export default function modalPayment() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div type="button" className={styles.button} onClick={() => setModalOpen(!modalOpen)}>
        Select payment
      </div>

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>

        <div className="px-3 d-flex align-items-center shadow-sm bg-body rounded-top">
          <div className="pt-1 pe-4" type="button" onClick={() => setModalOpen(!modalOpen)}>
            <span aria-hidden={true} className="fs-2">×</span>
          </div>
          <div className="fs-5 fw-bold">Payment</div>
        </div>

        <div className="p-3 border-bottom border-3">
          <div className="fw-bold">Payment method</div>

          <div className="row d-flex align-items-center" style={{height:'50px'}}>
            <div className="col-3">
              <Image 
                className='rounded'
                src='/logo/gopay-logo.png'
                alt='imgPayment'
                width='82'
                height='18'
              />
            </div>
            <div className="col-9 d-flex justify-content-between">
              <div className="fw-bold">Gopay</div>
              <div>
                <input className="form-check-input" type="radio" name="flexRadioDefault2"/>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center" style={{height:'50px'}}>
            <div className="col-3">
              <Image 
                className='rounded'
                src='/logo/pos-indonesia-logo.png'
                alt='imgPayment'
                width='58'
                height='38'
              />
            </div>
            <div className="col-9 d-flex justify-content-between">
              <div className="fw-bold">Pos Indonesia</div>
              <div>
                <input className="form-check-input" type="radio" name="flexRadioDefault2"/>
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-center" style={{height:'50px'}}>
            <div className="col-3">
              <Image 
                className='rounded'
                src='/logo/mastercard-logo.png'
                alt='imgPayment'
                width='53'
                height='41'
              />
            </div>
            <div className="col-9 d-flex justify-content-between">
              <div className="fw-bold">Master card</div>
              <div>
                <input className="form-check-input" type="radio" name="flexRadioDefault2" defaultChecked/>
              </div>
            </div>
          </div>

        </div>

        <div className="px-3 mb-5">
          <div className="fw-bold py-3">Shopping summary</div>
          <div className="d-flex justify-content-between">
            <div className="grey1">Order</div>
            <div className="fw-bold">$ 40.0</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="grey1  py-2">Delivery</div>
            <div className="fw-bold  py-2">$ 5.0</div>
          </div>
        </div>

        <div className="py-3 px-3 mt-3 fw-bold shadow-lg rounded d-flex align-items-center justify-content-between">
          <div>
            <div>Shopping summary</div>
            <div className='fw-bold theme-color'>$ 45.0</div>
          </div>
          <div>
            <div type="button" className={styles.button2}>
              Buy
            </div>
          </div>
        </div>

      </Modal>
    </>
  );
};
