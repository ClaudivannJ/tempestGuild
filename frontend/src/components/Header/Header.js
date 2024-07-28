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
    return (
        <header className={styles.header}>
            <Logotipo variant={"header"}/>
            <MenuIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <Menu isOpen={isMenuOpen} />

            
        </header>
    )
}
export default Header;