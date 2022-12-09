import style from "./video.module.scss";


const Video = () => {
    return (
        <div className={style.main}>
            <video className={style.video} loop={true} autoPlay={true} muted={true}>
                <source src="/video/trafik.mp4" type="video/mp4"/>
            </video>
        </div>
    );
};

export default Video;