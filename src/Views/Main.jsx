import React, {useEffect} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from './main.module.css';
import Coffee from '../components/animations/coffee_beans/CoffeeBeans'
import Navbar from "../components/Navbar/Navbar";
import coffee_cup from "../images/file 1 (1).png";
import coffee_main from "../images/copy-space-coffee-beans.jpg";
import cup_coffee from '../images/1.png'
import table from '../images/2.png'
// import forest from '../images/layer-1.jpg'
import forest from '../images/summer-landscape-in-mountains-and-the-blue-sky.jpg'
import coffeeBack from "../images/coffeeBack'.jpg"
import layer1 from "../images/white-cloud (1).png"
import layer2 from "../images/forest-mountains-PhotoRoom.png"
import layer3 from "../images/1614556189_33-p-chashka-kofe-na-belom-fone-38 (1).png"

const Main = () => {
    useEffect(() => {
        document.title = 'Main';
        document.getElementsByTagName("META")[3].content="Your description main page";
    }, []);
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>

                    <div className={styles.container_parallax}>
                        <img className={styles.layer1} src={coffeeBack}/>
                        {/*<img  className={styles.layer1} src={forest}/>*/}
                        {/*<img  className={styles.layer1} src={layer1}/>*/}
                        {/*<img  className={styles.layer4} src={layer2}/>*/}
                        {/*<img  className={styles.layer23}  src={layer3}></img>*/}
                        {/*<img  className={styles.layer2}  src={cup_coffee}></img>*/}
                        {/*<div className={styles.shadow}></div>*/}
                        {/*<img className={styles.layer3} src={table}></img>*/}
                        <Navbar></Navbar>
                        <div className={styles.citata}>
                            <p>"Кофе - это чудо, которое пробуждает ум и тело."</p>
                            <p> - Александр Дюма</p>
                        </div>
                        {/*<img className={styles.layer1} src={cup_coffee}/>*/}
                        {/*<img className={styles.layer2} src={table}/>*/}

                    </div>
                    <div className={styles.content}>

                        {/*<Loader></Loader>*/}

                        {/*<div className={styles.cup_of_coffee}>*/}
                        {/*    <div className={styles.cup_layer1}>*/}
                        {/*        <img src={layer1}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.cup_layer2}>*/}
                        {/*        <img src={layer2}/>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.cup_layer3}>*/}
                        {/*        <img src={layer3}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className={styles.content_main}>*/}


                            {/*<div className={styles.background_main}>*/}

                            {/*    <img src={coffee_cup} alt="cup coffee" className={styles.cup}></img>*/}
                            {/*</div>*/}
                        {/*</div>*/}

                        <div className={styles.facts}>
                            <h2>ФАКТЫ О КОФЕ</h2>
                            <ol>
                                <li>
                                    Кофе был открыт в Эфиопии, когда пастух заметил, что его овцы стали более энергичными после того, как они поели ягоды кофейного дерева.
                                </li>
                                <li>Кофе содержит более 1000 химических соединений, включая кофеин, который является наркотиком.
                                </li>
                                <li>Кофеин в кофе может увеличить ваше сердцебиение и давление крови, а также повысить уровень адреналина в крови.
                                </li>
                                <li>Кофе является одним из самых популярных напитков в мире, и его потребление составляет около 400 миллиардов чашек в год.</li>
                                <li>Некоторые люди могут испытывать аллергическую реакцию на кофе, которая проявляется в виде сыпи, зуда и даже анафилактического шока.</li>
                                <li>Кофейные зерна могут быть обжарены различными способами, что дает им разный вкус и аромат.
                                </li>
                                <li>Кофейные зерна были использованы в качестве валюты в некоторых странах, таких как Эфиопия и Судан.
                                </li>
                                <li>Кофе может помочь в борьбе с депрессией и улучшить настроение благодаря содержанию в нем антиоксидантов.</li>
                                <li>Кофе может быть использован не только для приготовления напитка, но и для приготовления различных блюд и десертов.
                                </li>
                                <li>Существует множество различных сортов кофе, каждый из которых имеет свой уникальный вкус и аромат.
                                </li>
                            </ol>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;