import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css'
import ContainerButton from './ContainerButton/ContainerButton';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = async (e) => {
    console.log(userId, password);
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.11.16:3000/api/login', {
        userId, password
      });

      console.log(userId, password)
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
    
      window.location.href = '/';
      console.log('User logged in:', response.data);
    } catch (error) {
      console.log(error);
  }
};

  return (
      <form onSubmit={handleSubmit}>
        <div className={styles.boxInput}>

          <input className={styles.input}
            type="number"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label className={`${styles.floatingLabel} , ${userId ? styles.filled : ''}`}>Usuário ID:</label>
        </div>
        <div className={styles.boxInput}>

          <input className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className={`${styles.floatingLabel} ${password ? styles.filled : ''}`}>Password:</label>
        </div>
        <ContainerButton
        buttonText={'Entrar'}
        linkText={"Ainda não possui uma conta?"}
        buttonTextLinkTo={"Cadastre-se"}
        linkTo={'/register'}

        />    
      </form>
  );
};

export default Login;
