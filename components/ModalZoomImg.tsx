import React from 'react';
import style from "./modalzoomimg.module.scss";
import Image from "next/image";


const ModalZoomImg = (props: any) => {

    if(!props.show) {
        return null
    }

    return (
        <div className={style.main}>
            <div className={style.bg}></div>
            <div className={style.main__wrapper}>

                <button className={style.wrapper__btn} onClick={props.onClose} >
                    <Image src="/images/close.svg" alt="icon" width={20} height={20}/>
                </button>

                <Image className={style.wrapper__img} src={props.src} alt="img" width={1000} height={1000}/>
            </div>
        </div>
    );
};

export default ModalZoomImg;