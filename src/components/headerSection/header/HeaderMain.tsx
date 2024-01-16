import styles from './HeaderMain.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const HeaderMain = () => {
    let isMobile = useCheckMobileScreen();

    if (isMobile) {
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '25%', marginLeft: '3%' }}>
                        <MenuIcon />
                    </div>

                    <div style={{ height: '4em', width: '50%' }}>
                        <img
                            src="/logo.webp"
                            alt="logo"
                            style={{ height: '100%', width: 'auto' }}
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            width: '25%',
                            marginRight: '3%'
                        }}
                    >
                        <AccountCircleIcon />
                        <div>
                            <div className={styles.cartCountChip}>0</div>
                            <ShoppingBasketIcon />
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        height: '5em'
                    }}
                >
                    <SearchIcon />
                    <input />
                </div>
            </div>
        );
    }
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
