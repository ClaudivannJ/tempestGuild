import styles from './ContainerButton.module.css';
const ContainerButton = () => {
    return(
        <div className={styles.containerButton}>
          <button type="submit">Entre</button>
          <span className={styles.span}>
            <p className={styles.text} > Ainda não possui uma conta?</p>
            <a className={styles.buttonRegister} href="#">Cadastre-se</a>
          </span>
          
        </div>
    )
}
export default ContainerButton;