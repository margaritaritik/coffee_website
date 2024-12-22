import React from 'react';
import styles from "./stages.module.css"
import coffee_tree from "../../../../images/facts/1-Ju1ZoEXsA-transformed.png";
import back_coffee_tree from "../../../../images/facts/f1.png";
import coffee_zerna from "../../../../images/facts/2.png";
import coffee_3 from "../../../../images/facts/4.png";
import coffee_4 from "../../../../images/facts/3.png";
import coffee_5 from "../../../../images/facts/5.png";

const StagesOfPreparation = () => {
    return (
        <>
            <div className={styles.container_facts}>
                <h2>Этапы приготовления кофе</h2>
                <div className={styles.fact_one}>
                    <div className={styles.fact_one_img}>
                        <img className={styles.fact_tree}  src={coffee_tree}/>
                        <img className={styles.fact_back} src={back_coffee_tree}/>
                    </div>
                    <div>
                        <h3>Поиск качественных зерен кофе</h3>
                        <p>Ищите магазины, специализирующиеся на продаже кофе. Такие магазины часто имеют большой выбор зерен разных сортов и регионов производства.</p>
                        <p>Обращайтесь к поставщикам кофе, которые имеют хорошую репутацию и работают непосредственно с производителями.</p>
                    </div>

                </div>
                <div className={styles.fact_one}>
                    <div className={styles.fact_one_img }>
                        <img className={styles.fact_tree}  src={coffee_zerna}/>
                        <img className={styles.fact_two} src={back_coffee_tree}/>
                    </div>
                    <div>
                        <h3>Подготовка зерен кофе к помолу</h3>
                        <p>Проверьте дату обжарки зерен - чем свежее зерна, тем лучше вкус кофе.</p>
                        <p>Храните зерна кофе в герметичной упаковке в прохладном и сухом месте, чтобы сохранить свежесть и аромат.</p>
                    </div>
                </div>
                <div className={styles.fact_one}>
                    <div className={styles.fact_one_img}>
                        <img className={styles.fact_tree}  src={coffee_3}/>
                        <img className={styles.fact_three} src={back_coffee_tree}/>
                    </div>
                    <div>
                        <h3>Измельчение зерен кофе в кофемолке</h3>
                        <p>Лучше всего измельчать зерна кофе перед приготовлением напитка.</p>
                        <p>Cледует избегать пережаренных зерен, так как они могут повредить оборудование для помола и негативно сказаться на вкусе кофе.</p>
                    </div>

                </div>
                <div className={styles.fact_one}>
                    <div className={styles.fact_one_img}>
                        <img className={styles.fact_tree}  src={coffee_4}/>
                        <img className={styles.fact_four} src={back_coffee_tree}/>
                    </div>
                    <div>
                        <h3>Заливка помолотого кофе в фильтр</h3>
                        <p>Нагревайте воду до 90-95°C.</p>
                        <p>Заливайте горячей водой через фильтр с помолотым кофе.</p>
                        <p>Ожидайте, пока кофе процедится через фильтр и стечет.</p>
                    </div>
                </div>
                <div className={styles.fact_one}>
                    <div className={styles.fact_one_img}>
                        <img className={styles.fact_tree}  src={coffee_5}/>
                        <img className={styles.fact_five} src={back_coffee_tree}/>
                    </div>
                    <div>
                        <h3>Подача кофе в чашку или кружку</h3>
                        <p>Добавтье молоко, сахара или других ингредиентов по желанию</p>
                        <p>Наслаждайтесь ароматным и вкусным напитком!</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default StagesOfPreparation;