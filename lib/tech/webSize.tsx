import React, {useEffect, useState} from 'react';
import style from "./websize.module.scss";

const WebSize = () => {
    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)

    const updateDataResize = () => {
        setWidth(document.documentElement.scrollWidth)
        setHeight(document.documentElement.scrollHeight)
    }

    useEffect(() => {
        setWidth(document.documentElement.scrollWidth);
        setHeight(document.documentElement.scrollHeight);
        window.addEventListener('resize', updateDataResize);
    },[])

    return (
        <div className={style.websize}>
            <p>Width: {width}</p>
            <p>Height: {height}</p>
        </div>
    );
};

export default WebSize;