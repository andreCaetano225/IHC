import React, { useState } from "react";
import styles from './enquete.module.scss';

export const Enquete = () => {
    const [color, setColor] = useState(false);
    const [colorbt2, setColorbt2] = useState(false);




    return(
        <>
        <div className={styles.enquete}>
            <h3>Esse artigo foi útil?</h3>
            <div>
                <button onClick={ () => {
                    if(color == false){
                        setColor(true)
                    }else {
                        setColor(false)
                    }
                    }} style={color ? {backgroundColor: '#2BB27B'} : {backgroundColor: ' #FFF'} }>
                    <img src="./like.svg" alt="LikeButton" />
                </button>
                <button  onClick={ () => {
                    if(colorbt2 == false){
                        setColorbt2(true)
                    }else {
                        setColorbt2(false)
                    }
                    }} style={colorbt2 ? {backgroundColor: '#2BB27B'} : {backgroundColor: ' #FFF'} }>
                    <img src="./dislike.svg" alt="LikeButton" />
                </button>
            </div>
        </div>
        </>
    )
}