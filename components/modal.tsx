import style from "./modal.module.scss";
import {useEffect, useState} from "react";
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
        window.document.addEventListener('resize', resizeScreen);
    },[])


    if(!props.show) {
        return null
    }

    return (
        <div className={style.modal} style={{width: screenWidth, height: screenHeight}}>
            <video className={style.modal__video} autoPlay={false} loop={false} muted={true} controls={true} style={{width: screenWidth}} >
                <source src="/video/teasers.mp4" type="video/mp4"/>
            </video>
            <button className={style.modal__btn} onClick={props.onClose}>X</button>
            <button className={cn([`${style.modal__btn} ${style.modal__btn__desktop}`])} onClick={props.onClose}>X</button>
        </div>
    );
};

export default Modal;