/* eslint-disable */

// import Link from 'next/link'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

function HomeThemes(props){
  const themes = [
    { src: "/card/Card Promotion 1.png" },
    { src: "/card/Card Promotion 2.png" },
  ];
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <Swiper 
          className={styles.swiper}
          slidesPerView={2}
          centeredSlides={10}
          spaceBetween={30}
          navigation={true}
          loop={true}
          modules={[Navigation]} 
        >
          {themes.map((theme, index) => (
            <SwiperSlide className='swiper-slide' key={index}>
              <img
                className={styles.imgTheme} 
                src={theme.src}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  )
}

function HomeCategory(props){
  const categories = [
    { src: "/category/Group 1235.jpg" },
    { src: "/category/Group 1236.jpg" },
    { src: "/category/Group 1237.jpg" },
    { src: "/category/Group 1238.jpg" },
    { src: "/category/Group 1239.jpg" },
    { src: "/category/Group 1240.jpg" },
    { src: "/category/Group 1241.jpg" },
    { src: "/category/Group 1242.jpg" },
    { src: "/category/Group 1243.jpg" },
    { src: "/category/Group 1244.jpg" },
    { src: "/category/Group 1245.jpg" },
  ];
  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <div className={styles.title}>Category</div>
        <div className={styles.desc}>What are you currently looking for</div>
    
        <Swiper 
          className={styles.swiper}
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          loop={true}
          modules={[Navigation]} 
        >
          {categories.map((category, index) => (
            <SwiperSlide className='swiper-slide' key={index}>
              <img
                className={styles.imgCategory} 
                src={category.src}
              />
              {/* <Image
                className={styles.imgCategory} 
                src={category.src}
                alt='category'
                width='206'
                height='220'
              /> */}
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  )
}

export {HomeThemes, HomeCategory};