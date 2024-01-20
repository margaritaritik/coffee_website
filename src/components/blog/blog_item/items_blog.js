import styles from "./blog_item.module.css";
import latte from "../../../images/slider/coffee/latte.png";
import caputino from "../../../images/slider/coffee/caputino.png";
import glasse from "../../../images/slider/coffee/glasse.png";
import frape from "../../../images/slider/coffee/frape.png";
import espresso from "../../../images/slider/coffee/espresso.png";
const slider=[
    {
        id:1,
        name:"Латте",
        style_img:styles.latte,
        image:latte,
        href:"/napitki/latte"
    },
    {
        id:2,
        name:"Каппучино",
        style_img:styles.caputino,
        style_back:styles.layer_caputino,
        image:caputino,
        href:"/napitki/kappuchino"
    },
    {
        id:3,
        name:"Гляссе",
        style_img:styles.glasse,
        style_back:styles.layer_glasse,
        image:glasse,
        href:"/napitki/glyasse"
    },
    {
        id:4,
        name:"Фраппе",
        style_img:styles.frape,
        style_back:styles.layer_frape,
        image:frape,
        href:"/napitki/frappe"
    },
    {
        id:5,
        name:"Эспрессо",
        style_img:styles.espresso,
        style_back:styles.layer_espresso,
        image:espresso,
        href:"/napitki/espresso"
    }

];
export default slider;