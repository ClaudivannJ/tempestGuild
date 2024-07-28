import styles from './Logotipo.module.css'

const Logotipo = ({variant}) => {
    return(
        <div className={`${styles.logotipo} ${styles[variant]} `}>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/tempestLogo.png`} alt='logo'/>
            <h1><span>亗</span> TEMP<span>EST</span></h1>
        </div>
    )
}

export default Logotipo;