import React from 'react';
import styles from './coffeeBeans.module.css'
import coffee_cup from './coffee-cup.png';

const CoffeeBeans = () => {
    return (
        <>
            <div className={styles.coffee}>
                <div className={styles.shooting_coffee}></div>
                <div className={styles.shooting_coffee}></div>
                <div className={styles.shooting_coffee}></div>
                <div className={styles.shooting_coffee}></div>
            </div>
            <div className={styles.container}>
                <img src={coffee_cup} alt="cup coffee" className={styles.cup}></img>
            </div>

        </>
    );
};

export default CoffeeBeans;