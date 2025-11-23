import { Link } from 'react-router-dom';
import { useState } from 'react'; // Importar useState para controlar o menu
import { FaBars, FaTimes } from 'react-icons/fa'; // Ícones do menu

import Container from './Container';
import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className={styles.navbar}>
            <Container customClass="min-height">
                
                {/* Logo e Botão Mobile ficam agrupados visualmente no mobile */}
                <div className={styles.logo_container}>
                    <Link to="/" onClick={() => setIsMobile(false)}>
                        <img src={logo} alt="Costs" className={styles.logo} />
                    </Link>

                    {/* Botão Sanduíche (Só aparece no mobile via CSS) */}
                    <button 
                        className={styles.mobile_icon}
                        onClick={() => setIsMobile(!isMobile)}
                    >
                        {isMobile ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* A Lista agora tem uma classe dinâmica:
                   Se isMobile for true, adiciona a classe .nav_menu_active
                */}
                <ul className={isMobile ? `${styles.list} ${styles.active}` : styles.list}>
                    <li className={styles.item}>
                        <Link to="/" onClick={() => setIsMobile(false)}>Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects" onClick={() => setIsMobile(false)}>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company" onClick={() => setIsMobile(false)}>Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact" onClick={() => setIsMobile(false)}>Contato</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    );
}

export default Navbar;