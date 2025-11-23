import styles from '../project/ProjectCard.module.css'; // Reutilizando o estilo atualizado
import { BsFillTrashFill } from 'react-icons/bs';

function ServiceCard({ id, name, cost, description, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id, cost);
    }

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            
            <div className={styles.card_content}>
                <p>
                    <span>Custo:</span> {formatCurrency(cost)}
                </p>
                
                {/* Alteração aqui: Bloco específico para descrição */}
                <div className={styles.service_desc}>
                    <span>Descrição:</span>
                    <p style={{ margin: 0, fontStyle: 'italic', color: '#ccc' }}>
                        {description}
                    </p>
                </div>
            </div>

            <div className={styles.project_card_actions}>
                <button onClick={remove} className={styles.btn_remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;