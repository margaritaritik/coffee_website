import React, {useEffect} from 'react';
import styles from "./blog.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";


const Blog = () => {
    useEffect(() => {
        document.title = 'Кофейный уголок: все о кофе на одной странице☕';
        document.getElementsByTagName("META")[3].content="Узнайте больше о разнообразии кофейных напитков, которые можно приготовить из зерен кофе ☕ От крепкого эспрессо до нежного латте, мы расскажем о каждом напитке и его особенностях";
    }, []);
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.container_block}>
                    <div className={styles.coffee}>


                    </div>

                    <Navbar></Navbar>

                </div>
                <div className={styles.content}>


                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Blog;