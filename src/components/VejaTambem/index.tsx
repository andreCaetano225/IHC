import React from "react";
import { Finaly } from "../Finaly";
import { ICarousel } from "../ICarousel";
import styles from './veja.module.scss'

export const VejaTambem = () => {
  return (
    <>
      <div className={styles.veja}>
      <h1 style={{ marginTop: '25px'}}>Veja Também</h1>
      <ICarousel />
      </div>
    </>
  );
};
