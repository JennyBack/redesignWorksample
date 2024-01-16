import useCheckMobileScreen from '../../../hooks/useCheckMobileScreen';
import { MenuItem } from '../HeaderSection';
import styles from './NavigationMenu.module.css';

type NavigationMenuProps = {
    menuItems: MenuItem[];
};

const NavigationMenu = ({ menuItems }: NavigationMenuProps) => {
    let isMobile = useCheckMobileScreen();
    return !isMobile ? (
        <div aria-label="navigation-menu" className={styles.navigationWrapper}>
            <ul aria-label="navigation-list" className={styles.navigationList}>
                {menuItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default NavigationMenu;
