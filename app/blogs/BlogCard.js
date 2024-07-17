import Image from "next/image";
import styles from "./../../styles/Blogs.module.css"

function BlogCard({ blog }) {

    return (
        <div className={styles.card}>
            <div>
                <Image src={blog.image} width={380} height={200} alt="Blog image" />
            </div>
            <div className={styles.cardFooter}>
                <div className={styles.title}>
                    <p>
                        {blog.title}
                    </p>
                </div>
                <div className={styles.date}>{blog.dateWritten}</div>
                <div className={styles.buttons}>
                    <a href={`/blogs/${blog.id}`}>
                        Read
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;