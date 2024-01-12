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
                        <p>Кофе – это один из самых популярных напитков в мире. Он дает бодрость, повышает настроение и помогает начать день с хорошим настроением. Но кофе не только приятен вкусом, но и имеет множество видов, которые отличаются по вкусу, составу и способу приготовления. В этой статье мы рассмотрим самые популярные виды кофейных напитков и их особенности.
                        </p>
                        <div>

                            <div>
                                <h2>Эспрессо</h2>
                                <p>Эспрессо – это классический кофейный напиток, который готовится на основе сильной концентрации кофе. Для его приготовления используется специальная кофемашина, которая под давлением выдавливает горячую воду через молотый кофе. Эспрессо имеет крепкий вкус и аромат, но при этом содержит меньше кофеина, чем обычный чашечный кофе.
                                </p>
                            </div>


                            <div>
                                <h2>
                                    Латте
                                </h2>
                                <p>Латте – это очень популярный кофейный напиток, который готовится на основе эспрессо и молока. Для его приготовления нужно сначала приготовить эспрессо, а затем добавить в него подогретое молоко. Латте имеет мягкий вкус и аромат, а также нежную пенку на поверхности.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Капучино

                                </h2>
                                <p>
                                    Капучино – это еще один популярный кофейный напиток, который готовится на основе эспрессо, молока и пены. Для его приготовления нужно сначала приготовить эспрессо, затем добавить в него подогретое молоко и пену. Капучино имеет более крепкий вкус, чем латте, но при этом он более нежный и мягкий.

                                </p>
                            </div>
                            <div>
                                <h2>
                                    Американо

                                </h2>
                                <p>
                                    Американо – это кофейный напиток, который готовится на основе эспрессо и горячей воды. Для его приготовления нужно сначала приготовить эспрессо, а затем добавить к нему горячую воду. Американо имеет более слабый вкус, чем эспрессо, но при этом он более насыщенный и ароматный.

                                </p>
                            </div>
                            <div>
                                <h2>
                                    Мокко
                                </h2>
                                <p>Мокко – это кофейный напиток, который готовится на основе эспрессо и горячего шоколада. Для его приготовления нужно сначала приготовить эспрессо, а затем добавить к нему горячий шоколад. Мокко имеет сладкий вкус и аромат, а также более насыщенный цвет.
                                </p>
                            </div>
                            <div>
                                <h2>
                                    Флэт Уайт
                                </h2>
                                <p>Флэт Уайт – это кофейный напиток, который готовится на основе эспрессо и молока. Для его приготовления нужно сначала приготовить эспрессо, а затем добавить к нему подогретое молоко без пены. Флэт Уайт имеет более крепкий вкус, чем латте, но при этом он более нежный и мягкий.
                                </p>
                            </div>
                            <div>
                                <h2>Раф</h2>
                                <p>Раф – это кофейный напиток, который готовится на основе эспрессо, молока и сиропа. Для его приготовления нужно сначала приготовить эспрессо, затем добавить в него подогретое молоко и сироп по вкусу. Раф имеет сладкий вкус и аромат, а также нежную пенку на поверхности.
                                </p>
                            </div>
                           <p>В заключении можно сказать, что кофе – это не только напиток, который дает бодрость и настроение, но и множество различных видов, которые отличаются по вкусу, составу и способу приготовления. Каждый из них имеет свои особенности и уникальный вкус, который может удовлетворить любого любителя кофе.
                           </p>
                        </div>


                    </div>

                    <Footer></Footer>
                </div>

        </>
    );
};

export default Napitki;