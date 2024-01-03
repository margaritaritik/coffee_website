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
import SliderCoffee from "../components/sliders/slider coffee/slider_coffee";
import Gradient from "../components/main/components main/styles_main/gradient";

const Main = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    const handleUpButton = () => {
        window.scrollTo(0, 100);
    };



    useEffect(() => {
        document.title = 'Кофейный мир: новости, рецепты, история и культура кофе☕';
        document.getElementsByTagName("META")[3].content="Мы собрали для вас самую актуальную информацию и поделимся секретами, как приготовить идеальный кофе в домашних условиях. На сайте \"Кофейный мир\" вы найдете все, что нужно знать о вашем любимом напитке!";
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <Navbar></Navbar>
                    <Gradient></Gradient>
                        <div className={styles.citata}>
                            <p>"Кофе - это чудо, которое пробуждает ум и тело."</p>
                            <p> - Александр Дюма</p>
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
                        <div className={styles.slider}>
                            <SliderCoffee></SliderCoffee>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;