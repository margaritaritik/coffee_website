import React from 'react';
import styles from './header.module.css';
import logo from '../Navbar/logo.svg'

const Header = () => {
    return (
        <div className={styles.container_header}>
            <div className={styles.container}>
                <img src={logo} className={styles.logo} alt="логотип кофе"/>
                <div className={styles.ava} >
                    <div className={styles.menu_container}>
                        <div className={styles.menu}>

                        </div>
                        <button className={styles.menu_trigger} >

                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;