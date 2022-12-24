import Link from "next/link";
import Head from "next/head";
import style from './header.module.scss';
import {useCallback, useEffect, useRef, useState} from "react";
import cn from "classnames";

import BurgerMenu from "../material_ui/burger_menu/burgerMenu";
import {node} from "prop-types";
import Image from "next/image";


const Header = () => {

    const refUl = useRef(null);

    const [stick, setStick] = useState(false);
    const [list, setList] = useState<any>(null)


    useEffect(() => {
        window.onscroll = function () {
            const header = document.querySelector(`#headid`)
            // @ts-ignore
            const sticky = header.offsetTop;
            if (window.pageYOffset >= 1) {
                // @ts-ignore
                header.classList.add(`${style.sticky}`);
            } else {
                // @ts-ignore
                header.classList.remove(`${style.sticky}`);
            }
        }
    })



    useEffect(() => {

        const itemList = document.getElementsByClassName(`${style.list__item}`)
        setList(itemList)

    },[]);

    const handelActiveLink = (e: any) => {
        const newArr = Array.from(list);

        const checkHaveClassName = e.currentTarget.classList.contains(`${style.list__item__active}`)
        if(!checkHaveClassName){

            //TODO Fix TypeScript
            newArr.forEach((item: any) => {
                if(item.classList.contains(`${style.list__item__active}`)){
                    item.classList.remove(`${style.list__item__active}`);
                }
            });

            e.currentTarget.classList.add(`${style.list__item__active}`);
        }

    }

    return (
        <>
            <title>Karga</title>
            <header  id="headid" className={cn({
                [style.header] : stick === false,
                [style.sticky] : stick === true
            })}>
                <div className={style.navmenu}>
                    <div className={style.navmenu__logo}>
                        <Image className={style.sticky__logo} src="/images/header/logo.svg" alt="logo" width={250} height={86}/>
                    </div>
                    <ul ref={refUl} className={style.navmenu__list}>

                        <Link className={`${style.list__item} ${style.list__item__active}`} onClick={handelActiveLink} href="/">
                            <li>Home</li>
                        </Link>

                        <Link onClick={handelActiveLink} className={style.list__item} href="/#about"><li>About</li></Link>

                        <Link onClick={handelActiveLink} className={style.list__item} href="/#contacts"><li>Contacts</li></Link>

                        <Link onClick={handelActiveLink} className={style.list__item} href={{pathname: 'https://karga.belivr.tech:5000/download/press_kit'}} download><li>Press Kit</li></Link>

                        <Link onClick={handelActiveLink} className={style.list__item} href="/idea"><li>Your idea</li></Link>

                        <Link onClick={handelActiveLink} className={style.list__item} href="/#screenshot"><li>Screenshot</li></Link>

                    </ul>
                </div>
                <BurgerMenu/>
            </header>
        </>

    )
}

export default Header