import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                
                {/* Lado Esquerdo: Informações Compactas */}
                <div className={styles.company_info}>
                    <h3>Costs <span className={styles.highlight}>App</span></h3>
                    <p>Av. Presidente Vargas - RJ</p>
                    <p>CNPJ: 00.000.000/0001-00</p>
                    <p className={styles.email}>contato@costs.com.br</p>
                </div>

                {/* Lado Direito: Agrupa Social e Copyright */}
                <div className={styles.right_section}>
                    <ul className={styles.social_list}>
                        <li>
                            <a href="https://felipeportfolio.forgedevapps.com/" target="_blank" rel="noopener noreferrer" title="Site">
                                <FaGlobe />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/fp.torresz/" target="_blank" rel="noopener noreferrer" title="Instagram">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/felipe-torres-id/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </li>
                    </ul>

                    <p className={styles.copyright}>
                        <span>Costs</span> &copy; 2025
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;