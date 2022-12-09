import React from 'react';
import Image from "next/image";
import style from "./bullet.module.scss";

interface BulletProps {
    src: string,
    text: string,
    width: number,
    height: number,
}



const Bullet = (props: BulletProps) : JSX.Element => {
    return (
        <div className={style.main}>
            <Image unoptimized={true} loading={"lazy"}  className={style.main__img} src={props.src} width={props.width} height={props.height} alt="image_bullet"/>
            <p className={style.main__text}>{props.text}</p>
        </div>
    );
};

export default Bullet;