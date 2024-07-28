import React, { useState } from 'react';
import axios from 'axios';
import styles from './Register.module.css'
import ContainerButton from '../Login/ContainerButton/ContainerButton';

const Register = () => {
  const [username, setUsername] = useState('');
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [NumberWhatsapp, SetNumberWhatsapp] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/users/register', {
        userID, username, password
      });
      console.log('User registered:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit}>
    <div className={styles.boxInput}>
      <input
        type="number"
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${userID ? styles.filled : ''}`}>Usuário ID:</label>
      </div>
      <div className={styles.boxInput}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${username? styles.filled : ''}`}>Username:</label>
      </div>
      <div className={styles.boxInput}>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${password ? styles.filled : ''}`}>Password:</label>
      </div>
      <div className={styles.boxInput}>
      <input
        type="number"
        value={NumberWhatsapp}
        onChange={(e) => SetNumberWhatsapp(e.target.value)}
      />
      <label className={`${styles.floatingLabel} ${NumberWhatsapp ? styles.filled : ''}`}>Whatsapp:</label>
      </div>i
      <ContainerButton
        buttonText={'Cadastrar'}
        linkText={"Já possui uma conta?"}
        buttonTextLinkTo={"Faça login"}
        linkTo={'/login'}

        />    
    </form>
    </div>
  );
};

export default Register;
