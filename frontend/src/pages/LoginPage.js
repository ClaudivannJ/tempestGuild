import React from 'react';
import Login from '../components/Login/Login';
import styles from './LoginPage.module.css'
import Logotipo from '../components/Logotipo/Logotipo';
import Footer from '../components/Footer/Footer';

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Logotipo/>
      <Login />
      <Footer/>
    </div>
  );
};

export default LoginPage;
