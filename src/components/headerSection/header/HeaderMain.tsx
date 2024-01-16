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
            <div style={{ backgroundColor: 'rgba(100,100,100, 0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '25%', marginLeft: '3%' }}>
                        <MenuIcon sx={{ height: '30px', width: '30px', color: '#0000007d' }} />
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
                            width: '25%'
                        }}
                    >
                        <div style={{ marginRight: '10px' }}>
                            <AccountCircleIcon
                                sx={{ height: '30px', width: '30px', color: '#0000007d' }}
                            />
                        </div>

                        <div style={{ position: 'relative' }}>
                            <ShoppingBasketIcon
                                sx={{ height: '30px', width: '30px', color: '#0000007d' }}
                            />

                            <div className={styles.cartCountChip}>
                                <p style={{ color: 'white' }}>0</p>
                            </div>
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
                    <SearchIcon sx={{ height: '30px', width: '30px', color: '#737373' }} />
                    <input />
                </div>
            </div>
        );
    }
    return (
        <div aria-label="header-main" className={styles.headerWrapper}>
            <div
                style={{
                    width: '33%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    margin: 'auto'
                }}
            >
                <SearchIcon sx={{ height: '30px', width: '30px', color: '#737373' }} />
                <input style={{ borderBottom: '1px solid black' }} />
            </div>
            <div
                style={{ display: 'flex', justifyContent: 'center', margin: 'auto', width: '33%' }}
            >
                <img src="/logo.webp" alt="logo" />
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    width: '33%'
                }}
            >
                <div>
                    <a
                        style={{ textDecoration: 'none', color: 'black', marginRight: '20px' }}
                        href={'https://norrlandsfarg.se/sv/page/kopvillkor'}
                    >
                        Kundtjänst
                    </a>
                    <a style={{ textDecoration: 'none', color: 'black' }} href={''}>
                        Hitta butik
                    </a>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        margin: 'auto',
                        alignItems: 'center'
                    }}
                >
                    <div style={{ cursor: 'pointer', marginRight: '15px' }}>
                        <AccountCircleIcon
                            sx={{ height: '30px', width: '30px', color: '#737373' }}
                        />
                    </div>
                    <div style={{ position: 'relative', cursor: 'pointer' }}>
                        <ShoppingBasketIcon
                            sx={{ height: '30px', width: '30px', color: '#737373' }}
                        />

                        <div className={styles.cartCountChip}>
                            <p style={{ color: 'white' }}>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;
