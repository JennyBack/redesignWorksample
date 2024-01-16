import styles from './HeaderMain.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const HeaderMain = () => {
    return (
        <div aria-label="header-main" className={styles.headerWrapper}>
            <div>
                <input style={{ borderBottom: '1px solid black' }} />
            </div>
            <div>
                <img src="/logo.webp" alt="logo" />
            </div>
            <div>
                <a href={'https://norrlandsfarg.se/sv/page/kopvillkor'}>Kundtjänst</a>
                <a href={''}>Hitta butik</a>
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative'
                }}
            >
                <AccountCircleIcon />
                <div>
                    <div className={styles.cartCountChip}>0</div>
                    <ShoppingBasketIcon />
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
