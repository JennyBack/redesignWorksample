import { TopBarItem } from '../HeaderSection';
import styles from './TopBar.module.css';
import CheckIcon from '@mui/icons-material/Check';

type TopBarProps = {
    topBarItems: TopBarItem[];
};

const TopBar = ({ topBarItems }: TopBarProps) => {
    return (
        <div aria-label="top-bar" className={styles.wrapper}>
            <ul aria-label="top-bar-content" className={styles.list}>
                {topBarItems.map((item) => (
                    <li key={item.id} className={styles.listItem}>
                        <CheckIcon
                            sx={{
                                height: '0.8em',
                                width: 'auto',
                                color: 'rgb(124, 39, 29)',
                                paddingRight: '3px'
                            }}
                        />
                        <h3 style={{ fontSize: '14px', fontWeight: 'lighter' }}>{item.title}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopBar;
