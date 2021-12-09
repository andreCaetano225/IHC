import React from "react";
import { Enquete } from "../../components/Enquete";
import { Finaly } from "../../components/Finaly";
import styles from './banheiro.module.scss';

export const Banheiro = () => {
    return(
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.banheiro}>
                <div className={styles.banheiroHei}>
                    <div>
                        <p className={styles.mapa}> {'Home > Limpeza do Banheiro'}</p>
                    </div>
                    <div>
                        <h1>Limpeza do banheiro</h1>
                        <p> banheiro de casa é um antro de germes e bactérias prejudiciais à saúde. Mas não se preocupe: nossos especialistas separaram as melhores dicas de limpeza do banheiro!  </p>
                        <img src="./redes.png" alt="redes" />
                        <img src="./banheiro.png" alt="banheiro" />
                        <p>
                        Ninguém sabe precisar quando a rotina dos brasileiros, comerciantes e trabalhadores vai voltar ao normal. Por enquanto, a recomendação é que todos fiquem em casa e se cuidem as melhor forma.

Diante disso, as famílias precisam se organizar para limparem a casa, cuidar dos filhos e ainda dar conta das atividades correspondentes ao home office. Mas mesmo com tantas demandas, a higienização e limpeza dos banheiros é algo que não pode ser negligenciado em tempos de pandemia.

O banheiro é local estratégico para a proliferação de bactérias e deve ser limpo, se possível, diariamente. <br /> <br />

A higienização mais leve deve ser feita todos os dias. Porém, pelo menos uma vez por semana, é importante e recomendado lavar todo o banheiro com água, sabão, e depois finalizar com desinfetante.
Nos vidros, use espoja macia, sem aço e esteja atento aos rótulos para evitar danos ao box do banheiro. <br /> <br />
Para todo o processo de limpeza, você vai precisar de água sanitária, removedor, vinagre, detergente líquido, desinfetante (caso queira um ambiente mais perfumado), esponja e escova sanitária. Não esqueça de separar panos de tecidos macios. Vamos usar um pano mais úmido para remover a primeira camada de limpeza e um seco para dar o brilho final.
                        </p>
                    </div>
                    <div style={{marginTop: '80px'}}>
                        <Enquete/>
                    </div>
                </div>
            </div>
        </div>
        <Finaly/>
        </>
    )
}

export default Banheiro