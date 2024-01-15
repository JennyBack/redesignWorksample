import styles from './ProductsList.module.css';
import { Product } from '../productSlider/ProductSlider';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

type ProductListItemProps = {
    product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
    const [showHoverCard, setShowHoverCard] = React.useState<boolean>(false);
    const [activeCardId, setActiveCardId] = React.useState<number | null>(null);

    const handleHoverCard = (id: number, isOver: boolean) => {
        setShowHoverCard(isOver);
        setActiveCardId(id);
    };

    let currency = 'kr';
    return (
        <li
            key={product.id}
            className={styles.productsListItem}
            onMouseEnter={() => handleHoverCard(product.id, true)}
            onMouseLeave={() => handleHoverCard(product.id, false)}
        >
            {product.reducedPrice != '' ? (
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

            <div style={{ width: '100%', height: '75%' }}>
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
                <p
                    style={{
                        padding: 0,
                        margin: 0,
                        textTransform: 'uppercase',
                        fontSize: '13px'
                    }}
                >
                    {product.category}
                </p>
                <h4 style={{ padding: 0, margin: 0, fontSize: '17px' }}>{product.title}</h4>
                <p style={{ padding: 0, margin: 0 }}>Lorem ipsum dolor</p>
                <div style={{ display: 'flex' }}>
                    <p
                        style={{
                            padding: 0,
                            margin: 0,
                            color: product.reducedPrice != '' ? 'rgb(124, 39, 29)' : ''
                        }}
                    >
                        {product.price}
                        {currency}
                    </p>
                    {product.reducedPrice != '' ? (
                        <p
                            style={{
                                padding: 0,
                                margin: '0 0 0 10px',
                                textDecoration: 'line-through'
                            }}
                        >
                            {product.reducedPrice}
                            {currency}
                        </p>
                    ) : null}
                </div>
            </div>
        </li>
    );
};

export default ProductListItem;
