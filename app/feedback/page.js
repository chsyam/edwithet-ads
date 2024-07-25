"use client";
import styles from "./../../styles/Feedback.module.css"
import FeedbackForm from "./FeedbackForm";

function Feedback() {
    return (
        <div className={styles.feedbackForm}>
            <FeedbackForm />
        </div >
    )
}

export default Feedback;