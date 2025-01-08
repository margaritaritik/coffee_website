import React from 'react';
import styles from './footer.module.css';
import vk from './vk.svg';
import mail from './mail.svg';

const Footer = () => {
    return (
        <>
           
            <div className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Мой Лендинг. Все права защищены.</p>
    </div>

         

        </>
    );
};

export default Footer;