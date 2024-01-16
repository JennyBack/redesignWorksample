import { useState } from 'react';
import HeaderMain from './header/HeaderMain';
import NavigationMenu from './navigation/NavigationMenu';
import TopBar from './topBar/TopBar';
import styles from './HeaderSection.module.css';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

export type MenuItem = {
    id: number;
    title: string;
};

export type TopBarItem = {
    id: number;
    title: string;
};

const menuItems: MenuItem[] = [
    { id: 1, title: 'Hem' },
    { id: 2, title: 'Måla' },
    { id: 3, title: 'Målartillbehör' },
    { id: 4, title: 'Stall & Lantbruk' },
    { id: 5, title: 'Mattor' },
    { id: 6, title: 'Tapeter' },
    { id: 7, title: 'Inspiration' }
];

const topBarItems: TopBarItem[] = [
    { id: 1, title: 'Snabba leveranser' },
    { id: 2, title: 'Fri frakt över 799kr' },
    { id: 3, title: 'Butik & Online' }
];

const HeaderSection = () => {
    const [showFullHeader, setshowFullHeader] = useState(true);
    let isMobile = useCheckMobileScreen();

    const toggleshowFullHeader = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setshowFullHeader(() => false);
        } else if (scrolled <= 300) {
            setshowFullHeader(() => true);
        }
    };

    window.addEventListener('scroll', toggleshowFullHeader);

    return (
        <div className={styles.headerSectionWrapper}>
            <div
                style={{
                    opacity: isMobile ? '1' : !showFullHeader ? '0' : '1',
                    transition: 'all .3s',
                    visibility: isMobile ? 'visible' : !showFullHeader ? 'hidden' : 'visible',
                    height: isMobile ? '' : !showFullHeader ? '0px' : ''
                }}
            >
                <TopBar topBarItems={topBarItems} />
                <HeaderMain />
            </div>
            <NavigationMenu menuItems={menuItems} />
        </div>
    );
};

export default HeaderSection;
