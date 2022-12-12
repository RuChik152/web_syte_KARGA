import React, {useEffect, useState} from 'react';
import style from "./websize.module.scss";

const WebSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [screenWidth, setScreenWidth] = useState(0)
    const [screenHeight, setScreenHeight] = useState(0)
    const [clientWidth, setclientWidth] = useState(0)
    const [clientHeight, setclientHeight] = useState(0)
    const [innerWidth, setInnerWidth] = useState(0)
    const [innerHeight, setInnerHeight] = useState(0)

    const updateDataResize = () => {
        setWidth(document.documentElement.scrollWidth)
        setHeight(document.documentElement.scrollHeight)
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
        setclientWidth(document.documentElement.clientWidth)
        setclientHeight(document.documentElement.clientHeight)
        setclientHeight(document.documentElement.clientHeight)
        setclientHeight(document.documentElement.clientHeight)
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
    }

    useEffect(() => {
        setWidth(document.documentElement.scrollWidth);
        setHeight(document.documentElement.scrollHeight);
        setScreenWidth(window.screen.width)
        setScreenHeight(window.screen.height)
        setclientWidth(document.documentElement.clientWidth)
        setclientHeight(document.documentElement.clientHeight)
        setInnerWidth(window.innerWidth)
        setInnerHeight(window.innerHeight)
        window.addEventListener('resize', updateDataResize);
    },[])

    return (
        <div className={style.websize}>
            <p style={{color: "black"}}>scrollWidth: {width}</p>
            <p style={{color: "black"}}>scrollHeight: {height}</p>
            <p style={{color: "black"}}>screenWidth: {screenWidth}</p>
            <p style={{color: "black"}}>screenHeight: {screenHeight}</p>
            <p style={{color: "black"}}>clientWidth: {clientWidth}</p>
            <p style={{color: "black"}}>clientHeight: {clientHeight}</p>
            <p style={{color: "black"}}>innerWidth: {innerWidth}</p>
            <p style={{color: "black"}}>innerHeight: {innerHeight}</p>
        </div>
    );
};

export default WebSize;