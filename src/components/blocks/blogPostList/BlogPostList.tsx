import styles from './BlogPostList.module.css';

const BlogPostList = () => {
    return (
        <div className={styles.blogPostListWrapper}>
            <div className={styles.column}>
                <div className={styles.blogPostListImg}>
                    <img src="" alt="blog-post" />
                </div>
                <div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.blogPostListImg}>
                    <img src="" alt="blog-post" />
                </div>
                <div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>{' '}
            <div className={styles.column}>
                <div className={styles.blogPostListImg}>
                    <img src="" alt="blog-post" />
                </div>
                <div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>{' '}
            <div className={styles.column}>
                <div className={styles.blogPostListImg}>
                    <img src="" alt="blog-post" />
                </div>
                <div>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
    );
};

export default BlogPostList;
