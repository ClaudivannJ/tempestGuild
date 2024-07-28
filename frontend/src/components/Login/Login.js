import React, { useState } from 'react';
import axios from 'axios';
import styles from './Login.module.css'
import ContainerButton from './ContainerButton/ContainerButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/login', {
        email, password
      });
      console.log('User logged in:', response.data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <div className={styles.boxInput}>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className={`${styles.floatingLabel} , ${email ? styles.filled : ''}`}>Usuário ID:</label>
        </div>
        <div className={styles.boxInput}>

          <input
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
