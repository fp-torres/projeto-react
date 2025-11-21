import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill } from 'react-icons/bs';

function ProjectCard({ id, name, budget, category, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            
            <div className={styles.card_content}>
                <p>
                    <span>Orçamento:</span> R$ {budget}
                </p>
                <p className={styles.category_text}>
                    {/* A bolinha colorida continua, mas agora estilizada */}
                    <span className={`${styles.category} ${styles[category.toLowerCase()]}`}></span> 
                    {category}
                </p>
            </div>

            <div className={styles.project_card_actions}>
                <Link to={`/project/${id}`} className={styles.btn_edit}>
                    <BsPencil /> Editar
                </Link>
                
                <button onClick={remove} className={styles.btn_remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ProjectCard;