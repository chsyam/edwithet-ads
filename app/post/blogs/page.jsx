import AddPost from "./AddPost";
import styles from "@/styles/createPost.module.css"

function PostBlog() {
    return (
        <div className={styles.addPost}>
            <AddPost />
        </div>
    )
}

export default PostBlog;