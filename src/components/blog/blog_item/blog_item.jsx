import React from 'react';
import styles from './blog_item.module.css'
import cup1 from '../../../images/slider/coffee/frape.png'

const BlogItem = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
                <div className={styles.container_item}>
                    <img src={cup1}/>
                    <div className={styles.title}>
                        <p>фрапе</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogItem;