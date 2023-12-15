import React from 'react';
import styles from './espresso.module.css'
import coffeeBack from "../../../images/history/cup.jpg";
import history1 from "../../../images/history/8i.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/footer";

const Espresso = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container_block}>
                    <div className={styles.coffee}>


                    </div>

                    <Navbar></Navbar>

                </div>
                <div className={styles.content}>


                <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Espresso;