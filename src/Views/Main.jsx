import React, {useEffect} from 'react';
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import styles from './main.module.css';
import Coffee from '../components/animations/coffee_beans/CoffeeBeans'
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
    useEffect(() => {
        document.title = 'Main';
        document.getElementsByTagName("META")[3].content="Your description main page";
    }, []);
    return (
        <>
            <div className={styles.App}>
                <div className={styles.wrapper}>

                    <div className={styles.content}>
                        <Navbar></Navbar>
                        {/*<Header></Header>*/}
                        <Coffee></Coffee>
                        {/*<Loader></Loader>*/}
                        <div>Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                            Помнится мне, в тот момент, когда я стал переходить с таблиц на верстку дивами, одной из трудностей, с которыми я столкнулся, была следующая — как прижать подвал сайта (footer) в самый низ окна браузера, чтобы страница при этом выглядела вытянутой на всю высоту, вне зависимости от объема текста, а при высоте страницы, большей, чем высота окна браузера (при появлении скролла), футер оставался бы на положенном ему месте.

                            Если с помощью таблиц сия задача решается лишь за счет указания высоты для таблицы и/или вложенной в нее ячейки, то при использовании CSS в блочной верстке применяется совсем иной подход.

                            В процессе практики я выделил для себя 5 способов прижимания футера к низу окна браузера с помощью CSS.

                            HTML-код всех представленных способов имеет следующую структуру (отличие лишь в CSS-коде):
                        </div>
                    </div>

                    <Footer></Footer>
                </div>
            </div>

        </>
    );
};

export default Main;