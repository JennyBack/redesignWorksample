import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
    return (
        <div aria-label="navigation-menu">
            <ul aria-label="navigation-list" className={styles.navigationWrapper}>
                <li>menu1</li>
                <li>menu2</li>
                <li>menu3</li>
            </ul>
        </div>
    );
};

export default NavigationMenu;
