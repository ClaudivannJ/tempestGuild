import styles from './Footer.module.css'

const Footer =  () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.span}>
                   Desenvolvido por:  
                <a href="https://api.whatsapp.com/send?phone=+5587981569414&text=Olá, tudo bem?" className={styles.a}>ClaudivannJ</a>
            </span>
            <p className={styles.copy}>Copyright © 2022 - Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer;