import React, {useContext, useEffect, useRef, useState} from 'react';
import {SliderContext} from "./Sliders";
import Image from "next/image";
import style from "./Slide.module.scss";
import Arrow from "./Arrow";

const img_params = {
    width: 650,
    height: 500
}

const Slide = () => {

    const {slide, list, setSlide} = useContext(SliderContext)


    const [position, setPosition] = useState(0)
    const [width, setWidth] = useState(img_params.width)
    const [currentPosition, setCurrentPosition] = useState(1)
    const [touchPosition, setTouchPosition] = useState(null)


    if(slide == null) {
        return null
    }


    const handleTouchStart = (e:any) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const close = () => {
        setPosition(0);
        setCurrentPosition(1)
        setTouchPosition(null);
        setSlide(null);
    }

    //TODO TypeScript
    const handleTouchMove = (e: any) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch


        if (diff > 5) {

            const lnList =  ((list.length - 1) * -100)
            const check = position == lnList

            if(!check) {
                nextPosition()
            }


        }

        if (diff < -5) {
            const check = position != 0
            if(check) {
                backPosition()
            }

        }

        setTouchPosition(null)
    }


    const nextPosition = () => {
        setCurrentPosition(currentPosition + 1);
        setPosition(position - 100);
    }



    const backPosition = () => {
        setCurrentPosition(currentPosition - 1);
        setPosition(position + 100);
    }



    return (
        <div id="slider" className={style.container}>
            <div className={style.wrapper}>
                <button className={style.close__btn} onClick={close} >X</button>
                <Arrow nextSlide={ nextPosition } backSlide={ backPosition } currentPosition={currentPosition}/>
                <ul onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} style={{ transform: `translateX(${position}%)`, transition: '1s ease-in-out'}} className={style.main} >
                    <li className={style.item__img}>
                        <Image unoptimized={true} loading={"lazy"} className={style.img} src={list[slide].src} alt="icon" width={img_params.width} height={img_params.height}/>
                    </li>
                    {
                        list.map((el, index) => {
                            if(index !== slide){
                                return <li className={style.item__img} key={index}><Image unoptimized={true} loading={"lazy"}   className={style.img} src={list[index].src} alt="icon" width={img_params.width} height={img_params.height}/></li>

                            }
                        })
                    }
                </ul>
            </div>
        </div>

    );
};

export default Slide;