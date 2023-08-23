import React from 'react';
import styles from './loader.module.css';

const Loader = () => {
    return (
        <>
            <div className={styles.cup}>
                <div className={styles.handle}></div>
            </div>
        </>
    );
};

export default Loader;