import styles from './FooterSection.module.css';

const FooterSection = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerColumnSmall}>
                <h3>Öppettider i butik</h3>
                <p>Måndag - Fredag 06.45 - 18.00</p>
                <p>Lördag 10.00 - 16.00</p>
                <p>Söndag 11.00 - 15.00</p>
                <p>OBS. Avvikande öppettider vissa helgdagar</p>
            </div>
            <div className={styles.footerColumnSmall}>
                <h3>Kontakt</h3>
                <p>E-mail: info@norrlandsfarg.se</p>
                <p>Butik: Norrlandsfärg AB Förmansvägen 24 863 41 Sundsvall</p>
                <p>Orgnr: 556097-4759</p>
                <p>Momsregnr: SE556097475901</p>
                <p>Telefon: +46 60 101 875</p>
            </div>
            <div className={styles.footerColumnSmall}>
                <h3>Snabblänkar</h3>
                <a>Om oss</a>
            </div>
            <div className={styles.footerColumnBig}>
                <h3>Låt oss hålla kontakten</h3>
                <p>
                    Vill du ha extraordinära erbjudanden och de senaste nyheterna inom färg, tapeter
                    och golv? Du får även suveräna tips från fackhandeln gällande målning och annat.
                    Vi kommer även bjuda på överraskningar. Garanterat spamfritt!
                </p>
                <input />
            </div>
        </div>
    );
};

export default FooterSection;
