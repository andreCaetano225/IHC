import React from "react"
import { Enquete } from "../../components/Enquete"
import { Finaly } from "../../components/Finaly"
import styles from './roupa.module.scss'
export const Roupa = () => {
    return(
        <>
        <div style={{display: 'flex'}}>
        <div className={styles.roupa}>
            <div className={styles.roupaHei}>
                <div>
                <p className={styles.mapa}> {'Home > Cuidados com Roupas'}</p>
                </div>
                <h1>
                Cuidados com Roupas
                </h1>
                <p>
                Apaixonados pelos cuidados com roupas: uni-vos! Aprenda com dicas simples, práticas e rápidas como manter suas roupas higienizadas e limpas, retirando manchas e impurezas e garantindo qualidade e vida útil para cada peça.
                </p>
                <img src="./redes.png" alt="redes sociais" />

                <img src="./roupas.png" alt="roupas" />
                <p>
                Pois saiba que isso pode ser fruto de falta de cuidado e má conservação, coisas pequenas que podem fazer com que nossas peças passem de lindas e novas para velhas e feias de um dia para o outro.
                Cuidados com as roupas, desde a hora de lavar até o armazenamento, podem fazer com que suas peças permaneçam com cara de nova por muito mais tempo.
                A maioria de nós usa a máquina de lavar como forma de limpar nossas roupas. Isso, porque a nossa vida é tão corrida que não dá para parar e lavar todas as peças à mão. Mas com alguns pequenos cuidados, você pode manter seu guarda-roupas com aquela cara de novinho em folha e ter peças muito mais duráveis.
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

export default Roupa