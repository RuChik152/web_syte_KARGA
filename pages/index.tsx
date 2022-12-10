import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Description from "../components/home/description";
import React, {useEffect, useState} from "react";
import Modal from "../components/modal";
import Fund_us from "../components/home/fund_us";
import bg_logo from "../public/images/bg_blur.gif";
import Sliders from "../components/sliders/MySlaider/Sliders";





export default function Home() {

    const [show, setShow] = useState(false)

    const [widthWindow, setWidthWindow] = useState(0);
    const [heightWindow, setHeightWindow] = useState(0);
    const [touchWindowPosition, setTouchWindowPosition] = useState(null)

    const styled = {
        backgroundImage: `url(${bg_logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

    const whichSizeScreen = () => {
        const height = window.outerHeight;
        const width = window.outerWidth;
        setWidthWindow(width)
        setHeightWindow(height)
        console.log('resize');
    }



    useEffect(() => {
        const height = window.outerHeight;
        const width = window.outerWidth;
        setHeightWindow(height);
        setWidthWindow(width);
        window.addEventListener('resize', whichSizeScreen);
    },[])



  const clickScroll = (е: any) => {
      const main = document.getElementsByTagName('main');
      const windowInnerHeight = main[0].offsetHeight + main[0].offsetTop;
      window.scrollTo({ top: windowInnerHeight, behavior: 'smooth'});
  }

    const handelTouchWindowStart = (e: any) => {
        const touchDown = e.touches[0].clientY
        setTouchWindowPosition(touchDown)
    }

  const actionScrollWindows = (e: any) => {
        const touchDown = touchWindowPosition;

        if(touchDown == null) {
            return null
        }

      const currentTouch = e.touches[0].clientY
      const diff = touchDown - currentTouch

      console.log('diff--info', diff);
      if(diff > 5) {

          window.scrollBy({top: heightWindow, behavior: 'smooth'});
          console.log('diff-', diff < -5);


      }

      if(diff < -5) {
          window.scrollBy({top: heightWindow * (-1), behavior: 'smooth'});
          console.log('diff', diff > 5);
      }

      setTouchWindowPosition(null);
  }


  const handelTouchMoveSite = (e: any) => {

      if(widthWindow <= 768) {
          const block = document.getElementById('slider');
          if(block === null) {
              actionScrollWindows(e);
          } else {
              const check = block.contains(e.target);
              if(!check){
                  console.log('Это не слайдер, функция работает')
              } else {
                  console.log('Это слайдер, функция не работает')
              }
          }
      } else {

          console.log('Это больше планшета');
          return null
      }

  }

  return (
       <div onTouchStart={handelTouchWindowStart} onTouchMove={handelTouchMoveSite} className={styles.container}>
           <Modal onClose={() => setShow(false)} show={show}/>
           <main style={styled} className={styles.main}>
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

           <div className={styles.bg}></div>
           <Description/>
           <div id="screenshot" className={styles.screenshots__wrapper}>
               <h2 className={styles.screenshots__wrapper__text}>screenshots</h2>
               <Sliders/>
           </div>

           <Fund_us/>
       </div>
  )
}
