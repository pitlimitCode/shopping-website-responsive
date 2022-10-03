import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/MyBag.module.css'
// import IsLogin from '../components/navbar'

export default function ProfileC() {
  // const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
      </li>
    </ul>
    <div className="tab-content" id="myTabContent">
      <div id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0" className="tab-pane fade">ABC 1</div>
      <div id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0" className="tab-pane fade show active">ABC 2</div>
      <div id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0" className="tab-pane fade">ABC 3</div>
    </div>  
    </>
  )
}
