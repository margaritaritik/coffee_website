import React, {useEffect} from 'react';
import styles from "./blog.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";
import Slider_blog from "../components/sliders/slider blog/slider_blog.jsx";
import Blog_item from "../components/blog/blog_item/blog_item";


const Blog = () => {
    useEffect(() => {
        document.title = 'Кофейный уголок: все о кофе на одной странице☕';
        document.getElementsByTagName("META")[3].content="Узнайте больше о разнообразии кофейных напитков, которые можно приготовить из зерен кофе ☕ От крепкого эспрессо до нежного латте, мы расскажем о каждом напитке и его особенностях";
    }, []);
    return (
        <>
            <div className={styles.wrapper}>
                <Navbar></Navbar>
                <div className={styles.container_block}>
                    <div className={styles.coffee}>
                        <Slider_blog></Slider_blog>

                    </div>



                </div>
                <div className={styles.content}>
                    <Blog_item></Blog_item>

                    <Footer></Footer>
                </div>
            </div>
        </>
    );
};

export default Blog;