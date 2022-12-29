import React, {useEffect, useState} from 'react';
import videojs from "video.js";
import VideoPlayer from "./videoPlayer";
import style from "./ModalVideo.module.scss"
import cn from "classnames";

const ModalVideoPlayer = (props: any) => {
    const playerRef = React.useRef(null);

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

    //TODO TypeScript
    const videoJsOptions: any = {
        muted: true,
        loop: true,
        preload: 'true',
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
            src: 'https://www.youtube.com/embed/vhZKBESXmxo',
            type: 'video/youtube'
        }]
    };

    const handlePlayerReady = (player: any) : void => {
        playerRef.current = player;

        player.on('waiting', () => {
            videojs.log('player is waiting');
        });

        player.on('dispose', () => {
            videojs.log('player will dispose');
        });
    };

    if(!props.show) {
        return null
    }


    return (
        <div className={style.main}>
            <div style={ diff ? { width: '87vw', height: '91%' } : { width: '100%' }} className={style.wrapper}>
                {/*<VideoPlayer options={videoJsOptions} onReady={handlePlayerReady}/>*/}
                <iframe style={diff ? { width: '100%', height: '100%'} : { width: '100%', height: '41vh'}} src = "https://www.youtube.com/embed/vhZKBESXmxo" title = "YouTube video player" frameBorder = "0" allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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