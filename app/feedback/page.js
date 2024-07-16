import styles from "./../../styles/Feedback.module.css"

function Feedback() {
    return (
        <div className={styles.feedbackForm}>
            <form>
                <div className={styles.heading}>Leave a Comment</div>
                <div>
                    <label for="comment">Comment (required)</label><br />
                    <textarea id="comment" rows="6" cols="70"></textarea>
                </div>
                <div>
                    <label for="name">Name (required)</label><br />
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label for="email">Email(will not be published) (required)</label><br />
                    <input type="email" id="email" required />
                </div>
                <div>
                    <button className={styles.submitButton}>Submit Comment</button>
                </div>
            </form>
        </div>
    )
}

export default Feedback;