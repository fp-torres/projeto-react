import styles from './Container.module.css';

function Container({ children, customClass }) {
    const custom = customClass ? styles[customClass] : '';
    return <div className={`${styles.container} ${custom}`}>{children}</div>;
}

export default Container;