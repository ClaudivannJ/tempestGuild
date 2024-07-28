import React from 'react';
import Register from '../components/Register/Register';
import Footer from '../components/Footer/Footer';
import Logotipo from '../components/Logotipo/Logotipo';
import styles from './RegisterPage.module.css'

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <Logotipo variant={"form"}/>
      <Register />
      <Footer/>
    </div>
  );
};

export default RegisterPage;
