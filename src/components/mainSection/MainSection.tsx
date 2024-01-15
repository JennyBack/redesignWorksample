import React from 'react';
import BlogPostList from '../blocks/blogPostList/BlogPostList';
import Categories from '../blocks/categories/Categories';
import Hero from '../blocks/hero/Hero';
import Puff from '../blocks/puff/Puff';
import ProductSlider from '../blocks/productSlider/ProductSlider';
import CategoriesSlider from '../blocks/categoriesSlider/CategoriesSlider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';

export type CategoryItem = {
    id: number;
    categoryId: number;
    img: string;
    title: string;
};

export type BlogPost = {
    id: number;
    img: string;
    title: string;
    description: string;
    link: string;
};

const blogPosts: BlogPost[] = [
    {
        id: 1,
        img: '/hy3ETgWe8pFf80s1673383884.webp',
        title: 'Väggfärg',
        description: 'Lorem ipsum',
        link: ''
    },
    {
        id: 2,
        img: '/MBlM5i6Ax80y1DG1680511066.webp',
        title: '',
        description: 'Lorem ipsum',
        link: ''
    },
    {
        id: 3,
        img: '/MBlM5i6Ax80y1DG1680511066.webp',
        title: '',
        description: 'Lorem ipsum',
        link: ''
    },
    {
        id: 4,
        img: '/RjGWXPkeonW1OJt1678271271.webp',
        title: '',
        description: 'Lorem ipsum',
        link: ''
    }
];

const categoryItems: CategoryItem[] = [
    {
        id: 1,
        categoryId: 1,
        img: '/cGJRpB59cYiaVAs1673384775.webp',
        title: 'Olja & Bets'
    },
    {
        id: 2,
        categoryId: 2,
        img: '/J7Rj4OTRLr8NJ2X1673384628.jpeg',
        title: 'Väggfärg'
    },
    {
        id: 3,
        categoryId: 2,
        img: '/1ttJcRCF2kT3bzW1673384753.jpeg',
        title: 'Lack & Snickerifärg'
    },
    {
        id: 4,
        categoryId: 0,
        img: '/Tv1jiskJm0FI2L41673384525.jpeg',
        title: 'Penslar'
    },
    {
        id: 5,
        categoryId: 1,
        img: '/cGJRpB59cYiaVAs1673384775.webp',
        title: 'Grundfärg'
    },
    {
        id: 6,
        categoryId: 1,
        img: '/Tv1jiskJm0FI2L41673384525.jpeg',
        title: 'Kalkfärg'
    },
    {
        id: 7,
        categoryId: 2,
        img: '/cGJRpB59cYiaVAs1673384775.webp',
        title: 'Mur & Puts'
    }
];

const filterCategories = (categoryItems: CategoryItem[], selectedCategory: string) => {
    const categoryFilter = (category: CategoryItem) => {
        if (selectedCategory === '') {
            return true;
        }

        if (category.categoryId === 0) {
            return true;
        }

        if (selectedCategory) {
            return category.categoryId.toString() === selectedCategory;
        }
    };

    return categoryItems.filter(categoryFilter);
};

const MainSection = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string>('');

    const handleChangeSelectedCategories = React.useCallback((event: any) => {
        setSelectedCategory(event.target.id);
    }, []);

    const filteredCategories = filterCategories(categoryItems, selectedCategory);

    return (
        <>
            <Hero />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',

                    margin: '20px 200px'
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start'
                    }}
                >
                    <h2>Populära kategorier</h2>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <TuneIcon />
                    <ul style={{ display: 'flex', listStyle: 'none' }}>
                        <li
                            key={''}
                            id={''}
                            onClick={(e) => handleChangeSelectedCategories(e)}
                            style={{ margin: ' 0 10px', cursor: 'pointer' }}
                        >
                            Alla
                        </li>
                        <li
                            key={'1'}
                            id={'1'}
                            onClick={(e) => handleChangeSelectedCategories(e)}
                            style={{ margin: '0 10px', cursor: 'pointer' }}
                        >
                            Inomhusfärg
                        </li>
                        <li
                            key={'2'}
                            id={'2'}
                            onClick={(e) => handleChangeSelectedCategories(e)}
                            style={{ margin: ' 0 10px', cursor: 'pointer' }}
                        >
                            Utomhusfärg
                        </li>
                    </ul>
                </div>
            </div>
            <CategoriesSlider categories={filteredCategories} />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px 400px'
                }}
            >
                <h2>
                    Hos oss på Norrlandsfärg har det sedan starten 1965 varit självklart med god
                    kundservice. Du kan känna dig trygg med köp hos oss oavsett om det är i butiken
                    i Sundsvall eller online. Det går lika bra att kontakta oss via mail eller per
                    telefon. Vår butik med generösa öppettider har funnits i över 50år.
                </h2>
            </div>
            <Puff />
            <BlogPostList blogPosts={blogPosts} />
            <ProductSlider />
        </>
    );
};

export default MainSection;
