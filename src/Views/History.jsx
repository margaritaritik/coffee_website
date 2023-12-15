import React, {useEffect} from 'react';
import styles from "./history.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";
import coffeeBack from "../images/history/cup.jpg";
// import history1 from "../images/history/h1.png";
import history1 from "../images/history/8i.jpg";



const History = () => {
    useEffect(() => {
        document.title = 'История кофе - Легенды и факты о популярном напитке☕';
        document.getElementsByTagName("META")[3].content="Мы собрали для вас самую актуальную информацию и поделимся секретами, как приготовить идеальный кофе в домашних условиях. На сайте \"Кофейный мир\" вы найдете все, что нужно знать о вашем любимом напитке!";
    }, []);
    return (
        <>

                <div className={styles.wrapper}>
                    <div className={styles.container_block}>
                        <div className={styles.history}>
                            <img className={styles.layer} src={coffeeBack}/>
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
                        <div className={styles.blok_history_1}>
                            <p>Кофе - это один из самых популярных напитков в мире, который любят миллионы людей по всему земному шару. Но как началась история кофе? В этой статье мы расскажем о происхождении кофе, его распространении по миру и о том, как кофе стал неотъемлемой частью нашей жизни.</p>
                        </div>
                        <div className={styles.blok_history_2}>
                            <h2>Происхождение кофе</h2>
                            <p>История кофе начинается в древней Эфиопии, где растет растение кофейного дерева. По легенде, пастух по имени Кальди обнаружил, что его козы стали более активными после того, как они съели ягоды кофейного дерева. Кальди решил попробовать эти ягоды сам и заметил, что они тоже повышают его энергию и бодрость. Так началась история кофе.</p>
                        </div>
                        <div className={styles.blok_history_3}>
                            <h2>Распространение кофе по миру</h2>
                            <p>Сначала кофе был известен только в Эфиопии, но со временем он стал популярным в Аравии. В 16 веке кофе был привезен в Европу, где он стал модным напитком среди аристократии. В 17 веке кофе был введен в Америку, где он также стал очень популярным. Сегодня кофе выращивается во многих странах мира, включая Колумбию, Бразилию, Коста-Рику, Индонезию и многие другие.</p>
                        </div>
                        <div className={styles.blok_history_4}>
                            <h2>Кофе в нашей жизни</h2>
                            <p>Сегодня кофе является неотъемлемой частью нашей жизни. Мы пьем кофе утром, чтобы проснуться и начать день, а также в течение дня, чтобы оставаться бодрыми и энергичными. Кофейные магазины и кафе стали популярными местами для встреч с друзьями и коллегами. Кофе также используется в кулинарии, например, для выпечки и приготовления соусов.</p>
                        </div>
                        <div className={styles.blok_history_5}>
                            <p>История кофе - это история о том, как один небольшой плод стал одним из самых популярных напитков в мире. Сегодня кофе является неотъемлемой частью нашей жизни и продолжает радовать нас своим вкусом и ароматом.</p>
                        </div>
                    </div>


                    <Footer></Footer>
                </div>


        </>
    );
};

export default History;