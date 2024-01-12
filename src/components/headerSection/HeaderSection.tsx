import HeaderMain from './header/HeaderMain';
import NavigationMenu from './navigation/NavigationMenu';
import TopBar from './topBar/TopBar';

const HeaderSection = () => {
    return (
        <>
            <TopBar />
            <HeaderMain />
            <NavigationMenu />
        </>
    );
};

export default HeaderSection;
