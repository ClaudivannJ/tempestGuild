import styles from './Logotipo.module.css'

const Logotipo = () => {
    return(
        <>
            <img className={styles.img} src={`${process.env.PUBLIC_URL}/tempestLogo.png`} alt='logo'/>
            <h1><span>亗</span> TEMP<span>EST</span></h1>
        </>
    )
}

export default Logotipo;