import React from 'react';
import styles from "./slider_coffee.module.css";
import layer1 from '../../../images/facts/f1.png'
import latte from '../../../images/slider/coffee/latte.png'

const SliderCoffee = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.block}>
                    <div className={styles.layer1}>
                        <p>ЛАТТЭ</p>
                    </div>
                    <div className={styles.layer2}>
                        <img className={styles.layer2_img} src={layer1}/>
                    </div>
                    <div className={styles.layer3}>

                        <img className={styles.latte} src={latte}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SliderCoffee;