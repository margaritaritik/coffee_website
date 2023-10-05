import React, {useEffect} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from './main.module.css';
import Coffee from '../components/animations/coffee_beans/CoffeeBeans'
import Navbar from "../components/Navbar/Navbar";

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
                    <div className={styles.content}>

                        {/*<Loader></Loader>*/}
                        <div className={styles.citata}>
                            <p>"Кофе - это чудо, которое пробуждает ум и тело."</p>
                            <p> - Александр Дюма</p>
                        </div>
                        <div className={styles.block_main}>
                            <Coffee></Coffee>
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;