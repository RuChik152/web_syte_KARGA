import React, {useEffect, useState} from 'react';
import videojs from 'video.js';
import VideoPlayer from "./videoPlayer";
import style from "./ModalVideo.module.scss"
import {boolean} from "property-information/lib/util/types";

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

    const videoJsOptions = {
        autoplay: 'play',
        loop: true,
        preload: 'true',
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [0.5, 1, 1.5, 2],
        sources: [{
            src: '/video/teaser_master.mp4',
            type: 'video/mp4'
        }]
    };

    const handlePlayerReady = (player) => {
        playerRef.current = player;

        // You can handle player events here, for example:
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
            <div style={ diff ? {width: '87vw' } : { width: '100%' }} className={style.wrapper}>
                <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady}/>
            </div>
        </div>
    );
};

export default ModalVideoPlayer;