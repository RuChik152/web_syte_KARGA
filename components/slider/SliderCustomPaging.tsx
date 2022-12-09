import React, {useEffect, useRef, useState} from "react";
import Slider from "react-slick";
import style from "./slider.module.scss";
import Image from "next/image";
import BorderProject from "../../material_ui/border/BorderProject";

const img_params = {
    width: 500,
    height: 500
}

const baseUrl = '/images/desc';

const configStyle = '' +
    'border: 3px solid #6c6c6c8a;' +
    ' transform: scale(1.3); position: relative;' +
    ' z-index: 1; transition: 0.5s ease-in-out;'


const SliderCustomPaging = () => {
    const [src, setSrc] = useState('');
    const [show, setShow] = useState(false)
    const [itemLi, setOldItem] = useState(null);

    const activeClick = (e: any) => {
        e.preventDefault();
        if(e.target.parentNode.parentNode !== null && e.target.parentNode.parentNode.parentElement.classList[0] == 'slick-dots'){

            const old = itemLi;
            if(old != null) {
                // @ts-ignore
                old.style.cssText = '';
            }

            const test = document.querySelectorAll('.present__container');

            const item = e.target.parentNode.parentNode;
            item.style.cssText = configStyle;

            setOldItem(item);

        }
    }


    useEffect(() => {
        window.onclick = activeClick;
    })

    const settings = {
        fade: true,
        infinite: true,
        speed: 500,
        centerMode: true,
        customPaging: function(i: number) {
            return (
                <div onClick={activeClick} className={style.present__container}>
                    <Image className={style.present__img} src={`${baseUrl}/demo${i + 1}.jpg`} width={50} height={50}  alt="logo"/>
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    // }
    const shopZoomImg = (e: any) => {
        const str = e.currentTarget.nextSibling.src;
        console.log('e.currentTarget.nextSibling.src', e.currentTarget.nextSibling.src)

        const req = /^https?:\/\/.*?[/]/g;
        const link = `/${str.replace(req, '')}`

        setShow(true)
        setSrc(link);
    }



        return (
            <div className={style.container}>
                {/*<ModalZoomImg onClose={() => setShow(false)} src={src} show={show}/>*/}
                <Slider  {...settings}>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo1.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image className={style.img} src="/images/desc/demo2.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo3.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo4.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo5.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo6.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                    <div className={style.img__container}>
                        <BorderProject/>
                        {/*<SearchBtn styleBtn={style.img__btn} styleSvg={style.svg} action={shopZoomImg}/>*/}
                        <Image src="/images/desc/demo7.jpg" alt="logo" width={img_params.width} height={img_params.height}/>
                    </div>
                </Slider>
            </div>
        );
}

export default SliderCustomPaging;