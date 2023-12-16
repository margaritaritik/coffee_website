import React from 'react';
import styles from './frappe.module.css'
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/footer";
import cup from "./cup-frap.png";
import layer_cup from "../../../images/facts/f1.png";
const Frappe = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container_block}>
                    <Navbar></Navbar>
                    <div className={styles.coffee}>
                        <div className={styles.block_title}>
                            <h1>Фраппе</h1>
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

export default Frappe;