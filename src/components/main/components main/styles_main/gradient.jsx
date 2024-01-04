import React from 'react';
import styles from './gradient.module.css'
import img_grad from "../../../../images/facts/f1.png"
import cup from '../../../../images/zerna/1z.png'

const Gradient = () => {
    return (
        <div className={styles.container}>

            <div className={styles.container_items}>
                <img src={img_grad}/>
                <img src={cup}/>
            </div>
            <div className={styles.blur}></div>
        </div>
    );
};

export default Gradient;