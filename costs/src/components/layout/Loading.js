import styles from './Loading.module.css';

function Loading() {    
    return (
        <div className={styles.loader_container}>
            <div className={styles.loader}></div>
        </div>
    );
}

export default Loading;