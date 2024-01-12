import styles from './Categories.module.css';

const Categories = () => {
    return (
        <div aria-label="categories" className={styles.categoriesWrapper}>
            <ul className={styles.categoriesList}>
                <li
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        alt="category-image"
                        src="/cGJRpB59cYiaVAs1673384775.webp"
                        className={styles.categoriesListImage}
                    />
                    <p>Olja & Bets</p>
                </li>
                <li
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        alt="category-image"
                        src="/J7Rj4OTRLr8NJ2X1673384628.jpeg"
                        className={styles.categoriesListImage}
                    />
                    <p>Väggfärg</p>
                </li>
                <li
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        alt="category-image"
                        src="/1ttJcRCF2kT3bzW1673384753.jpeg"
                        className={styles.categoriesListImage}
                    />
                    <p>Lack & Snickerifärg</p>
                </li>
                <li
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <img
                        alt="category-image"
                        src="/Tv1jiskJm0FI2L41673384525.jpeg"
                        className={styles.categoriesListImage}
                    />
                    <p>Penslar</p>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
