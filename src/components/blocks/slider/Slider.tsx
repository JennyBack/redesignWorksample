import React, { Children, useState } from 'react';
import styles from './Slider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const products = [
    {
        id: 1,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 4,
        description: ''
    },
    {
        id: 2,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 5,
        description: ''
    },
    {
        id: 3,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 5,
        description: ''
    },
    {
        id: 5,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 5,
        description: ''
    },
    {
        id: 6,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 5,
        description: ''
    },
    {
        id: 7,
        img: '',
        title: '',
        price: '',
        category: '',
        rating: 5,
        description: ''
    }
];

const Slider = () => {
    const step = 5;
    const isScrollRef = React.useRef();
    let scrollRef = React.useRef<HTMLDivElement>(null);

    const setMove = (state: any) => (isScrollRef.current = state);

    const moveLeft = () => {
        if (isScrollRef.current && scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + step;
            requestAnimationFrame(moveLeft);
        }
    };
    const moveRight = () => {
        if (isScrollRef.current && scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - step;
            requestAnimationFrame(moveRight);
        }
    };

    return (
        <div className={styles.sliderContainer}>
            <div ref={scrollRef} aria-label="product-slider" className={styles.productsWrapper}>
                <div
                    ref={scrollRef}
                    className={styles.buttonLeft}
                    onMouseDown={() => {
                        setMove(true);
                        moveLeft();
                    }}
                    onMouseUp={() => setMove(false)}
                >
                    <ChevronLeftIcon />
                </div>
                <ul className={styles.productsList}>
                    {products.map((product, index) => (
                        <li key={product.id} className={styles.productsListItem}>
                            product{index}
                        </li>
                    ))}
                </ul>
                <div
                    ref={scrollRef}
                    className={styles.buttonRight}
                    onMouseDown={() => {
                        setMove(true);
                        moveRight();
                    }}
                    onMouseUp={() => setMove(false)}
                >
                    <ChevronRightIcon />
                </div>
            </div>
        </div>
    );
};

export default Slider;
