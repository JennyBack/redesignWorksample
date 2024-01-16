import { BlogPost } from '../../mainSection/MainSection';
import styles from './BlogPostList.module.css';
import EastIcon from '@mui/icons-material/East';

type BlogPostListProps = {
    blogPosts: BlogPost[];
};

const BlogPostList = ({ blogPosts }: BlogPostListProps) => {
    let buttonText = 'Läs mer';
    return (
        <div className={styles.blogPostListWrapper}>
            {blogPosts.map((post) => (
                <div key={post.id} className={styles.column}>
                    {/* <div> */}
                    <img className={styles.blogPostListImg} src={post.img} alt="blog-post" />
                    {/* </div> */}
                    <div>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                    </div>
                    <a className={styles.link} href={post.link}>
                        <h3 style={{ margin: '2px' }}>{buttonText}</h3>
                        <EastIcon />
                    </a>
                </div>
            ))}
        </div>
    );
};

export default BlogPostList;
