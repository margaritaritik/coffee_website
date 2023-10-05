import React from 'react';
import styles from "./main.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";

const PolzaIVred = () => {
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <Navbar></Navbar>
                    <div className={styles.content}>

                        {/*<Header></Header>*/}
                        <Coffee></Coffee>
                        {/*<Loader></Loader>*/}
                    </div>
                    <div>polza_i_vred</div>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default PolzaIVred;