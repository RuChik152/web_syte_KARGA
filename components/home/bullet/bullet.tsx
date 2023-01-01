import React, {useState} from 'react';
import Image from "next/image";
import style from "./bullet.module.scss";

interface BulletProps {
    src: string,
    text: string,
    width: number,
    height: number,
    name: string,
    color?: string
}



const Bullet = (props: BulletProps) : JSX.Element => {

    const [config, setConfig] = useState({
        src: props.src,
        width: props.width,
        height: props.height,
        name: props.name,
        text: props.text,
        styleText: {
            color: props.color ? props.color : '#FFFFFF'
        }
    })

    return (
        <div className={style.main}>
            <Image unoptimized={true} className={style.main__img} src={config.src} width={config.width} height={config.height} alt="image_bullet"/>
            <p style={config.styleText} className={style.main__name}>{config.name}</p>
            <p className={style.main__text}>{config.text}</p>
        </div>
    );
};

export default Bullet;