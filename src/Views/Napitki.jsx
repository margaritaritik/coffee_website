import React from 'react';
import styles from "./napitki.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";
import coffee1 from "../images/napitki/1n.png";
import coffee2 from "../images/napitki/2n.png";
import coffee3 from "../images/napitki/3n.png";
import coffee4 from "../images/napitki/4n.png";



const Napitki = () => {
    return (
        <>

                <div className={styles.wrapper}>
                    <div className={styles.container_block}>
                        <Navbar></Navbar>
                        <div className={styles.napitki}>
                            <div className={styles.block_img}>
                                <img className={styles.layer} src={coffee1}/>
                            </div>
                            <div className={styles.block_img}>
                                <img className={styles.layer} src={coffee2}/>
                            </div>
                            <div className={styles.block_img}>
                                <img className={styles.layer} src={coffee3}/>
                            </div>
                            <div className={styles.block_img}>
                                <img className={styles.layer} src={coffee4}/>
                            </div>






                        </div>
                        {/*<div id={styles.test}></div>*/}



                    </div>

                    <div className={styles.content}>
                        <h1>НАПИТКИ ИЗ ЗЕРЕН КОФЕ</h1>
                        {/*<Header></Header>*/}

                        {/*<Loader></Loader>*/}

                        <h2>Виды напитков кофе:</h2>
                       <p>Кофе может быть приготовлен в различных формах, включая:</p>

                     <ul>
                         <li>Эспрессо - маленький, концентрированный напиток, приготовленный из молотого кофе.</li>
                         <li>Американо - напиток, полученный путем добавления горячей воды к эспрессо</li>
                         <li>Латте - напиток на основе эспрессо с добавлением молока и пены</li>
                         <li>Капучино - напиток на основе эспрессо с добавлением молока и пены</li>
                         <li>Мокко - напиток, приготовленный из горячего шоколада и эспрессо</li>
                         <li>Фраппе - холодный напиток на основе эспрессо с добавлением льда и сиропа</li>
                         <li>Айс-кофе - холодный напиток на основе кофе с добавлением льда и молока</li>
                         <li>Турецкий кофе - традиционный напиток, приготовленный в специальной турке</li>

                     </ul>

                       <p>Все эти виды кофе имеют свои уникальные характеристики и вкусовые качества, что делает кофейную культуру еще более интересной и разнообразной.
                       </p>


                    </div>

                    <Footer></Footer>
                </div>

        </>
    );
};

export default Napitki;