import React from 'react';
import Slider from 'react-slick';
import latte from "../../../images/slider/coffee/latte.png";
import caputino from "../../../images/slider/coffee/caputino.png";
import glasse from "../../../images/slider/coffee/glasse.png";
import frape from "../../../images/slider/coffee/frape.png";
import espresso from "../../../images/slider/coffee/espresso.png";
import layer1 from '../../../images/facts/f1.png'
import styles from './carousel.module.css';

const products =[
    {
        id:1,
        name:"Латте",
        image:latte,
        href:"latte"
    },
    {
        id:2,
        name:"Каппучино",
        image:caputino,
        href:"kappuchino"
    },
    {
        id:3,
        name:"Гляссе",
        image:glasse,
        href:"glyasse"
    },
    {
        id:4,
        name:"Фраппе",
        image:frape,
        href:"frappe"
    },
    {
        id:5,
        name:"Эспрессо",
        image:espresso,
        href:"espresso"
    }

];

const ProductCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Показывать по одному товару
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 2024,
                settings: {
                    slidesToShow: 4, // Показывать 3 товара на больших экранах
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2, // Показывать 2 товара на средних экранах
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1, // Показывать 1 товар на маленьких экранах
                    slidesToScroll: 1,
                }
            }
        ]
    };

    

  function randomNumberInRange(min, max) {
    // 👇️ Get the number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

    return (
        <div className={styles.container_carousel}>
            <h2>Кофейные напитки</h2>
            <Slider {...settings}>
                {products.map(product => (
                    <div className={styles.coffee_items} key={product.id}>
                          <img className={styles.style_back_carousel} src={layer1} style={{filter:`hue-rotate(${randomNumberInRange(1,360)}deg)`,transform:`translate3d(0px, ${randomNumberInRange(-50,-20)}px, ${randomNumberInRange(-15,-8)}px) scale(0.8) rotate3d(${randomNumberInRange(-5,10)}, ${randomNumberInRange(4,10)}, ${randomNumberInRange(20,50)}, ${randomNumberInRange(1,360)}deg)`}}/>
                         
                       
                        <a style={{zIndex:10}} href={`/napitki/${product.href}`}>
                        
                        <img className={styles.img_coffee} src={product.image}  style={{ margin:'10px', width: '100%', height: 'auto', maxHeight:'200px',    maxWidth:'212px'}} />
                        <p>{product.name}</p>
                      
                        </a>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ProductCarousel;