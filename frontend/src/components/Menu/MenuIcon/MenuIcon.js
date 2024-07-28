import React from 'react';
import styles from './MenuIcon.module.css';

const MenuIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
      <div className={styles.bar1}></div>
      <div className={styles.bar2}></div>
      <div className={styles.bar3}></div>
    </div>
  );
};

export default MenuIcon;
