import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id); // Aqui ele pega o ID e manda para o componente pai
    }

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
                <Link to={`/project/${id}`}>
                    <BsPencil /> Editar
                </Link>
                
                {/* CORREÇÃO AQUI: Chama a função 'remove' local, não o handleRemove direto */}
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;