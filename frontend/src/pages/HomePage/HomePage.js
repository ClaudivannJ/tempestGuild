import React from 'react';
import styles from './HomePage.module.css'
import Header from '../../components/Header/Header';
const HomePage = () => {
    return(
        <div className={styles.homePage}>
            <Header/>
            <main>
            <h3 className={styles.textWelcome}>BEM-VÍNDO</h3> 
               <p className={styles.username}>TP DaSensi</p>
               
            </main>
    </div>
    )
}

export default HomePage;