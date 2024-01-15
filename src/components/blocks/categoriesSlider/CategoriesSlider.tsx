import React from 'react';
import styles from './CategoriesSlider.module.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { CategoryItem } from '../../mainSection/MainSection';

type CategoriesSliderProps = {
    categories: CategoryItem[];
};

export const useIsOverflow = (ref: any) => {
    const [isOverflow, setIsOverflow] = React.useState<boolean>(false);

    React.useLayoutEffect(() => {
        const { current } = ref;

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth;

            setIsOverflow(hasOverflow);
        };

        if (current) {
            trigger();
        }
    });

    return isOverflow;
};

const CategoriesSlider = ({ categories }: CategoriesSliderProps) => {
    const step = 8;
    const isScrollRef = React.useRef();
    let scrollRef = React.useRef<HTMLDivElement>(null);
    let testRef = React.useRef<HTMLDivElement>(null);

    const isOverflow: boolean = useIsOverflow(testRef);

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
                {isOverflow ? (
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
                ) : null}

                <ul
                    className={isOverflow ? styles.categoriesList : styles.categoriesListNoOverflow}
                >
                    {categories.map((category) => (
                        <li key={category.id} className={styles.categoriesListItem}>
                            <img
                                alt="category-image"
                                src={category.img}
                                className={styles.categoriesListImage}
                            />
                            <p style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                {category.title}
                            </p>
                        </li>
                    ))}
                </ul>

                {isOverflow ? (
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
                ) : null}
            </div>
        </div>
    );
};

export default CategoriesSlider;
