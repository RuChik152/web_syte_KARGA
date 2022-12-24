import Image from "next/image";
import style from "./description.module.scss";
import {useEffect, useRef, useState} from "react";
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
// @ts-ignore
import bg from "../../public/images/sky.png";
import {bulletText} from '../../lib/mock_data';
import Bullet from "./bullet/bullet";
import bg_logo from "../../public/images/BG_BOX_TITTLE_DESCRIPTION_2.png";


const styleConfig = {
    width: 554,
    height: 554,
    color: '#8B2062',
}

const Description = () => {
    const styled = {
        // backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        // background: 'linear-gradient(220deg, rgba(255,255,255,1) 0%, rgba(179,216,233,1) 12%, rgba(70,195,255,1) 26%, rgba(204,238,255,1) 47%, rgba(48,166,236,1) 65%, rgba(23,159,250,1) 78%, rgba(166,219,255,1) 90%, rgba(0,146,255,1) 100%)',
    }

    const configStyle = {
        backgroundImage: `url(${bg_logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    useEffect(() => {
        const list = document.querySelector(`${style.present__item}`);
    },[])

    return (
        <div className={style.main}>
            <div style={styled} className={style.bg}></div>
            <div  id="about" className={style.wrapper__text}>
                <div style={configStyle} className={style.box__tittle}>
                    <h2 className={style.tittle}>Just start playing and find out my secret</h2>
                    <p className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>
                </div>
                {/*TODO delete after check*/}
                {/*<h2 className={style.tittle}>Just start <em>playing</em> and <em>find</em> out my secret</h2>*/}
                {/*<p className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>*/}
                <div className={style.bullet__container}>
                    <Bullet src="/images/bullet/new/elements.png" name={bulletText[0].name} text={bulletText[0].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                    <Bullet src="/images/bullet/new/hero.png" name={bulletText[1].name} text={bulletText[1].text} width={styleConfig.width} height={styleConfig.height}/>
                    <Bullet src="/images/bullet/new/witch-transformed.png" name={bulletText[2].name} text={bulletText[2].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                    <Bullet src="/images/bullet/new/skeleton-transformed.png" name={bulletText[3].name} text={bulletText[3].text} width={styleConfig.width} height={styleConfig.height} color={styleConfig.color}/>
                </div>
            </div>

        </div>
    );
};


export default Description;