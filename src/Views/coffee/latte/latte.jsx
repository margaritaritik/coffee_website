import React from 'react';
import styles from './latte.module.css'
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/footer";
import cup from "../frappe/cup-frap.png";
import layer_cup from "../../../images/facts/f1.png";
import SliderCoffee from "../../../components/sliders/slider coffee/slider_coffee";

const Latte = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container_block}>
                    <Navbar></Navbar>
                    <div className={styles.coffee}>
                        <div className={styles.block_title}>
                            <h1>Латте</h1>
                            <p>Подпись для кофе</p>
                        </div>
                        <div className={styles.block_images}>
                            <img src={cup}/>
                            <img src={layer_cup}/>
                        </div>

                    </div>

                </div>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <SliderCoffee></SliderCoffee>
                    </div>


                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Latte;