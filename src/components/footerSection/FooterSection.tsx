import React from 'react';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import styles from './FooterSection.module.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FooterSection = () => {
    let isMobile = useCheckMobileScreen();

    const [showOpenhours, setShowOpenhours] = React.useState<boolean>(false);
    const [showContact, setShowContact] = React.useState<boolean>(false);
    const [showLinks, setShowLinks] = React.useState<boolean>(false);

    if (isMobile) {
        return (
            <div>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F6F6F6',
                        padding: '12px',
                        borderBottom: '1px solid lightgray'
                    }}
                    onClick={() => setShowOpenhours(!showOpenhours)}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ padding: 0, margin: 0 }}>Öppettider i butik</h3>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 10px'
                            }}
                        >
                            {!showOpenhours ? <AddIcon /> : <RemoveIcon />}
                        </div>
                    </div>

                    {showOpenhours ? (
                        <>
                            <p>Måndag - Fredag 06.45 - 18.00</p>
                            <p>Lördag 10.00 - 16.00</p>
                            <p>Söndag 11.00 - 15.00</p>
                            <p style={{ margin: 0 }}>OBS. Avvikande öppettider vissa helgdagar</p>
                        </>
                    ) : null}
                </div>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F6F6F6',
                        padding: '12px',
                        borderBottom: '1px solid lightgray'
                    }}
                    onClick={() => setShowContact(!showContact)}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ padding: 0, margin: 0 }}>Kontakt</h3>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 10px'
                            }}
                        >
                            {!showContact ? <AddIcon /> : <RemoveIcon />}
                        </div>
                    </div>

                    {showContact ? (
                        <>
                            <p>E-mail: info@norrlandsfarg.se</p>
                            <p>Butik: Norrlandsfärg AB Förmansvägen 24 863 41 Sundsvall</p>
                            <p>Orgnr: 556097-4759</p>
                            <p>Momsregnr: SE556097475901</p>
                            <p>Telefon: +46 60 101 875</p>
                        </>
                    ) : null}
                </div>
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F6F6F6',
                        padding: '12px',
                        borderBottom: '1px solid lightgray'
                    }}
                    onClick={() => setShowLinks(!showLinks)}
                >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <h3 style={{ padding: 0, margin: 0 }}>Snabblänkar</h3>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 10px'
                            }}
                        >
                            {!showLinks ? <AddIcon /> : <RemoveIcon />}
                        </div>
                    </div>

                    {showLinks ? <a>Om oss</a> : null}
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F6F6F6',
                        padding: '12px'
                    }}
                >
                    <h3>Låt oss hålla kontakten</h3>
                    <p>
                        Vill du ha extraordinära erbjudanden och de senaste nyheterna inom färg,
                        tapeter och golv? Du får även suveräna tips från fackhandeln gällande
                        målning och annat. Vi kommer även bjuda på överraskningar. Garanterat
                        spamfritt!
                    </p>
                    <input />
                </div>
            </div>
        );
    }

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
