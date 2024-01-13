import React, {useState} from 'react';
import style from './navbar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo from './logo.svg';
import styles from "../header/header.module.css";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.logo_image}>
                        <a href='/'><img src={Logo} className={style.logo} alt="логотип кофе" /></a>
                    </div>
                    <ul
                        className={
                            nav ? [style.menu, style.active].join(' ') : [style.menu]
                        }
                    >
                        <li>
                            <a href='/history'>ИСТОРИЯ</a>
                        </li>
                        <li>
                            <a href='/napitki'>НАПИТКИ</a>
                        </li>
                        <li>
                            <a href='/blog'>БЛОГ</a>
                        </li>
                        <li>
                            <a href='/zerna'>ЗЁРНА</a>
                        </li>
                        <li>
                            <a href='/statistika'>СТАТИСТИКА</a>
                        </li>
                    </ul>
                    <div onClick={() => setNav(!nav)} className={style.mobile_btn}>
                        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;