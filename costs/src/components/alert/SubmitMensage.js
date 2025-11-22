import styles from './SubmitMensage.module.css';
function SubmitMensage({ msg, type }) {
    return (
        // Aqui você aplica a classe baseada no tipo (erro ou sucesso)
        <div className={`${styles.message} ${styles[type]}`}>
            {msg}
        </div>
    )
}
export default SubmitMensage;