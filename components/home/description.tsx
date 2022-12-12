import Image from "next/image";
import style from "./description.module.scss";
import {useEffect, useRef, useState} from "react";
import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
// @ts-ignore
import bg from "../../public/images/sky.png";
import {bulletText} from '../../lib/mock_data';
import Bullet from "./bullet/bullet";
import cn from "classnames";
import {Property} from "csstype";

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

interface PropsWidthHeightImgMobile {
    width: number,
    height: number,
    fontSize: Property.FontSize,
    textAlign: Property.TextAlign
}

const widthHeightImgMobile:PropsWidthHeightImgMobile = {
    width: 400,
    height: 400,
    fontSize: '3em',
    textAlign: 'center'
}

const Description = () => {

        const [mobileImgSizeWidth, setMobileImgSizeWidth] = useState(widthHeightImgMobile.width ? widthHeightImgMobile.width : 400);
        const [mobileImgSizeHeight, setMobileImgSizeHeight] = useState(widthHeightImgMobile.height ? widthHeightImgMobile.height : 400);

        const [screenHeight, setScreenHeight] = useState(0)
        const [screenWidth, setScreenWidth] = useState(0)


        const styled = {
            backgroundImage: `url(${bg.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }

        const updateDataResize = () => {
            setScreenWidth(window.screen.width)
        };

        const updateParamsStyle = () => {
            if(window.matchMedia("only screen and (max-width: 375px)").matches) {
                setMobileImgSizeWidth(250)
                setMobileImgSizeHeight(250)
            }else {
                setMobileImgSizeWidth(400)
                setMobileImgSizeHeight(400)
            }
        }

        useEffect(() => {
            updateParamsStyle();
            updateDataResize()
            setScreenHeight(window.screen.height)
            window.addEventListener('resize', updateDataResize)
            window.addEventListener('resize', updateParamsStyle);
        },[screenWidth])

    return (
        <>
            {
                screenWidth < 769 ?
                <div className={cn([`${style.main} ${style.only__not__desktop}`])}>
                    <div style={styled} className={style.bg}></div>
                    <section id="about" style={{height: screenHeight}} className={cn([`${style.wrapper__text} ${style.section}`])}>
                        <h2 className={style.tittle}>Just start <em>playing</em> and <em>find</em> out my secret</h2>
                        <p className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>
                    </section>
                    <section  className={style.section}>
                        <Bullet src="/images/bullet/elements.svg" text={bulletText[0].text} width={mobileImgSizeWidth} height={mobileImgSizeHeight}/>
                    </section>
                    <section className={style.section}>
                        <Bullet src="/images/bullet/karga.png"  text={bulletText[1].text} width={mobileImgSizeWidth} height={mobileImgSizeHeight}/>
                    </section>
                    <section  className={style.section}>
                        <Bullet src="/images/bullet/hero.png"  text={bulletText[2].text} width={mobileImgSizeWidth} height={mobileImgSizeHeight}/>
                    </section>
                    <section  className={style.section}>
                        <Bullet src="/images/bullet/Skeleton.png"  text={bulletText[3].text} width={mobileImgSizeWidth} height={mobileImgSizeHeight}/>
                    </section>
                </div>
                    :
                <div className={cn([`${style.main} ${style.only__desktop}`])}>
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

            }


        </>

    );
};


export default Description;