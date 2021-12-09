import React from "react";
import styles from './ace.module.scss';

export const Acebilidade= () => {
    return(
        <>
        <div style={{display: 'flex'}}>
            <div className={styles.sobre}>
                <div className={styles.sobreHei}>
                    <div>
                    <p className={styles.mapa}> {'Home > Acebilidade'}</p>

                    </div>

                    <h1>Acessibilidade</h1>

                    <p>
                    O termo acessibilidade significa incluir a pessoa com deficiência na participação de atividades como o uso de produtos, serviços e informações. Alguns exemplos são os prédios com rampas de acesso para cadeira de rodas e banheiros adaptados para deficientes. <br /> <br /> 

                    Na internet, acessibilidade refere-se principalmente às recomendações do WCAG (World Content Accessibility Guide) do W3C e no caso do Governo Brasileiro ao e-MAG (Modelo de Acessibilidade em Governo Eletrônico). <br /> <br />

                    Na parte superior do portal existe uma barra de acessibilidade onde se encontra atalhos de navegação padronizados e a opção para alterar o contraste. Essas ferramentas estão disponíveis em todas as páginas do portal.
                    </p>

                    
                </div>
            </div>
        </div>
        </>
    )
}


export default Acebilidade