import React, { useState } from 'react';
import MenuIcon from '../Menu/MenuIcon/MenuIcon';
import Menu from '../Menu/menu';
import styles from './Header.module.css'
import Logotipo from '../Logotipo/Logotipo';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const username = localStorage.getItem('username');
    return (
        <header className={styles.header}>
            <div className={styles.box}>
                <Logotipo variant={"header"} />
                <div className={styles.boxUsername}>
                    <h3 className={styles.textWelcome}>BEM-VÍNDO</h3>
                    <p className={styles.username}>{username}</p>
                </div>
            </div>
            <MenuIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Menu isOpen={isMenuOpen} />


        </header>
    )
}
export default Header;