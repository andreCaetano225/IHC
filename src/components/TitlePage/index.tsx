/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Carrousel } from "../Carrousel";
import styles from "./titlepage.module.scss";
export const TitlePage: React.FC = () => {
  return (
    <>
    <div className={styles.colorfundo}>

      <div className={styles.HeaderTitle}>
        <h1>
          Cleanipedia: dicas de limpeza, cuidados com a casa, sua família e suas
          roupas
        </h1>
        <p>
          Bem-vindo ao Cleanipedia, seu portal com as melhores dicas de limpeza.
          Confira as recomendações dos nossos especialistas para deixar a sua
          casa cheirosa e aconchegante. Se quer limpar a cozinha ou tirar mancha
          da sua roupa favorita, conte com a gente!
        </p>
        <div className={styles.carousel}>
          <Carrousel />
        </div>
        <div>
          <img src="./banner.png" alt="Banner" className={styles.banner} />
        </div>
      </div>
    </div>
    </>
  );
};
