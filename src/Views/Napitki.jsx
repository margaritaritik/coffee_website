import React from 'react';
import styles from "./main.module.css";
import Navbar from "../components/Navbar/Navbar";
import Coffee from "../components/animations/coffee_beans/CoffeeBeans";
import Footer from "../components/footer/footer";

const Napitki = () => {
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>
                    <Navbar></Navbar>
                    <div className={styles.content}>
                        <h1>НАПИТКИ КОФЕ</h1>
                        {/*<Header></Header>*/}

                        {/*<Loader></Loader>*/}
                    </div>
                    <div>
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
            </div>
        </>
    );
};

export default Napitki;