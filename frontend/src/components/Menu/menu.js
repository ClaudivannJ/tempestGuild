import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ isOpen }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    };
  return (
    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tournaments">Tournaments</Link></li>
        <li><Link to="/create-tournament">Create Tournament</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><button onClick={handleLogout} className={styles.logoutButton}>Encerrar Sessão</button></li>
      </ul>
    </nav>
  );
};

export default Menu;
