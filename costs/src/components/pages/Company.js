import styles from './Company.module.css';

import { FaRegObjectGroup, FaChartLine, FaWallet } from 'react-icons/fa';

function Company() {
    return (
        <section className={styles.company_container}>
            <div className={styles.header}>
                <h1>Sobre o <span className={styles.highlight}>Costs</span></h1>
                <p>
                    O Costs nasceu com uma missão simples: <strong>descomplicar o gerenciamento de projetos</strong>. 
                    Sabemos que manter o controle orçamentário e o acompanhamento de serviços pode ser um desafio, 
                    por isso criamos uma solução intuitiva, moderna e eficiente para você focar no que realmente importa: 
                    fazer seu projeto acontecer.
                </p>
            </div>

            <div className={styles.features_grid}>
                <div className={styles.card}>
                    <FaRegObjectGroup className={styles.icon} />
                    <h3>Organização</h3>
                    <p>Centralize todos os seus projetos em um único lugar de forma estruturada.</p>
                </div>

                <div className={styles.card}>
                    <FaWallet className={styles.icon} />
                    <h3>Controle de Custos</h3>
                    <p>Defina orçamentos e acompanhe em tempo real o quanto foi gasto.</p>
                </div>

                <div className={styles.card}>
                    <FaChartLine className={styles.icon} />
                    <h3>Resultados</h3>
                    <p>Tome decisões baseadas em dados e evite surpresas no final do mês.</p>
                </div>
            </div>
        </section>
    );
}

export default Company;