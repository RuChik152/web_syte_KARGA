import React, {createContext, useContext} from 'react';
import Image from "next/image";
import style from "./SliderList.module.scss";
import {SliderContext} from "./Sliders";



const img_params = {
    width: 650,
    height: 500
}




const SliderList = () => {

    const {list, slideHandel} = useContext(SliderContext)

    return (
        <div className={style.wrapper}>
            <ul className={style.main}>
                {
                    list.map((el, index) =>
                        <li onClick={() => slideHandel(index)} className={style.item} key={index}>
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