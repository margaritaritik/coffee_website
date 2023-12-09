import React, {useEffect, useState} from 'react';
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
    const [mousePos, setMousePos] = useState({});
    const [positionX, setPositionX] = useState(0);
    const [positionY, setPositionY] = useState(0);
    const [styleParallax, setStyleParallax] = useState({});
    const speed=0.05;
    const forBackPos=5;

    useEffect(() => {
        // const setMouseParallaxStyle=()=>{
            setPositionX(mousePos.x/100);
            setPositionY(mousePos.y/100);
            setStyleParallax({transform:`translate3d(${positionX/forBackPos}%,${positionY/forBackPos}%,-1000px) scale(2) rotate(90deg)`});
            // console.log(`translate(${positionX/forBackPos}%,${positionY/forBackPos}%)`);
        // }
    }, [mousePos]);

    useEffect(() => {
        document.title = 'Main';
        document.getElementsByTagName("META")[3].content="Your description main page";
        const handleMouseMove = (event) => {
            setMousePos({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleMouseMove
            );
        };

    }, []);

    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>

                    <div className={styles.container_parallax}>
                        <img style={styleParallax} className={styles.layer1} src={coffeeBack}/>
                        <Navbar></Navbar>
                        <div className={styles.citata}>
                            <p>"Кофе - это чудо, которое пробуждает ум и тело."</p>
                            <p> - Александр Дюма</p>
                        </div>
                    </div>
                    <div className={styles.content}>

                        {/*<Loader></Loader>*/}

                        <div className={styles.facts}>
                            <h2 className={styles.title_facts}>ФАКТЫ О КОФЕ</h2>
                            <div className={styles.container_facts}>
                                <div>
                                    <p>Кофе был открыт в Эфиопии, когда пастух заметил, что его овцы стали более энергичными после того, как они поели ягоды кофейного дерева.</p>
                                </div>
                                <div>
                                    <p>Кофе содержит более 1000 химических соединений, включая кофеин, который является наркотиком.</p>
                                </div>
                                <div>
                                    <p>Кофеин в кофе может увеличить ваше сердцебиение и давление крови, а также повысить уровень адреналина в крови.</p>
                                </div>
                                <div>
                                    <p>Кофе является одним из самых популярных напитков в мире, и его потребление составляет около 400 миллиардов чашек в год.</p>
                                    </div>
                                <div>
                                    <p>Некоторые люди могут испытывать аллергическую реакцию на кофе, которая проявляется в виде сыпи, зуда и даже анафилактического шока.</p>
                                </div>
                                <div>
                                    <p>Кофейные зерна могут быть обжарены различными способами, что дает им разный вкус и аромат.</p>
                                </div>
                                <div>
                                    <p>Кофейные зерна были использованы в качестве валюты в некоторых странах, таких как Эфиопия и Судан.</p>
                                </div>
                                <div>
                                    <p>Кофе может помочь в борьбе с депрессией и улучшить настроение благодаря содержанию в нем антиоксидантов.</p>
                                    </div>
                                <div>
                                    <p>Кофе может быть использован не только для приготовления напитка, но и для приготовления различных блюд и десертов.</p>
                                </div>
                                <div>
                                    <p>Существует множество различных сортов кофе, каждый из которых имеет свой уникальный вкус и аромат.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;