/* eslint-disable @next/next/no-img-element */
import React from "react";

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './icarousel.module.scss';


SwiperCore.use([Pagination]);

export const ICarousel = () => {
  const img = ["img1", "img2", "img3", "img4", "img5"];

  return (
    <>
      <div className={styles.icarousel}>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
        >

          {img.map( (item, key) => (

          <SwiperSlide key={key}>
            <img src={`./${item}.png`} alt="items" />
          </SwiperSlide>

          ))}
        </Swiper>
      </div>
      
    </>
  );
};
