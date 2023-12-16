import React from 'react';
import styles from './espresso.module.css'
import coffeeBack from "../../../images/history/cup.jpg";
import history1 from "../../../images/history/8i.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/footer";
import  cup from "./cup_espresso.png"
import  layer_cup from "../../../images/facts/f1.png"

const Espresso = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container_block}>
                    <Navbar></Navbar>
                    <div className={styles.coffee}>

                        <div className={styles.block_title}>
                            <h1>Еспрессо</h1>
                            <p>Подпись для кофе</p>
                        </div>
                        <div className={styles.block_images}>
                            <img src={cup}/>
                            <img src={layer_cup}/>
                        </div>

                    </div>


                </div>
                <div className={styles.content}>


                <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Espresso;