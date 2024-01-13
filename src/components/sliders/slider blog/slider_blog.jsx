import React from 'react';
import styles from './slider_blog.module.css'
import {useEffect, useRef, useState} from "react";
import latte from "../../../images/slider/coffee/latte.png";
import caputino from "../../../images/slider/coffee/caputino.png";
import glasse from "../../../images/slider/coffee/glasse.png";
import frape from "../../../images/slider/coffee/frape.png";
import espresso from "../../../images/slider/coffee/espresso.png";
import layer1 from "../../../images/facts/f1.png";

const SliderBlog = () => {
    const ref = useRef(null);
    const ref_block = useRef(null);

    let currentSlide = 0;
    const slide_right=()=>{
        console.log(`> ${ref_block.current.children.length - 1}`);
        if (currentSlide < ref_block.current.children.length - 1) {
            goToSlide(currentSlide + 1);
        }
    }
    const slide_left=()=>{
        if (currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    }
    useEffect(() => {
        window.addEventListener('resize',()=>{
            goToSlide(currentSlide);
        })
    }, []);

    function goToSlide(n) {
        console.log(`width ${ref_block.current.offsetWidth}`);
        ref_block.current.style.transform = `translateX(-${n * ref.current.offsetWidth}px)`;
        currentSlide = n;
        console.log(`gotoSlide ${n}`);
    }

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
        <div ref={ref}  className={styles.slide}>
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
        </div>
    );
    return (
        <>
            <div className={styles.container_slider}>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <div  ref={ref_block} className={styles.slides}>


                            {listItems}
                        </div>

                    </div>
                    <div className={styles.prev} onClick={slide_left}></div>
                    <div className={styles.next} onClick={slide_right}></div>

                </div>
            </div>
        </>
    );
};

export default SliderBlog;