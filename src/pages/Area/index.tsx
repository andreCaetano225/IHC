import React from "react";
import { Finaly } from "../../components/Finaly";
import styles from './area.module.scss';
import { CarrouselArea } from "./componentsArea/CarouselArea";

export  const Area = () => {
    return(
        <>
        <div style={{display: 'flex'}}>
        <div className={styles.area}>
        <div className={styles.areaHei}>
        <div>
         <p className={styles.mapa}> {'Home > Área Externa'}</p>
        </div>
        <div>
         <h1>Área Externa</h1>
         <p>Toda a parte exterior do seu lar representa a área externa. Seja uma garagem ou um quintal, seja a sacada de um apartamento ou uma varanda espaçosa. Se na sua área externa há plantas ou espaços para churrasqueira, tem mais grama ou mais piso, não importa: nossos especialistas trazem as melhores dicas para sua área externa estar sempre brilhando, limpinha e cheirosa.</p>
        </div>
        <div style={{marginLeft: '180px'}}>
        <CarrouselArea/>
        </div>
        </div>
        </div>
        </div>
        <Finaly/>
        </>
        

    )
}

export default Area