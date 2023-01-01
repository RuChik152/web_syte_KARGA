import React, {createContext, useContext, useEffect, useRef, useState} from 'react';
import Image from "next/image";
import style from "./SliderList.module.scss";
import {SliderContext} from "./Sliders";



const img_params = {
    width: 650,
    height: 500
}




const SliderList = () => {

    const {list, slideHandel} = useContext(SliderContext)

    const ulList = useRef(null);
    const liItem = useRef(null);

    const [touchPosition, setTouchPosition] = useState(null)
    const [position, setPosition] = useState(0)
    const [currentPosition, setCurrentPosition] = useState(1)

    const [widthSliderList, setWidthSliderList] = useState<number | null>(null)
    const [step, setStep] = useState<number | null>(null)

    const [lengthtUl, setLengthUl] = useState<number | null>(null);
    const [mediumItem, setMediumPosition] = useState<number | null>(null)

    useEffect(() => {
        // @ts-ignore
        console.log(liItem.current.getBoundingClientRect());
        // @ts-ignore
        console.log(ulList.current.childNodes.length);
        // @ts-ignore
        console.log(Math.round(ulList.current.childNodes.length / 2));
        // @ts-ignore
        setMediumPosition(Math.round(ulList.current.childNodes.length / 2))
        // @ts-ignore
        setLengthUl(ulList.current.childNodes.length)
    }, [])

    const getWidthSliderList = () => {
        // @ts-ignore
        setWidthSliderList(ulList.current.getBoundingClientRect());
    }

    const handleTouchStart = (e:any) => {
        console.log('touchStart')
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }


    const handleTouchMove = (e: any) => {
        console.log('touchMove')
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            const lnList =  ((list.length - 1) * -100)
            const check = mediumItem == lengthtUl

            if(!check) {
                nextPosition()
            }
        }

        if (diff < -5) {
            const check = mediumItem != 2
            // const check = true
            if(check) {
                backPosition()
            }

        }

        setTouchPosition(null)
    }

    const backPosition = () => {
        // setCurrentPosition(currentPosition - 1);
        // @ts-ignore
        setMediumPosition(mediumItem - 2)
        setPosition(position + 650);
    }

    const nextPosition = () => {
        // setCurrentPosition(currentPosition + 1);
        // @ts-ignore
        setMediumPosition(mediumItem + 2)
        setPosition(position - 650);
    }

    return (
        <div className={style.wrapper}>
            <ul ref={ulList} style={{transform: `translateX(${position}px)`, transition: '1s ease-in-out'}} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className={style.main}>
                {
                    list.map((el, index) =>
                        <li ref={liItem} onClick={() => slideHandel(index)} className={style.item} key={index}>
                            <span className={style.item__span}></span>
                            <Image unoptimized={true} loading={"lazy"} className={style.img} src={el.src} alt="icon" width={img_params.width} height={img_params.height}/>
                        </li>
                    )
                }
            </ul>

        </div>
    );
};

export default SliderList;