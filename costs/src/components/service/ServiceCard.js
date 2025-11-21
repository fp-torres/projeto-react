import styles from '../project/ProjectCard.module.css';


import { BsFillTrashFill } from 'react-icons/bs';

function ServiceCard({ id, name, cost, description, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        // Passamos o ID e o Custo para poder descontar do total do projeto
        handleRemove(id, cost);
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo:</span> R$ {cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;