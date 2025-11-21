import styles from '../project/ProjectCard.module.css'; // Reutilizando o estilo novo
import { BsFillTrashFill } from 'react-icons/bs';

function ServiceCard({ id, name, cost, description, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, cost);
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            
            {/* Agrupamos o conteúdo igual fizemos no ProjectCard */}
            <div className={styles.card_content}>
                <p>
                    <span>Custo:</span> R$ {cost}
                </p>
                <p>{description}</p>
            </div>

            <div className={styles.project_card_actions}>
                {/* Usamos a classe btn_remove para ficar vermelho e bonito */}
                <button onClick={remove} className={styles.btn_remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;