/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./navbar.module.scss";
export const Navbar: React.FC = () => {
  return (
    <>
      <div className={styles.HeaderNavbar}>
        <div>
          <a href="https://www.unilever.com.br/" target="_blank">

          <img
            src="./logo.png"
            alt="Logo marca da empresa"
            style={{ marginLeft: "100px" }}
            
          />
          </a>

          <a href="/">

          <img src="./logo2.png" alt="Logo marca da empresa 2" />
          </a>
            
        </div>
      </div>
      <div className={styles.NavbarColor}>
        <div className={styles.NavbarOptions}>
          <a href="/Area">
            <h1>Área Externa</h1>
          </a>
          |
          <a href="/CuidadoRoupas">
            <h1>Cuidados com Roupas</h1>
          </a>
          |
          <a href="/Sofa">
            <h1>Limpeza do sofá</h1>
          </a>
          |
          <a href="/Banheiro">
            <h1>Limpeza do banheiro</h1>
          </a>
          |
          <a href="/Sobre">
            <h1>Sobre Nós</h1>
          </a>
        </div>
      </div>
    </>
  );
};

