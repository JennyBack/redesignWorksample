import styles from './TopBar.module.css';

const TopBar = () => {
    return (
        <div aria-label="top-bar" className={styles.wrapper}>
            <ul aria-label="top-bar-content" className={styles.list}>
                <li>
                    <h3 style={{ fontSize: '14px', fontWeight: 'lighter' }}>
                        This is a sample banner text
                    </h3>
                </li>
            </ul>
        </div>
    );
};

export default TopBar;
