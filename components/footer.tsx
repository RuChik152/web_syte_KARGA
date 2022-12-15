import style from "./footer.module.scss";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.copyright}>
                <p className={style.copyright__icon}>&#169;</p>
                <p className={style.copyright__text}>Created by BeliVR team 2022</p>
            </div>
            <Link className={style.btn__contact} href="/idea">
                Contact as
            </Link>
            <div className={style.docs} >
                <Link className={style.docs__link} href="/privat_policy">
                    Privacy Policy
                </Link>
                <Link className={style.docs__link} href="/terms_and_conditions">
                    Terms of use
                </Link>
            </div>
        </footer>
    );
};

export default Footer;