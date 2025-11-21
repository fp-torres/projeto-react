import styles from './Home.module.css';
import savings from '../../img/savings.svg'; // Mantenha o import, mas troque o arquivo depois
import LinkButton from '../layout/LinkButton';

function Home() {
    return (
        <section className={styles.home_container}>
            <div className={styles.content_left}>
                <h1>
                    Bem-vindo ao <span className={styles.brand_span}>Costs</span>
                </h1>
                <p>Gerencie seus projetos com eficiência e controle total dos seus custos.</p>
                <LinkButton to="/newproject" text="Criar Projeto Agora" />
            </div>
            
            <div className={styles.content_right}>
                <img src={savings} alt="Costs Manager" className={styles.hero_image} />
            </div>
        </section>
    );
}

export default Home;