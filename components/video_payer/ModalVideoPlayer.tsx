import React, {useEffect, useState} from 'react';
import style from "./ModalVideo.module.scss"
import cn from "classnames";
import Plyr from "plyr-react";
import "plyr-react/plyr.css"
import Link from "next/link";

const plyrProps = {
    source: {
        type: 'video',
        sources: [
            {
                src: 'vhZKBESXmxo',
                provider: 'youtube',
            },
            //TODO Пример использования без Ютуба
            // {
            //     src: '/video/teaser_master.mp4',
            //     provider: 'html5',
            //     size: 720
            // },
            // {
            //     src: '/video/teaser_master.mp4',
            //     provider: 'html5',
            //     size: 1080
            // },
        ],
    } ,
    options: {
        controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
        enabled: true,
        title: "TEST",
        resetOnEnd: true,
        youtube: {
            controls: 0,
        }
    },
}

const ModalVideoPlayer = (props: any) => {

    const [widthAdaptive, setWidthAdaptive] = useState<number | null>(null)
    const [heightAdaptive, setHeightAdaptive] = useState<number | null>(null)
    const [diff, setDiff] = useState<boolean | null>(null);

    const checkResizeWindow = () => {
        setWidthAdaptive(window.screen.width);
        setHeightAdaptive(window.screen.height);
        if(typeof widthAdaptive === "number" && typeof heightAdaptive === "number") {
            if(widthAdaptive > heightAdaptive) {
                setDiff(true)
            }
            if(widthAdaptive < heightAdaptive) {
                setDiff(false)
            }
        }
    }

    useEffect(() => {
        checkResizeWindow()
        window.addEventListener('resize', checkResizeWindow)
    })


    if(!props.show) {
        return null
    }

    return (
        <div className={style.main}>
            <div style={ diff ? { width: '87vw' } : { width: '100%' }} className={style.wrapper}>
                <div>
                    <Link href="https://ya.ru">X</Link>
                </div>
                {/*@ts-ignore*/}
                <Plyr {...plyrProps} />
            </div>
            <button className={cn([`${style.modal__btn} ${style.modal__btn__desktop}`])} onClick={props.onClose}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0318 2.14347L7.78917 6.38611L12.0318 10.6287L10.6176 12.043L6.37496 7.80032L2.13232 12.043L0.718104 10.6287L4.96075 6.38611L0.718104 2.14347L2.13232 0.729254L6.37496 4.97189L10.6176 0.729254L12.0318 2.14347Z" fill="#F1A738"/>
                </svg>
            </button>
        </div>
    );
};

export default ModalVideoPlayer;