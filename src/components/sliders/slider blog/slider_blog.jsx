import React, {useEffect, useRef, useState} from 'react';

import layer1 from "../../../images/facts/f1.png";
import slider from './sliders'
import styles from './slider_blog.module.css'
const SliderBlog = () => {
    const ref = useRef(null);
    const ref_block = useRef(null);

    let currentSlide = 0;
    const slide_right=()=>{
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

    const listItems =slider.map(slide =>
        <div ref={ref}  className={styles.slide}>
            <div className={styles.block}>
                <div className={styles.layer1}>
                    <img src={slide.image} />
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