import styles from './Hero.module.css';
import EastIcon from '@mui/icons-material/East';

const Hero = () => {
    return (
        <div aria-label="hero" className={styles.heroWrapper}>
            <div className={styles.heroText}>
                <h2 className={styles.heroTitle}>Tidlös elegans</h2>
                <hr style={{ border: '1px solid black' }} />
                <p className={styles.heroParagraph}>
                    Lady Essence blandas till färger som står emot tidens tand. Dessa nyanser är
                    skapade med omsorg för att vara lika aktuella idag som de kommer vara i
                    framtiden.
                </p>
                <div>
                    <a
                        className={styles.link}
                        href="https://norrlandsfarg.se/sv/products/vaggfarg-lady-essence-silkesmatt-jotun/3897"
                    >
                        <h3 style={{ margin: '2px' }}>Läs mer</h3>
                        <EastIcon />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
