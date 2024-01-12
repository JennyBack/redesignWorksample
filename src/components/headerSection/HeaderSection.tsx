import HeaderMain from './header/HeaderMain';
import NavigationMenu from './navigation/NavigationMenu';
import TopBar from './topBar/TopBar';

const HeaderSection = () => {
    return (
        <div
            style={{
                backgroundColor: 'rgba(255,255,255, 0.7)',
                zIndex: 10,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0
            }}
        >
            <TopBar />
            <HeaderMain />
            <NavigationMenu />
        </div>
    );
};

export default HeaderSection;
