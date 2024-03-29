import React from 'react';
import styles from "./slider_two.module.css"
import latte from "../../../images/slider/coffee/latte.png";
import caputino from "../../../images/slider/coffee/caputino.png";
import glasse from "../../../images/slider/coffee/glasse.png";
import frape from "../../../images/slider/coffee/frape.png";
import espresso from "../../../images/slider/coffee/espresso.png";
import layer1 from "../../../images/facts/f1.png";
import $ from "jquery";

const SliderTwo = (props) => {
    $("button").on('click',function (){
        alert("test");
    });
    const slider=[
        {
            id:1,
            name:"Латте",
            style_img:styles.latte,
            style_back:styles.layer_latte,
            image:latte,
            href:"latte"
        },
        {
            id:2,
            name:"Каппучино",
            style_img:styles.caputino,
            style_back:styles.layer_caputino,
            image:caputino,
            href:"kappuchino"
        },
        {
            id:3,
            name:"Гляссе",
            style_img:styles.glasse,
            style_back:styles.layer_glasse,
            image:glasse,
            href:"glyasse"
        },
        {
            id:4,
            name:"Фраппе",
            style_img:styles.frape,
            style_back:styles.layer_frape,
            image:frape,
            href:"frappe"
        },
        {
            id:5,
            name:"Эспрессо",
            style_img:styles.espresso,
            style_back:styles.layer_espresso,
            image:espresso,
            href:"espresso"
        }

    ];
    const listItems =slider.map(slide =>
        <div className={styles.block}>
            <div className={styles.layer1}>
                <p>{slide.name}</p>
                <div className={styles.layer2}>
                    <a href={`/napitki/${slide.href}`}>
                        <img className={slide.style_back} src={layer1}/>
                        <img className={slide.style_img} src={slide.image}/>
                    </a>

                </div>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.container_slider}>
                <div className={styles.container}>
                    {listItems}
                </div>
                <button>Click</button>
            </div>
        </>
    );
};

export default SliderTwo;