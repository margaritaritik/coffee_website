import React, {useEffect, useRef, useState} from 'react';
import styles from "./slider_coffee.module.css";
import layer1 from '../../../images/facts/f1.png'
import latte from '../../../images/slider/coffee/latte.png'
import caputino from '../../../images/slider/coffee/caputino.png'
import espresso from '../../../images/slider/coffee/espresso.png'
import glasse from '../../../images/slider/coffee/glasse.png'
import frape from '../../../images/slider/coffee/frape.png'
import $ from 'jquery';

import {click} from "@testing-library/user-event/dist/click";

const SliderCoffee = () => {
    const [slidesId, setSlidesId] = useState({id1:1,id2:2,id3:3});
  const [arrSlider,setArrSlider]=useState([1,2,3,4,5]);
    const ref = useRef(null);
    const ref_block = useRef(null);
    // $(window).load(function() {
    //     $('.flexslider').flexslider({
    //         animation: "slide"
    //     });
    // });
    // const slider=[
    //     {
    //         id:1,
    //         name:"Латте",
    //         style_img:styles.latte,
    //         style_back:styles.layer_latte,
    //         image:latte,
    //         href:"latte"
    //     },
    //     {
    //         id:2,
    //         name:"Каппучино",
    //         style_img:styles.caputino,
    //         style_back:styles.layer_caputino,
    //         image:caputino,
    //         href:"kappuchino"
    //     },
    //     {
    //         id:3,
    //         name:"Гляссе",
    //         style_img:styles.glasse,
    //         style_back:styles.layer_glasse,
    //         image:glasse,
    //         href:"glyasse"
    //     },
    //     {
    //         id:4,
    //         name:"Фраппе",
    //         style_img:styles.frape,
    //         style_back:styles.layer_frape,
    //         image:frape,
    //         href:"frappe"
    //     },
    //     {
    //         id:5,
    //         name:"Эспрессо",
    //         style_img:styles.espresso,
    //         style_back:styles.layer_espresso,
    //         image:espresso,
    //         href:"espresso"
    //     }
    //
    // ];

    // const listItems =slider.map(slide =>
    //     <div className={styles.block}>
    //         <div className={styles.layer1}>
    //             <p>{slide.name}</p>
    //             <div className={styles.layer2}>
    //                 <a href={`/napitki/${slide.href}`}>
    //                     <img className={slide.style_back} src={layer1}/>
    //                     <img className={slide.style_img} src={slide.image}/>
    //                 </a>
    //
    //             </div>
    //         </div>
    //     </div>
    // );
    let currentSlide = 0;
    const slide_right=()=>{
       // const width_item=`translateX(${'width', ref.current ? ref.current.offsetWidth : 0}px)`;
       //  console.log(width_item);
       //  // ref_block.current.style.background="red";
       //  ref_block.current.style.transform=width_item;
        // ref_block.current.style.transform=`translateX(${'width', ref.current ? ref.current.offsetWidth : 0})`;
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
        <div className={styles.container}>
            <div className={styles.slider}>
                <div  ref={ref_block} className={styles.slides}>


                    {listItems}
                </div>
                <div className={styles.prev} onClick={slide_left}></div>
                <div className={styles.next} onClick={slide_right}></div>
            </div>

            {/*<div className={styles.itc_slider} data-autoplay="true" data-interval="7000" data-loop="true"*/}
            {/*     data-slider={styles.itc_slider}>*/}
            {/*    <div ref={ref_block} className={styles.itc_slider__wrapper}>*/}
            {/*        <div className={styles.itc_slider__items}>*/}
            {/*            <div ref={ref} className={styles.itc_slider__item}>*/}
            {/*                1*/}
            {/*            </div>*/}
            {/*            <div className={styles.itc_slider__item}>*/}

            {/*                2*/}
            {/*            </div>*/}
            {/*            <div className={styles.itc_slider__item}>*/}

            {/*                3*/}
            {/*            </div>*/}
            {/*            <div className={styles.itc_slider__item}>*/}

            {/*                4*/}
            {/*            </div>*/}
            {/*            <div className={styles.itc_slider__item}>*/}

            {/*                5*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <button className={styles.itc_slider__btn && styles.itc_slider__btn_prev}></button>*/}
            {/*    <button className={styles.itc_slider__btn && styles.itc_slider__btn_next}></button>*/}
            {/*    <ol className={styles.itc_slider__indicators}>*/}
            {/*        <li className={styles.itc_slider__indicator} data-slide-to="0"></li>*/}
            {/*        <li className={styles.itc_slider__indicator} data-slide-to="1"></li>*/}
            {/*        <li className={styles.itc_slider__indicator} data-slide-to="2"></li>*/}
            {/*        <li className={styles.itc_slider__indicator} data-slide-to="3"></li>*/}
            {/*        <li className={styles.itc_slider__indicator} data-slide-to="4"></li>*/}
            {/*    </ol>*/}
            {/*</div>*/}
            {/*<button onClick={slide_right}>1</button>*/}
            {/*<button onClick={slide_left}>2</button>*/}

        </div>
    );
};

export default SliderCoffee;