import HeaderMain from './header/HeaderMain';
import NavigationMenu from './navigation/NavigationMenu';
import TopBar from './topBar/TopBar';

const HeaderSection = () => {
    return (
        <div style={{ backgroundColor: 'rgba(255,255,255, 0.7)', zIndex: 10 }}>
            <TopBar />
            <HeaderMain />
            <NavigationMenu />
        </div>
    );
};

export default HeaderSection;
