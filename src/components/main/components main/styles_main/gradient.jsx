import React from 'react';
import styles from './gradient.module.css'
import img_grad from "../../../../images/facts/f1.png"
import cup from '../../../../images/zerna/1z.png'
import coffee1 from "../../../../images/napitki/1n.png";
import coffee2 from "../../../../images/napitki/2n.png";
import coffee3 from "../../../../images/napitki/3n.png";
import coffee4 from "../../../../images/napitki/4n.png";

const Gradient = () => {
    return (
        <div className={styles.container}>

            <div className={styles.container_items}>
                <div className={styles.napitki}>
                    <div className={styles.block_img}>
                    </div>
                    <div className={styles.block_img}>

                    </div>
                    <div className={styles.block_img}>

                    </div>
                    <div className={styles.block_img}>

                    </div>






                </div>
            </div>
            <div className={styles.blur}></div>
        </div>
    );
};

export default Gradient;