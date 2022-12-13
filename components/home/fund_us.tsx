import Image from "next/image";
import style from "./fund_us.module.scss";
import Link from "next/link";

const FundUs = () => {
    return (
        <div className={style.main}>
            <h2 id="contacts" className={style.tittle}>Join us! It will only take a minute</h2>
            <ul className={style.list}>
                <Link href="https://www.facebook.com/profile.php?id=100088417534045" target="_blank">
                    <li className={style.list__item}>
                        <Image className={style.item__img} src="/images/facebook.svg" alt="facebook_logo" width={64} height={64}/>
                        <h5 className={style.item__name} >facebook</h5>
                    </li>
                </Link>
                <Link href="#">
                    <li className={style.list__item}>
                        <Image className={style.item__img} src="/images/steam.svg" alt="steam_logo" width={64} height={64}/>
                        <h5 className={style.item__name}>steam</h5>
                    </li>
                </Link>
                <Link href="#">
                    <li className={style.list__item}>
                        <Image className={style.item__img} src="/images/psvr.svg" alt="PSVR_logo" width={64} height={64}/>
                        <h5 className={style.item__name}>PSVR</h5>
                    </li>
                </Link>
                    <Link href="#">
                    <li className={style.list__item}>
                        <Image className={style.item__img} src="/images/discord.svg" alt="DISCORD_logo" width={64} height={64}/>
                        <h5 className={style.item__name}>DISCORD</h5>
                    </li>
                </Link>
            </ul>
        </div>
    );
};

export default FundUs;