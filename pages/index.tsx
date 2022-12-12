import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Description from "../components/home/description";
import React, {useEffect, useState} from "react";
import Modal from "../components/modal";
import Fund_us from "../components/home/fund_us";
import bg_logo from "../public/images/bg_blur.gif";
import Sliders from "../components/sliders/MySlaider/Sliders";
import cn from "classnames";
import WebSize from "../lib/tech/webSize";
import {screenWidth} from "../lib/tech/function";
import style from "../components/home/description.module.scss";
import Bullet from "../components/home/bullet/bullet";
import {bulletText} from "../lib/mock_data";
import bg from "../public/images/sky.png";






export default function Home() {

    const [show, setShow] = useState(false)

    const [screen, setScreen] = useState(false)

    const [widthWindow, setWidthWindow] = useState(0);
    const [heightWindow, setHeightWindow] = useState(0);

    const [swipePosition, setSwipePosition] = useState(0)
    const [currentSwipe, setCurrentSwipe] = useState(0)
    const [diff, setDiff] = useState(true)


    const styled = {
        backgroundImage: `url(${bg_logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        width: '100%'
    }

    const styled_bg = {
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: 0
    }

    const whichSizeScreen = () => {
        const height = window.innerHeight;
        const width = window.innerWidth;
        setWidthWindow(width)
        setHeightWindow(height)
        if(window.matchMedia("only screen and (max-width: 769px)").matches) {
            document.getElementsByTagName("body")[0].style.overflow="hidden";
        } else {
            document.getElementsByTagName("body")[0].style.overflow="visible";
        }
    }

    const whatSizeScreen = (size: number) => {

        if(size < 769) {
            setScreen(true)
        } else {
            setScreen(false)
        }
    }

    useEffect(() => {
        const height = window.outerHeight;
        const width = window.outerWidth;
        whatSizeScreen(width);
        setHeightWindow(height);
        setWidthWindow(width);
        window.addEventListener('resize', whichSizeScreen);

        if(window.matchMedia("only screen and (max-width: 768px)").matches) {
            document.getElementsByTagName("body")[0].style.overflow="hidden";
            document.getElementsByTagName("body")[0].style.touchAction="none";
        }
    },[widthWindow])



  const clickScroll = (е: any) => {
      const main = document.getElementsByTagName('main');
      const windowInnerHeight = main[0].offsetHeight + main[0].offsetTop;
      window.scrollTo({ top: windowInnerHeight, behavior: 'smooth'});
  }


  const startSwipe = (e: any) => {
      setSwipePosition(e.targetTouches[0].clientY)
      console.log(screenWidth());
  }

  const moveSwipe = (e: any) => {
      setCurrentSwipe(e.targetTouches[0].clientY)
      setDiff(swipePosition > currentSwipe)

      switch (diff){
          case true:
              window.scrollBy(0, window.screen.height);
              break;
          case false:
              window.scrollBy(0, -window.screen.height);
              break;
          default:
              return null
      }
  }

  const endSwipe = (e: any) => {
      e.preventDefault();
      switch (diff){
          case true:
              window.scrollBy(0, window.screen.height);
              break;
          case false:
              window.scrollBy(0, -window.screen.height);
              break;
          default:
              return null
      }
  }


  return (
          // <div onTouchStart={startSwipe} onTouchMove={moveSwipe} onTouchEnd={endSwipe}  className={styles.container}>
          //     <WebSize/>
          //     <Modal onClose={() => setShow(false)} show={show}/>
          //     <main style={styled} className={styles.main} >
          //         <div className={styles.infoblock}>
          //             <div className={styles.title}>
          //                 <h1 className={styles.title__first}>Karga</h1>
          //                 <p className={styles.title__second}>new fairytale shooter</p>
          //                 <div className={styles.wrapper__btn}>
          //                     <button className={styles.btn}><span className={styles.play}>Play Now</span></button>
          //                     <button className={styles.watch} onClick={() => setShow(true)}><span className={styles.play}>Watch trailer</span></button>
          //                 </div>
          //             </div>
          //             <button className={styles.btn__down} onClick={clickScroll}>
          //                 <Image className={styles.img} src="/images/arrow.svg" alt="button__down" width={24} height={39}/>
          //             </button>
          //
          //         </div>
          //     </main>
          //
          //     <div className={styles.bg}></div>
          //
          //     <Description/>
          //     <div id="screenshot" className={cn({
          //         [styles.screenshots__mobile__wrapper] : screen == true,
          //         [styles.screenshots__wrapper] : screen == false
          //     })}>
          //         <h2 className={styles.screenshots__wrapper__text}>screenshots</h2>
          //         <Sliders/>
          //     </div>
          //
          //     {/*<Fund_us/>*/}
          // </div>
      <ul style={styled_bg} onTouchStart={startSwipe} onTouchMove={moveSwipe} >
          {/*<WebSize/>*/}
          {/*<button className={styles.down}>*/}
          {/*    DOWN*/}
          {/*</button>*/}
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
                   <main style={styled} className={styles.main} >
                       <div className={styles.infoblock}>
                           <div className={styles.title}>
                               <h1 className={styles.title__first}>Karga</h1>
                               <p className={styles.title__second}>new fairytale shooter</p>
                               <div className={styles.wrapper__btn}>
                                  <button className={styles.btn}><span className={styles.play}>Play Now</span></button>
                                   <button className={styles.watch} onClick={() => setShow(true)}><span className={styles.play}>Watch trailer</span></button>
                               </div>
                           </div>
                           <button className={styles.btn__down} onClick={clickScroll}>
                              <Image className={styles.img} src="/images/arrow.svg" alt="button__down" width={24} height={39}/>
                           </button>

                       </div>
                   </main>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
              <section style={{textAlign: "center"}}  className={style.section}>
                  <h2 style={{fontSize: "48px"}} className={style.tittle}>Just start <em>playing</em> and <em>find</em> out my secret</h2>
                  <p style={{fontSize: "25px"}} className={style.desc}>We are &apos;BELIVR&apos; - a young game&apos;s developer. We present our first project and enter the gaming industry with the fantasy VR shooter &apos;Karga&apos;</p>
              </section>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
              <section  className={style.section}>
                  <Bullet src="/images/bullet/elements.svg" text={bulletText[0].text} width={250} height={250}/>
              </section>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
              <section  className={style.section}>
                  <Bullet src="/images/bullet/karga.png" text={bulletText[0].text} width={250} height={250}/>
              </section>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
              <section  className={style.section}>
                  <Bullet src="/images/bullet/hero.png" text={bulletText[0].text} width={250} height={250}/>
              </section>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
              <section  className={style.section}>
                  <Bullet src="/images/bullet/Skeleton.png" text={bulletText[0].text} width={250} height={250}/>
              </section>
          </li>
          <li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100vw", marginLeft: "-40px"}}>
                   <div id="screenshot" className={cn({
                      [styles.screenshots__mobile__wrapper] : screen == true,
                       [styles.screenshots__wrapper] : screen == false
                   })}>
                       <h2 className={styles.screenshots__wrapper__text}>screenshots</h2>
                       <Sliders/>
                  </div>
          </li>
          {/*<li style={{height: '102vh', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black", width: "100vw", marginLeft: "-40px"}}>*/}
          {/*    <Fund_us/>*/}
          {/*</li>*/}
      </ul>
  )
}
