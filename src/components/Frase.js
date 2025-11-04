import styles from './Frase.module.css';

function Frase() {
  return (
    <div className={styles.fraseContainer}>

      <h1>Minha frase</h1>
      <p className= {styles.frase} >Esta é minha frase do componente.</p>
    </div>
  );
}
export default Frase;