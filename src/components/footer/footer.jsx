import React from 'react';
import styles from './footer.module.css';
import style from "../Navbar/navbar.module.css";

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.container_header}>
                    <div className={styles.mail}>Mail</div>
                    <div className={styles.social_media}> social media</div>
                    <div className={styles.footer_links}>
                        <ul className={styles.links}>
                            <li>
                                <a href='/history'>ИСТОРИЯ</a>
                            </li>
                            <li>
                                <a href='/napitki'>НАПИТКИ</a>
                            </li>
                            <li>
                                <a href='/zerna'>ЗЁРНА</a>
                            </li>
                            <li>
                                <a href='/statistika'>СТАТИСТИКА</a>
                            </li>
                            <li>
                                <a href='/polza-i-vred'>ПОЛЬЗА И ВРЕД</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>
    );
};

export default Footer;