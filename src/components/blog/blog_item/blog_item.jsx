import React from 'react';
import styles from './blog_item.module.css'
import cup1 from '../../../images/slider/coffee/frape.png'
import data_blog from "./items_blog";

const BlogItem = () => {
    const listItems =data_blog.map(item =>
        <div className={styles.container_item}>
            <a href={item.href}>
                <img className={styles.image_blog} src={item.image}/>
            </a>
            <div className={styles.title}>
                <p>{item.name}</p>
            </div>
        </div>
    );
    return (
        <>
            <div className={styles.container}>
                {listItems}
            </div>
        </>
    );
};

export default BlogItem;