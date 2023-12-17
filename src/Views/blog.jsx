import React from 'react';
import styles from "./blog.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/footer";

const Blog = () => {
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