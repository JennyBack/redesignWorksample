import React, { Children, useState } from 'react';
import styles from './ProductSlider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ProductListItem from '../productsList/ProductListItem';

export type Product = {
    id: number;
    img: string;
    title: string;
    price: string;
    category: string;
    rating: number;
    description: string;
    reducedPrice: string;
};

const products: Product[] = [
    {
        id: 1,
        img: '/eyJrZXkiOiJzdG9yZV9lN2Q5OTFiNy00YWRkLTQ0NzQtYmI4ZS1lZDIzYzZhYmM5MDhcL2ltYWdlc1wvN00xNDNscDI2bWlqQXZUMTY3ODA5Mzg0OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJ.webp',

        title: 'Lady Elegans',
        price: '450,00',
        category: 'Inomhusfärg',
        rating: 4,
        description: '',
        reducedPrice: ''
    },
    {
        id: 2,
        img: '/eyJrZXkiOiJzdG9yZV9lN2Q5OTFiNy00YWRkLTQ0NzQtYmI4ZS1lZDIzYzZhYmM5MDhcL2ltYWdlc1wvN00xNDNscDI2bWlqQXZUMTY3ODA5Mzg0OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJ.webp',
        title: 'Lackfärg',
        price: '300,00',
        category: 'Bets & Lack',
        rating: 5,
        description: '',
        reducedPrice: '200,00'
    },
    {
        id: 3,
        img: '/eyJrZXkiOiJzdG9yZV9lN2Q5OTFiNy00YWRkLTQ0NzQtYmI4ZS1lZDIzYzZhYmM5MDhcL2ltYWdlc1wvN00xNDNscDI2bWlqQXZUMTY3ODA5Mzg0OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJ.webp',

        title: 'Falu rödfärg',
        price: '150,00',
        category: 'Utomhusfärg',
        rating: 5,
        description: '',
        reducedPrice: ''
    },
    {
        id: 5,
        img: '',
        title: 'Målarborste',
        price: '50,00',
        category: 'Penslar',
        rating: 5,
        description: '',
        reducedPrice: ''
    },
    {
        id: 6,
        img: '',
        title: 'Takfärg',
        price: '399,00',
        category: 'Inomhusfärg',
        rating: 5,
        description: '',
        reducedPrice: ''
    },
    {
        id: 7,
        img: '',
        title: 'Fönsterlack',
        price: '1200,00',
        category: 'Utomhusfärg',
        rating: 5,
        description: '',
        reducedPrice: ''
    }
];

const ProductSlider = () => {
    const step = 8;
    const isScrollRef = React.useRef();
    let scrollRef = React.useRef<HTMLDivElement>(null);
    let testRef = React.useRef<HTMLDivElement>(null);

    const setMove = (state: any) => (isScrollRef.current = state);

    const moveLeft = () => {
        if (isScrollRef.current && scrollRef.current && testRef.current) {
            testRef.current.scrollLeft = testRef.current.scrollLeft - step;
            requestAnimationFrame(moveLeft);
        }
    };
    const moveRight = () => {
        if (isScrollRef.current && scrollRef.current && testRef.current) {
            testRef.current.scrollLeft = testRef.current.scrollLeft + step;
            requestAnimationFrame(moveRight);
        }
    };

    return (
        <div ref={testRef} className={styles.sliderContainer}>
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
                    <ul className={styles.productsList}>
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

export default ProductSlider;
