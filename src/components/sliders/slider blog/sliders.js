import styles from "./slider_blog.module.css";
import latte from "./images/view-of-3d-coffee-cup-with-roasted-beans.jpg";
import caputino from "./images/coffee1.jpg";
import glasse from "./images/view-of-3d-roasted-coffee-beans.jpg";
import frape from "./images/view-of-3d-roasted-coffee-beans.jpg";
import espresso from "./images/view-of-3d-roasted-coffee-beans.jpg";

const slider=[
    {
        id:1,
        name:"Латте",
        style_img:styles.latte,
        style_back:styles.layer_latte,
        image:latte,
        href:"latte"
    },
    {
        id:2,
        name:"Каппучино",
        style_img:styles.caputino,
        style_back:styles.layer_caputino,
        image:caputino,
        href:"kappuchino"
    },
    {
        id:3,
        name:"Гляссе",
        style_img:styles.glasse,
        style_back:styles.layer_glasse,
        image:glasse,
        href:"glyasse"
    },
    {
        id:4,
        name:"Фраппе",
        style_img:styles.frape,
        style_back:styles.layer_frape,
        image:frape,
        href:"frappe"
    },
    {
        id:5,
        name:"Эспрессо",
        style_img:styles.espresso,
        style_back:styles.layer_espresso,
        image:espresso,
        href:"espresso"
    }

];
export default slider;