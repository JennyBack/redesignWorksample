import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <KeyboardArrowUpIcon
            onClick={scrollToTop}
            style={{
                display: visible ? 'inline' : 'none',
                height: '40px',
                width: '40px'
            }}
            className={styles.scrollButton}
        />
    );
};

export default ScrollToTopButton;
