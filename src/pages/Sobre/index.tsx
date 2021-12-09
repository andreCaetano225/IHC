import React from "react";
import { Finaly } from "../../components/Finaly";
import styles from './sobre.module.scss';

export const Sobre = () => {
    return(
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.sobre}>
                <div className={styles.sobreHei}>
                    <div>
                    <p className={styles.mapa}> {'Home > Sobre Nós'}</p>

                    </div>
                    <div>
                        <h1>Sobre Nós</h1>
                        <p>
                        A equipe da Cleanipedia ama tudo que envolve limpeza. Conhecemos todos os métodos experimentados e testados e garantimos que você esteja coberto em qualquer situação. Desde que começamos a postar nossas dicas em 2013, publicamos 600 artigos e ajudamos 15 milhões de pessoas iguais a você.

Estamos empenhados em dar os melhores conselhos e solucionar seus problemas de limpeza, usando guias simples e práticos para ajudar a resolver todos os contratempos domésticos. Somos apaixonados por tornar a limpeza fácil e divertida, para que você possa desfrutar da sua casa e deixar para trás as preocupações com a limpeza. Nossa equipe trabalha com especialistas para garantir que nossos conselhos sejam precisos e eficazes. 

Conte com a equipe da Cleanipedia para fazer da sua casa um lar.
                        </p> <br /> <br />


                    </div>
                    <div className={styles.sobrefi}>
                    <img src="./uni.png" alt="uniLogo" />
                        <p>
                             Nosso Objetivo Empresarial declara que para ter sucesso é necessário "os mais altos padrões de comportamento empresarial de todos com os quais trabalhamos, as comunidades que tocamos e o ambiente que impactamos". <br /> <br />
                        <a href="https://www.unilever.com.br/" style={{color: 'blue'}} target="_blank">Visite nosso site</a>

                        </p> <br /> <br />
                    </div>
                </div>
            </div>
        </div>
        <Finaly/>
        </>
    )
}

export default Sobre