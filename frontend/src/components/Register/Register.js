import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css'
import ContainerButton from '../Login/ContainerButton/ContainerButton';

const Register = () => {
  const [username, setUsername] = useState('');
  const [userId, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [numberPhone, setNumberPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://192.168.11.16:3000/api/register', {
        userId, username, password, numberPhone
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (

    <form onSubmit={handleSubmit}>
    <div className={styles.boxInput}>
      <input className={styles.input}
        type="number"
        value={userId}
        onChange={(e) => setUserID(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${userId ? styles.filled : ''}`}>Usuário ID:</label>
      </div>
      <div className={styles.boxInput}>
      <input className={styles.input}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${username? styles.filled : ''}`}>Username:</label>
      </div>
      <div className={styles.boxInput}>
      <input className={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${password ? styles.filled : ''}`}>Password:</label>
      </div>
      <div className={styles.boxInput}>
      <input className={styles.input}
        type="number"
        value={numberPhone}
        onChange={(e) => setNumberPhone(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${numberPhone ? styles.filled : ''}`}>Whatsapp:</label>
      </div>
      <ContainerButton
        buttonText={'Cadastrar'}
        linkText={"Já possui uma conta?"}
        buttonTextLinkTo={"Faça login"}
        linkTo={'/login'}

        />    
    </form>
  );
};

export default Register;
