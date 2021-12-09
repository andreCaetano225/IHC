import React from "react";
import { Enquete } from "../../components/Enquete";
import { Finaly } from "../../components/Finaly";
import styles from './sofa.module.scss';
export const Sofa = () => {
    return(
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.sofa}>
            <div className={styles.sofaHei}>
                <div >
                <p className={styles.mapa}> {'Home > Limpeza do Sofá'}</p>
                </div>
                    <h1>Limpeza do Sofá</h1>
                    <p>O sofá pode ser considerado uma das peças mais importantes da casa. Afinal, depois do quarto e da nossa cama, esse móvel é o segundo mais querido, no qual passamos algum tempo assistindo TV, lendo um livro ou até mesmo relaxando.</p>
                    <img src="redes.png" alt="redes" />

                    <img src="./sofa.png" alt="sofa" />
                    <p>
                    por decorfacil - atualizado em: 1 de julho de 2021
O sofá pode ser considerado uma das peças mais importantes da casa. Afinal, depois do quarto e da nossa cama, esse móvel é o segundo mais querido, no qual passamos algum tempo assistindo TV, lendo um livro ou até mesmo relaxando.

E o fato de passarmos esse tempo utilizando o sofá indica que podemos sim ter alguns problemas, como derramar alguma bebida ou até mesmo ter que lidar com as sujeiras do dia a dia como a poeira e o pelo dos animais de estimação.

Então surge aquela dúvida: Como posso fazer para limpar o meu sofá? Será que existe uma técnica certa ou é preciso levar o móvel para uma empresa especializada nisso?

Pois nesse texto você vai aprender como limpar o seu sofá em casa, com técnicas de limpeza simples, mas muito eficientes e que funcionam nos mais variados tipos de tecido.
                    </p>

            </div>
            <div style={{marginTop: '80px'}}>
                <Enquete/>
            </div>
            </div>
        </div>
        <Finaly/>

        </>
    )
}

export default Sofa