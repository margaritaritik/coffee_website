import React, {useEffect, useState} from 'react';
import styles from "./slider_coffee.module.css";
import layer1 from '../../../images/facts/f1.png'
import latte from '../../../images/slider/coffee/latte.png'
import caputino from '../../../images/slider/coffee/caputino.png'
import espresso from '../../../images/slider/coffee/espresso.png'

const SliderCoffee = () => {
    const [slideId, setSlideId] = useState(1);

    // useEffect(() => {
    //    for(let i=1;i<slider.length;i++){
    //
    //    }
    // },[]);
    const slider=[
        {
            id:1,
            name:"ЛАТТЭ",
            style_img:styles.latte,
            style_back:styles.layer_latte,
            image:latte
        },
        {
            id:2,
            name:"Капучино",
            style_img:styles.caputino,
            style_back:styles.layer_caputino,
            image:caputino
        },
        {
            id:3,
            name:"ЭСПРЕССО",
            style_img:styles.espresso,
            style_back:styles.layer_espresso,
            image:espresso
        },
        {
            id:1,
            name:"ЛАТТЭ",
            style_img:styles.latte,
            style_back:styles.layer_latte,
            image:latte
        },
        {
            id:3,
            name:"ЭСПРЕССО",
            style_img:styles.espresso,
            style_back:styles.layer_espresso,
            image:espresso
        },
        {
            id:1,
            name:"ЛАТТЭ",
            style_img:styles.latte,
            style_back:styles.layer_latte,
            image:latte
        },
        {
            id:3,
            name:"ЭСПРЕССО",
            style_img:styles.espresso,
            style_back:styles.layer_espresso,
            image:espresso
        },
        {
            id:1,
            name:"ЛАТТЭ",
            style_img:styles.latte,
            style_back:styles.layer_latte,
            image:latte
        }

    ];

    // const listItems =slider.map(slide =>
    //     <div className={styles.block}>
    //         <div className={styles.layer1}>
    //             <p>{slide.name}</p>
    //         </div>
    //         <div className={styles.layer2}>
    //             <img className={slide.style_back} src={layer1}/>
    //         </div>
    //         <div className={styles.layer3}>
    //             <img className={slide.style_img} src={slide.image}/>
    //         </div>
    //     </div>
    // );
    const listItems =slider.map(slide =>
        <div className={styles.block}>
            <div className={styles.layer1}>
                <p>{slide.name}</p>
                {/*<div className={styles.layer2}>*/}
                <div className={styles.layer2}>
                    <img className={slide.style_back} src={layer1}/>
                    <img className={slide.style_img} src={slide.image}/>
                </div>

                {/*</div>*/}
            </div>

            {/*<div className={styles.layer3}>*/}
            {/*   */}
            {/*</div>*/}
        </div>
    );

    return (
        <div className={styles.container_slider}>
            <div className={styles.container}>
                {listItems}
                {/*<div className={styles.block}>*/}
                {/*    <div className={styles.layer1}>*/}
                {/*        <p>ЛАТТЭ</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer2}>*/}
                {/*        <img className={styles.layer2_img} src={layer1}/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer3}>*/}

                {/*        <img className={styles.latte} src={latte}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.block}>*/}
                {/*    <div className={styles.layer1}>*/}
                {/*        <p>КАПУЧИНО</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer2}>*/}
                {/*        <img className={styles.layer2_img} src={layer1}/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer3}>*/}
                {/*        <img className={styles.latte} src={caputino}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className={styles.block}>*/}
                {/*    <div className={styles.layer1}>*/}
                {/*        <p>ЛАТТЭ</p>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer2}>*/}
                {/*        <img className={styles.layer2_img} src={layer1}/>*/}
                {/*    </div>*/}
                {/*    <div className={styles.layer3}>*/}
                {/*        <img className={styles.latte} src={espresso}/>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default SliderCoffee;