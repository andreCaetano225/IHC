/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react/no-children-prop

import Carousel from "framer-motion-carousel";
import React from "react";
import styles from "./carrousel.module.scss";

export const Carrousel = () => {
  const img = ["banheiro", "sofa"];

  return (
    <>
      <div className={styles.carousel}>
        <Carousel autoPlay={true} interval={3500} loop={true}>
          {img.map((item, i) => (
            <img src={`./${item}.png`} alt="Carousel" key={i} />
          ))}
        </Carousel>
      </div>
    </>
  );
};
