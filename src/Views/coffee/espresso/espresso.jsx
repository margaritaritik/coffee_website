import React from 'react';
import styles from './espresso.module.css'
import coffeeBack from "../../../images/history/cup.jpg";
import history1 from "../../../images/history/8i.jpg";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/footer/footer";
import  cup from "./cup_espresso.png"
import  layer_cup from "../../../images/facts/f1.png"
import SliderCoffee from "../../../components/sliders/slider test/ProductCarousel";
import Menu from '../../../components/Navbar/Navbar'

const Espresso = () => {
    return (
        <>
            <div className={styles.wrapper}>
    
                <div className={styles.container_block}>
                <Navbar></Navbar>
                    {/*<Navbar></Navbar>*/}
                    <div className={styles.coffee}>
                        <div className={styles.coffee_title}>
                            <h1>ESPRESSO</h1>
                            <p>Lorem ipsum dolor sit amet, ceat possimus quam similique, sunt. Beatae commodi in quidem.</p>
                        </div>
                        <div className={styles.coffee_block_image}>
                            <img src={cup}/>
                        </div>
                        <div className={styles.coffee_description}>
                              <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur dignissimos dolor dolorem excepturi fuga non pariatur perspiciatis, totam. Aspernatur debitis distinctio iure modi nulla obcaecati possimus provident quos similique temporibus.
                            </p>
                        </div>
                    </div>


                </div>
                <div className={styles.content}>
                    <div className={styles.slider}>
                        <SliderCoffee></SliderCoffee>
                    </div>


                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Espresso;