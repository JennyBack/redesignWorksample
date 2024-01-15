import BlogPostList from '../blocks/blogPostList/BlogPostList';
import Categories from '../blocks/categories/Categories';
import Hero from '../blocks/hero/Hero';
import Puff from '../blocks/puff/Puff';

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

const MainSection = () => {
    return (
        <>
            <Hero />
            {/* <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px'
                }}
            >
                <h2>Populära kategorier</h2>
            </div> */}
            <Categories />
            <Puff />
            <BlogPostList blogPosts={blogPosts} />
        </>
    );
};

export default MainSection;
