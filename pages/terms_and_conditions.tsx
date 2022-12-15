import React from 'react';
import style from "../styles/terms_and_conditions.module.scss";

const TermsAndConditions = () => {
    return (
        <div className={style.main}>
            <h2 className={style.title}>Terms and Conditions of Use</h2>
            <div className={style.block}>
                <h3 className={style.block__h3}>1. Term</h3>
                <p className={style.block__p}>By accessing this Website, accessible from https://karga.belivr.tech/, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>2. Use License</h3>
                <p className={style.block__p}>Permission is granted to temporarily download one copy of the materials on BeliVR's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                <ul className={style.block__list}>
                    <li className={style.list__item}>modify or copy the materials;</li>
                    <li className={style.list__item}>use the materials for any commercial purpose or for any public display;</li>
                    <li className={style.list__item}>attempt to reverse engineer any software contained on BeliVR's Website;</li>
                    <li className={style.list__item}>remove any copyright or other proprietary notations from the materials;</li>
                    <li className={style.list__item}>transferring the materials to another person or "mirror" the materials on any other server</li>
                    <p className={style.block__p}>This will let BeliVR to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.</p>
                </ul>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>3. Disclaimer</h3>
                <p className={style.block__p}>All the materials on BeliVR’s Website are provided "as is". BeliVR makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, BeliVR does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>4. Limitations</h3>
                <p className={style.block__p}>BeliVR or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on BeliVR’s Website, even if BeliVR or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>5. Revisions and Errata</h3>
                <p className={style.block__p}>The materials appearing on BeliVR’s Website may include technical, typographical, or photographic errors. BeliVR will not promise that any of the materials in this Website are accurate, complete, or current. BeliVR may change the materials contained on its Website at any time without notice. BeliVR does not make any commitment to update the materials.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>6. Links</h3>
                <p className={style.block__p}>BeliVR has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by BeliVR of the site. The use of any linked website is at the user’s own risk.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>7. Site Terms of Use Modifications</h3>
                <p className={style.block__p}>BeliVR may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>8. Your Privacy</h3>
                <p className={style.block__p}>Please read our Privacy Policy.</p>
            </div>
            <div className={style.block}>
                <h3 className={style.block__h3}>9. Governing Law</h3>
                <p className={style.block__p}>Any claim related to BeliVR's Website shall be governed by the laws of us without regards to its conflict of law provisions</p>
            </div>
        </div>
    );
};

export default TermsAndConditions;