import React from 'react';
import styles from "./statistika.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";
import coffee_map from "../images/statistika/map.png"

const Statistika = () => {
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <div className={styles.container_block}>
                        <div className={styles.layer}>
                            <section className={styles.stage}>
                                <figure className={styles.ball}><span className={styles.shadow}></span></figure>
                            </section>
                            {/*<img src={coffee_map}/>*/}
                        </div>

                        <Navbar></Navbar>
                    </div>

                    <div className={styles.content}>
                        <h1>СТАТИСТИКА КОФЕ</h1>
                        {/*<Header></Header>*/}
                        {/*<Coffee></Coffee>*/}
                        {/*<Loader></Loader>*/}
                    </div>
                    <div>statistika</div>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Statistika;