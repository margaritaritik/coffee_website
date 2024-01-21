import React from 'react';
import styles from './footer.module.css';
import vk from './vk.svg';
import mail from './mail.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className={styles.container_header}>
                    <div className={styles.container_media}>
                        <a className={styles.mail} href="https://vk.com/club223971082">
                            <img src={mail}/>
                        </a>

                        <a className={styles.social_media} href="https://vk.com/club223971082">
                            <img src={vk}/>
                        </a>
                    </div>
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