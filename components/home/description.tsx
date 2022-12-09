import Image from "next/image";
import style from "./description.module.scss";
import {useEffect, useRef, useState} from "react";
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
// @ts-ignore
import bg from "../../public/images/sky.png";
import {bulletText} from '../../lib/mock_data';
import Bullet from "./bullet/bullet";

const img_params = {
    width: 500,
    height: 500
}

const items = [
    <Image key={1} src="/images/desc/demo1.jpg" alt="logo" width={img_params.width} height={img_params.height}/>,
    <Image key={2} src="/images/desc/demo2.jpg" alt="logo" width={img_params.width} height={img_params.height}/>,
    <Image key={3} src="/images/desc/demo3.jpg" alt="logo" width={img_params.width} height={img_params.height}/>,
];

interface BulletTextProps {
    img: string,
    text: string,
}


const widthHeightImg = {
    width: 240,
    height: 240
}

const Description = () => {
    const styled = {
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    useEffect(() => {
        const list = document.querySelector(`${style.present__item}`);
    },[])

    return (
        <div className={style.main}>
            <div style={styled} className={style.bg}></div>
            <div  id="about" className={style.wrapper__text}>
                <h2 className={style.tittle}>Just start <em>playing</em> and <em>find</em> out my secret</h2>
                <p className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>
                <div className={style.bullet__container}>
                    <Bullet src="/images/bullet/elements.svg" text={bulletText[0].text} width={widthHeightImg.width} height={widthHeightImg.height}/>
                    <Bullet src="/images/bullet/karga.png" text={bulletText[1].text} width={widthHeightImg.width} height={widthHeightImg.height}/>
                    <Bullet src="/images/bullet/hero.png" text={bulletText[2].text} width={widthHeightImg.width} height={widthHeightImg.height}/>
                    <Bullet src="/images/bullet/Skeleton.png" text={bulletText[3].text} width={widthHeightImg.width} height={widthHeightImg.height}/>
                </div>
            </div>

        </div>
    );
};


export default Description;