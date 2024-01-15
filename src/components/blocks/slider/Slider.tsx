import React, { Children, useState } from 'react';
import styles from './Slider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
        img: '/eyJrZXkiOiJzdG9yZV9lN2Q5OTFiNy00YWRkLTQ0NzQtYmI4ZS1lZDIzYzZhYmM5MDhcL2ltYWdlc1wvN00xNDNscDI2bWlqQXZUMTY3ODA5Mzg0OC5qcGVnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo0MDAsImhlaWdodCI6NDAwLCJ.webp',
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
    const step = 8;
    const isScrollRef = React.useRef();
    let scrollRef = React.useRef<HTMLDivElement>(null);
    let containerRef = React.useRef<HTMLUListElement>(null);
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

    const [showHoverCard, setShowHoverCard] = React.useState<boolean>(false);
    const [activeCardId, setActiveCardId] = React.useState<number | null>(null);

    const handleHoverCard = (id: number, isOver: boolean) => {
        setShowHoverCard(isOver);
        setActiveCardId(id);
    };

    const ProductListItem = ({ product }: ProductListItemProps) => {
        return (
            <li
                key={product.id}
                className={styles.productsListItem}
                onMouseEnter={() => handleHoverCard(product.id, true)}
                onMouseLeave={() => handleHoverCard(product.id, false)}
            >
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
                    <img src={product.img} alt="product" className={styles.productsListImage} />
                    {showHoverCard && product.id === activeCardId ? (
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '10px',
                                height: '100%',
                                width: '100%',
                                zIndex: '300'
                            }}
                        >
                            <p style={{ padding: '2px' }}>4/5</p>
                            <AddShoppingCartIcon sx={{ padding: '2px' }} />
                        </div>
                    ) : null}
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
                        <p
                            style={{
                                padding: 0,
                                margin: 0,
                                textDecoration: 'line-through'
                            }}
                        >
                            300,00kr
                        </p>
                    </div>
                </div>
            </li>
        );
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

export default Slider;
