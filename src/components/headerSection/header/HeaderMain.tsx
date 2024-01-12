import styles from './HeaderMain.module.css';

const HeaderMain = () => {
    return (
        <div aria-label="header-main" className={styles.headerWrapper}>
            <div>
                <input />
            </div>
            <div>
                <img src="/logo.webp" alt="logo" />
            </div>
            <div>User Icons</div>
        </div>
    );
};

export default HeaderMain;
