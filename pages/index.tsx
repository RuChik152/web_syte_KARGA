import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Description from "../components/home/description";
import React, {useState} from "react";
import Modal from "../components/modal";
import Fund_us from "../components/home/fund_us";
import bg_logo from "../public/images/bg_blur.gif";
import Sliders from "../components/sliders/MySlaider/Sliders";

export default function Home() {
    const styled = {
        backgroundImage: `url(${bg_logo.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    }

  const [show, setShow] = useState(false)


  const clickScroll = (е: any) => {
      const main = document.getElementsByTagName('main');
      const windowInnerHeight = main[0].offsetHeight + main[0].offsetTop;
      window.scrollTo({ top: windowInnerHeight, behavior: 'smooth'});
  }

  return (
    <div  className={styles.container}>
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
