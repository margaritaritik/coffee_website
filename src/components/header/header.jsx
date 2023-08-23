import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.logo} alt=""/>
                <div className={styles.ava} >
                    <div className={styles.menu_container}>
                        <div className={styles.menu}>

                        </div>
                        <button className={styles.menu_trigger} >

                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;