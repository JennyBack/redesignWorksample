import React, { Children, useState } from 'react';
import styles from './Slider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

type ProductListItemProps = {
    product: Product;
};

type Product = {
    id: number;
    img: string;
    title: string;
    price: string;
    category: string;
    rating: number;
    description: string;
};

const products: Product[] = [
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
    let containerRef = React.useRef<HTMLUListElement>(null);

    const setMove = (state: any) => (isScrollRef.current = state);

    const moveLeft = () => {
        if (isScrollRef.current && scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollLeft + step;
            requestAnimationFrame(moveLeft);
        }
    };
    const moveRight = () => {
        if (isScrollRef.current && scrollRef.current && containerRef.current) {
            containerRef.current.scrollLeft = containerRef.current.scrollLeft - step;
            requestAnimationFrame(moveRight);
        }
    };

    const ProductListItem = ({ product }: ProductListItemProps) => {
        return (
            <li key={product.id} className={styles.productsListItem}>
                {product.id === 2 ? (
                    <div
                        style={{
                            borderRadius: '50%',
                            height: '70px',
                            width: '70px',
                            position: 'absolute',
                            top: '-3px',
                            right: '-3px',
                            backgroundColor: 'rgb(124, 39, 29)',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: '30'
                        }}
                    >
                        <p style={{ color: 'white' }}>Fynd</p>
                    </div>
                ) : null}
                <div style={{ width: '100%', height: '75%', backgroundColor: 'lightgray' }}>
                    <img src="#" alt="product" className={styles.productsListImage} />
                </div>
                <div className={styles.listTextSection}>
                    <p style={{ padding: 0, margin: 0 }}>Inomhusfärg</p>
                    <h4 style={{ padding: 0, margin: 0 }}>Lady Elegans</h4>
                    <p style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor</p>
                    <div style={{ display: 'flex' }}>
                        <p
                            style={{
                                padding: 0,
                                margin: 0,
                                color: product.id === 2 ? 'rgb(124, 39, 29)' : ''
                            }}
                        >
                            200,00kr
                        </p>
                        <p style={{ padding: 0, margin: 0, textDecoration: 'line-through' }}>
                            300,00kr
                        </p>
                    </div>
                </div>
            </li>
        );
    };

    return (
        <div className={styles.sliderContainer}>
            <div aria-label="product-slider" className={styles.productsWrapper}>
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
                <div>
                    <ul ref={containerRef} className={styles.productsList}>
                        {products.map((product: Product) => (
                            <ProductListItem product={product} />
                        ))}
                    </ul>
                </div>

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
