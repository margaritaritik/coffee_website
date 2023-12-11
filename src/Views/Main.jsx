import React, {useEffect, useState} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from './main.module.css';
import Coffee from '../components/animations/coffee_beans/CoffeeBeans'
import Navbar from "../components/Navbar/Navbar";
import Facts from "../components/main/components main/facts/facts_block";
import Stages from "../components/main/components main/stages of preparation/stages_of_preparation"
import coffee_cup from "../images/file 1 (1).png";
import coffee_main from "../images/copy-space-coffee-beans.jpg";
import cup_coffee from '../images/1.png'
import table from '../images/2.png'
// import forest from '../images/layer-1.jpg'
import coffee_tree from '../images/facts/1-Ju1ZoEXsA-transformed.png'
import forest from '../images/summer-landscape-in-mountains-and-the-blue-sky.jpg'
import coffeeBack from "../images/coffeeBack'.jpg"
import layer1 from "../images/white-cloud (1).png"
import layer2 from "../images/forest-mountains-PhotoRoom.png"
import layer3 from "../images/1614556189_33-p-chashka-kofe-na-belom-fone-38 (1).png"
import back_coffee_tree from "../images/facts/f1.png"

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
                        <div className={styles.stages}>
                            <Stages/>
                        </div>
                        <div className={styles.facts}>
                            <h2 className={styles.title_facts}>ФАКТЫ О КОФЕ</h2>

                           <Facts/>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;