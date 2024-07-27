import Image from "next/image";
import styles from "./../../styles/Blogs.module.css"
import BlogImage from "./../../components/images/kfvmyjk6hz8-1536x1051.jpg"

function BlogCard({ blog }) {

    const printFullDate = (date) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var date = new Date(date);
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    return (
        <div className={styles.card}>
            <div>
                <Image className={styles.image} src={BlogImage} height={200} alt="Blog image" />
            </div>
            <div className={styles.cardFooter} onClick={() => { window.location.href = `/blogs/${blog.id}` }}>
                <div className={styles.title}>
                    <p>
                        {blog.title}
                    </p>
                </div>
                <div className={styles.content}>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
                    </p>
                </div>
                <div className={styles.date}>{printFullDate(blog.postedAt)}</div>
            </div>
        </div>
    )
}

export default BlogCard;