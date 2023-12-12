import React from 'react';
import styles from "./history.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";
import coffeeBack from "../images/history/cup.jpg";
import history1 from "../images/history/h1.png";

const History = () => {
    return (
        <>

                <div className={styles.wrapper}>
                    <div className={styles.container_block}>
                        <div className={styles.history}>
                            <img className={styles.layer} src={coffeeBack}/>
                            {/*<div>HISTORY</div>*/}
                            {/*<div>COFFEE</div>*/}
                            <div className={styles.title_block}>
                                <p>история</p>
                            </div>
                            <div className={styles.title_block_coffee}>
                                <p>кофе</p>
                            </div>
                            <div className={styles.block}>
                                <img src={history1}/>
                            </div>

                        </div>
                        {/*<div id={styles.test}></div>*/}

                        <Navbar></Navbar>

                    </div>
                    <div className={styles.content}>
                        <h1>ИСТОРИЯ</h1>
                        <p>Кофе был открыт в древней Эфиопии, когда пастух по имени Кальди заметил, что его овцы стали более активными и энергичными после того, как они поели ягоды кофейного дерева. Кальди решил попробовать ягоды сам и заметил, что они имеют стимулирующий эффект на организм. С тех пор кофе стал популярным напитком среди жителей Эфиопии и распространился по всему миру.
                        </p>
                        <p>В 16 веке кофе был введен в Европу благодаря голландским и португальским торговцам. Вскоре кофейные дома и кофейни начали появляться в различных городах Европы, где кофе стал популярным напитком среди общества. В 17 веке кофе был введен в Америку, где он также стал популярным напитком.</p>
                        <p>В разных странах кофе имел различное значение. В Эфиопии и Судане кофейные зерна использовались в качестве валюты. В Турции кофе был частью культуры и обрядов. В Америке кофе стал символом прогресса и индустриализации.
                        </p>
                        <p>Сегодня кофе является одним из самых популярных напитков в мире, и его потребление составляет около 400 миллиардов чашек в год. Существует множество различных сортов кофе, каждый из которых имеет свой уникальный вкус и аромат. Кофейная культура продолжает развиваться, и новые методы обработки зерен и приготовления напитка появляются каждый день.</p>


                    </div>
                    <div>


                    </div>

                    <Footer></Footer>
                </div>


        </>
    );
};

export default History;