import React from 'react';
import style from "./videoBanner.module.scss"

const VideoBanner = () => {
    return (
        <div className={style.main}>
            <div className={style.wrapper}>
                <video className={style.video} preload={'auto'} loop={true} autoPlay={true} muted={true} >
                    <source src="/video/bg_video_new.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
};

export default VideoBanner;