import React from 'react';
import styles from './gradient.module.css'

const Gradient = () => {
    function randomNumberInRange() {
        return `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}%`;
    }
    function randomNumberInRangeY() {
        return `${Math.floor(Math.random() * (100 - 0 + 1)) + 0}vh`;
    }
    return (
        <div className={styles.container}>

            <div className={styles.container_items}>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
                <span style = {{left:randomNumberInRange(),top:randomNumberInRangeY()}}></span>
            </div>
            <div className={styles.blur}></div>
        </div>
    );
};

export default Gradient;