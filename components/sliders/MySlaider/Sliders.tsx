import React, {createContext, useState} from 'react';
import SliderList from "./SliderList";
import Slide from "./Slide";
import style from "./Sliders.module.scss"


interface SlideContextProps {
    slideHandel: (number: number) => void,
    slide: number | null,
    list: SlideEl[],
    setSlide: (arg: null | number) => void
}

//TODO TypeScript
// @ts-ignore
export const SliderContext: React.Context<SlideContextProps> = createContext();

export const initList = [
    {
        id: 1,
        src: '/images/desc/demo1.jpg'
    },
    {
        id: 2,
        src: '/images/desc/demo2.jpg'
    },
    {
        id: 3,
        src: '/images/desc/demo3.jpg'
    },
    {
        id: 4,
        src: '/images/desc/demo4.jpg'
    },
    {
        id: 5,
        src: '/images/desc/demo5.jpg'
    },
]

export interface SlideEl {
    id: number,
    src: string
}

const Sliders = () => {
    const [slide, setSlide] = useState<number | null>(null)
    const [list, setList] = useState<SlideEl[]>(initList)




    const slideHandel = (number: number) : void => {
        setSlide(number);
    }

    return (
        <div className={style.slider__wrapper} >
             <SliderContext.Provider value={{
                 slideHandel,
                 slide,
                 list,
                 setSlide
             }} >
                 <Slide/>
                 <SliderList/>
             </SliderContext.Provider>
        </div>
    );
};

export default Sliders;