import style from "./modal.module.scss";
import {useEffect, useRef, useState} from "react";
import cn from "classnames";

const Modal = (props: any) => {
    const [screenWidth, setScreenWidth] = useState(0)
    const [screenHeight, setScreenHeight] = useState(0)

    const resizeScreen = () => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight + 25)
    }

    useEffect(() => {
        setScreenWidth(window.innerWidth)
        setScreenHeight(window.innerHeight + 30)
        window.addEventListener('resize', resizeScreen);
    },[])


    if(!props.show) {
        return null
    }


    return (
        <div className={style.modal} style={{width: screenWidth, height: screenHeight}}>
            <video className={style.modal__video} playsInline={true} preload={'auto'} autoPlay={true}  loop={false} controls={true}  style={{width: screenWidth}} >
                <source src="/video/teaser_master.mp4" type="video/mp4"/>
            </video>
            <button className={cn([`${style.modal__btn} ${style.modal__btn__desktop}`])} onClick={props.onClose}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0318 2.14347L7.78917 6.38611L12.0318 10.6287L10.6176 12.043L6.37496 7.80032L2.13232 12.043L0.718104 10.6287L4.96075 6.38611L0.718104 2.14347L2.13232 0.729254L6.37496 4.97189L10.6176 0.729254L12.0318 2.14347Z" fill="#F1A738"/>
                </svg>
            </button>
        </div>
    );
};

export default Modal;