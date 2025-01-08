import React from 'react';
import styles from './article.module.css'
import coffeeBack from "../../images/history/cup.jpg";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/footer";
import SliderCoffee from "../../components/sliders/slider test/ProductCarousel";
import Menu from '../../components/Navbar/Navbar'

const Article = ({props}) => {
    return (
        <>
            <div className={styles.wrapper}>
    
                <div className={styles.container_block}>
                <Navbar></Navbar>
        
                    <div className={styles.coffee}>
                        <div className={styles.coffee_title}>
                            <h1>{props.name}</h1>
                            <p>{props.anons}</p>
                        </div>
                        <div className={styles.coffee_block_image}>
                            <img src={props.image}/>
                        </div>
                        <div className={styles.coffee_description}>
                              <p>
                                {props.description}
                            </p>
                        </div>
                    </div>


                </div>
                <div className={styles.content}>
                    <div>{props.content}</div>
                    <div className={styles.slider}>
                        <SliderCoffee></SliderCoffee>
                    </div>


                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Article;