import React, {useEffect} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from './main.module.css';
import Coffee from '../components/animations/coffee_beans/CoffeeBeans'
import Navbar from "../components/Navbar/Navbar";
import coffee_cup from "../images/file 1 (1).png";
import coffee_main from "../images/copy-space-coffee-beans.jpg";


import layer1 from "../images/l1.png"
import layer2 from "../images/l2.png"
import layer3 from "../images/l3.png"

const Main = () => {
    useEffect(() => {
        document.title = 'Main';
        document.getElementsByTagName("META")[3].content="Your description main page";
    }, []);
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <Navbar></Navbar>
                    <div className={styles.container_parallax}>
                        <img src={coffee_main}/>
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
                        <div className={styles.content_main}>
                            <div className={styles.citata}>
                                <p>"Кофе - это чудо, которое пробуждает ум и тело."</p>
                                <p> - Александр Дюма</p>
                            </div>
                            {/*<div className={styles.background_main}>*/}

                            {/*    <img src={coffee_cup} alt="cup coffee" className={styles.cup}></img>*/}
                            {/*</div>*/}
                        </div>


                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;