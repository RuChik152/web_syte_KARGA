import React, {useContext, useEffect, useState} from 'react';
import style from "./Arrow.module.scss";
import {SliderContext} from "./Sliders";
import cn from "classnames";

const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

const Arrow = (props: any) => {
    const {list} = useContext(SliderContext)

    const { height, width } = useWindowDimensions();

    function correctTop() {



        if(height < 566) {
            const currentHeight = height - ((height*63)/100);
            return `${currentHeight}px`
        } else if (height < 1368) {
            const currentHeight = height - ((height*59)/100);
            return `${currentHeight}px`
        } else if (height < 1601) {
            const currentHeight = height - ((height*55)/100);
            return `${currentHeight}px`
        }
    }

    return (
        <div className={style.main}>
            {props.currentPosition != 1 && <button onClick={props.backSlide} className={style.up} disabled={props.currentPosition == 1} style={{ top: correctTop() }} ></button>}
            {props.currentPosition != list.length && <button onClick={props.nextSlide} className={style.down} disabled={props.currentPosition == list.length} style={{ top: correctTop() }} ></button>}
        </div>
    );
};

export default Arrow;