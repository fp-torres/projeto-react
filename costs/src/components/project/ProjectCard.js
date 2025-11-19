import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R$ {budget}
            </p>
            <p className={styles.category_text}>
                <span className={`${styles.category} ${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                {/* AQUI MUDOU: O Link é o próprio botão agora, sem wrapper */}
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                
                <button onClick={handleRemove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;