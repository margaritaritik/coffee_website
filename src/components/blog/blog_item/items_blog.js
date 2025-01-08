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
        href:"/blog/napitki/latte",
        background_blog:"#D66F50"
    },
    {
        id:2,
        name:"Каппучино",
        style_img:styles.caputino,
        style_back:styles.layer_caputino,
        image:caputino,
        href:"/blog/napitki/kappuchino",
        background_blog:"#807980"
    },
    {
        id:3,
        name:"Гляссе",
        style_img:styles.glasse,
        style_back:styles.layer_glasse,
        image:glasse,
        href:"/blog/napitki/glyasse",
        background_blog:"#D7E0DB"
    },
    {
        id:4,
        name:"Фраппе",
        style_img:styles.frape,
        style_back:styles.layer_frape,
        image:frape,
        href:"/blog/napitki/frappe",
        background_blog:"#D99A71"
    },
    {
        id:5,
        name:"Эспрессо",
        style_img:styles.espresso,
        style_back:styles.layer_espresso,
        image:espresso,
        href:"/blog/napitki/espresso",
        background_blog:"#D0CFBA"
    }
    ,
    {
        id:6,
        name:"Как выбрать идеальный кофе для вашей кофемашины?",
        title:"Как выбрать идеальный кофе для вашей кофемашины?",
        desc:"description",
        anons:"test test test ",
        description:"test tsrt trtst",
        content:"<div><p>test testov</p></div>",
        style_img:styles.espresso,
        style_back:styles.layer_espresso,
        image:espresso,
        href:"/blog/kak-vybrat-idealniy-kofe-dlya-vashey-kofemashiny",
        background_blog:"#D0CFBA"
    }

];
export default slider;