import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { BsPencil, BsFillTrashFill, BsCalendarEvent, BsClockHistory } from 'react-icons/bs';
import { parseISO, isAfter, format } from 'date-fns';

function ProjectCard({ id, name, budget, category, start_date, end_date, status, handleRemove }) {
    
    const remove = (e) => {
        e.preventDefault();
        handleRemove(id);
    }

    // --- FUNÇÃO DE FORMATAÇÃO DE MOEDA ---
    const formatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    }

    // --- LÓGICA DE STATUS ---
    let displayStatus = 'Em Andamento';
    let statusClass = 'ongoing'; 

    if (status === 'Concluído') {
        displayStatus = 'Concluído';
        statusClass = 'finished';
    } 
    else {
        if (end_date) {
            try {
                const today = new Date();
                today.setHours(0,0,0,0);
                const projectEndDate = parseISO(end_date);

                if (isAfter(today, projectEndDate)) {
                    displayStatus = 'Atrasado';
                    statusClass = 'late';
                } else {
                    displayStatus = 'Em Andamento';
                    statusClass = 'ongoing';
                }
            } catch (error) {
                console.error("Erro ao processar data:", error);
            }
        }
    }

    const formatDate = (dateStr) => {
        if (!dateStr) return '---';
        try {
            return format(parseISO(dateStr), 'dd/MM/yyyy');
        } catch (e) {
            return dateStr;
        }
    }

    return (
        <div className={`${styles.project_card} ${styles[statusClass + '_border']}`}>
            <h4>{name}</h4>
            
            <div className={styles.card_content}>
                
                <div className={styles.date_info}>
                   <p><BsCalendarEvent /> Início: {formatDate(start_date)}</p>
                   <p><BsClockHistory /> Fim: {formatDate(end_date)}</p>
                </div>

                <p>
                    {/* AQUI APLICAMOS A FORMATAÇÃO */}
                    <span>Orçamento:</span> {formatCurrency(budget)}
                </p>
                
                <p className={styles.category_text}>
                    <span className={`${styles.category} ${styles[category.toLowerCase()]}`}></span> 
                    {category}
                </p>

                <p className={styles.status_text}>
                    <span className={`${styles.status_indicator} ${styles[statusClass]}`}></span>
                    {displayStatus}
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