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
                    <li key={item.id}>
                        <h4
                            style={{
                                textTransform: 'uppercase',
                                padding: 0,
                                margin: 0,
                                fontWeight: 600,
                                cursor: 'pointer'
                            }}
                        >
                            {item.title}
                        </h4>
                    </li>
                ))}
            </ul>
        </div>
    ) : null;
};

export default NavigationMenu;
