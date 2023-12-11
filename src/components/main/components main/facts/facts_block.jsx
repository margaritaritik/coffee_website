import React from 'react';
import styles from "./styles_facts.module.css"
import coffee_tree from "../../../../images/facts/1-Ju1ZoEXsA-transformed.png";
import coffee_zerna from "../../../../images/facts/2.png";
import coffee_3 from "../../../../images/facts/4.png";
import coffee_4 from "../../../../images/facts/3.png";
import back_coffee_tree from "../../../../images/facts/f1.png";

const FactsBlock = () => {
    return (
        <>
            <div className={styles.container_facts}>
                <div className={styles.fact_one}>
                    <p>Кофе был открыт в Эфиопии, когда пастух заметил, что его овцы стали более энергичными после того, как они поели ягоды кофейного дерева.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофе содержит более 1000 химических соединений, включая кофеин, который является наркотиком.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофеин в кофе может увеличить ваше сердцебиение и давление крови, а также повысить уровень адреналина в крови.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофе является одним из самых популярных напитков в мире, и его потребление составляет около 400 миллиардов чашек в год.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Некоторые люди могут испытывать аллергическую реакцию на кофе, которая проявляется в виде сыпи, зуда и даже анафилактического шока.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофейные зерна могут быть обжарены различными способами, что дает им разный вкус и аромат.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофейные зерна были использованы в качестве валюты в некоторых странах, таких как Эфиопия и Судан.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофе может помочь в борьбе с депрессией и улучшить настроение благодаря содержанию в нем антиоксидантов.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Кофе может быть использован не только для приготовления напитка, но и для приготовления различных блюд и десертов.</p>
                </div>
                <div className={styles.fact_one}>
                    <p>Существует множество различных сортов кофе, каждый из которых имеет свой уникальный вкус и аромат.</p>
                </div>
            </div>
        </>
    );
};

export default FactsBlock;