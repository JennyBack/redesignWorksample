import { style } from '@mui/system';
import styles from './Puff.module.css';
import EastIcon from '@mui/icons-material/East';
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';

const Puff = () => {
    let isMobile = useCheckMobileScreen();

    return !isMobile ? (
        <div aria-label="puff-section" className={styles.puffWrapper}>
            <div className={styles.column}>
                <img src="/QJS9niJNxCpoWLZ1683546027.webp" alt="" className={styles.puffImg} />
            </div>
            <div className={styles.column}>
                <div className={styles.puffTextCol}>
                    <h3>Ska du måla om husfasaden?</h3>
                    <p>
                        Här får du lite sköna tips på hur dy lyckas med en snygg och hållbar
                        husfasad
                    </p>
                    <a
                        className={styles.link}
                        href="https://norrlandsfarg.se/sv/page/ska-du-mala-om-fasaden"
                    >
                        <h3 style={{ margin: '2px' }}>Läs mer</h3>
                        <EastIcon />
                    </a>
                </div>
            </div>
        </div>
    ) : null;
};

export default Puff;
