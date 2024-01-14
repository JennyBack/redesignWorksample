import styles from './ProductsList.module.css';

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

const ProductsList = () => {
    return (
        <div className={styles.productsListWrapper}>
            <ul className={styles.productsList}>
                {products.map((product) => (
                    <li key={product.id} className={styles.productsListItem}>
                        product
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductsList;
