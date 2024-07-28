import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = ({ isOpen }) => {
  return (
    <nav className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/tournaments">Tournaments</Link></li>
        <li><Link to="/create-tournament">Create Tournament</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Menu;
