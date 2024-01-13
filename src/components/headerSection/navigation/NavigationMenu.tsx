import { MenuItem } from '../HeaderSection';
import styles from './NavigationMenu.module.css';

type NavigationMenuProps = {
    menuItems: MenuItem[];
};

const NavigationMenu = ({ menuItems }: NavigationMenuProps) => {
    return (
        <div aria-label="navigation-menu" className={styles.navigationWrapper}>
            <ul aria-label="navigation-list" className={styles.navigationList}>
                {menuItems.map((item) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationMenu;
