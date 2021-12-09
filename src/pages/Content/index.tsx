import React from "react";
import styles from './conteudo.module.scss';

export const Content= () => {
    return(
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.sobre}>
                <div className={styles.sobreHei}>
                    <div>
                    <p className={styles.mapa}> {'Home > Conteudo do Site'}</p>

                    </div>

                    <h1>Páginas</h1>

                    <ul>
                        <a href="/"> <li> Página Inicial</li></a>
                        <a href="/Area"> <li> Área Externa</li></a>
                        <a href="/CuidadoRoupas"> <li> Cuidado com Roupas</li></a>
                        <a href="/Sofa"> <li> Limpeza do Sofá</li></a>
                        <a href="/Banheiro"> <li> Limpeza do Banheiro</li></a>
                        <a href="/Sobre"> <li> Sobre nós</li></a>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}


export default Content