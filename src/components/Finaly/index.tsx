import React from "react";
import styles from './finaly.module.scss';
export const Finaly = () => {
  return (
  <>
   <div className={styles.FinalyComponent}>
     <img src="./logoFinaly.png" alt="Finaly" />
     <div>
       <h3>Sobre Nós</h3>
       <h3>Aviso de Privacidade</h3>
       <h3>Termos de Uso</h3>
       <h3>Aviso de Cookies</h3>
       <h3>Mapa do site</h3>
     </div>
     <img src="./sociais.png" alt="sociais" />
     <p>© 2021 Apresentado para você pela Unilever</p>
   </div>
  </>
  ) 
};
