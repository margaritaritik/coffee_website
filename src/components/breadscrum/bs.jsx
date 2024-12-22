import React from 'react';
import styles from "./bss.module.css"

const bs = () => {
    return (
        <>
            <div className={styles.container}>
            <nav className={styles.breadcrumb}>
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Категория</a></li>
            <li><span className={styles.dots}>...</span></li>
            <li><a href="#" class="active">Текущая страница</a></li>
        </ul>
    </nav>

    <div className={styles.full_breadcrumbs}>
        <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">Категория</a></li>
            <li><a href="#">Подкатегория</a></li>
            <li><a href="#">Еще одна подкатегория</a></li>
            <li><a href="#" className={styles.active}>Текущая страница</a></li>
        </ul>
    </div>
            </div>
        </>
    );
};

export default bs;