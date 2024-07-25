"use client";
import { useState } from "react";
import axios from "axios";
import styles from "./../../styles/Feedback.module.css"

function FeedbackForm({ relatedBlogId }) {
    const [formData, setFormData] = useState({
        comment: "",
        username: "",
        email: "",
        relatedBlogId: "NA"
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        relatedBlogId && (formData.relatedBlogId = relatedBlogId);
        const response = await axios.post("http://localhost:8080/api/submitfeedback", formData);
        console.log(response);
    }

    return (
        <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.heading}>Leave a Comment</div>
            <div>
                <label htmlFor="comment">Comment (required)</label><br />
                <textarea name="comment" onChange={(e) => handleChange(e)} id="comment" rows="6" cols="70" />
            </div>
            <div>
                <label htmlFor="name">Name (required)</label><br />
                <input name="username" onChange={(e) => handleChange(e)} type="text" id="name" required />
            </div>
            <div>
                <label htmlFor="email">Email(will not be published) (required)</label><br />
                <input name="email" onChange={(e) => handleChange(e)} type="email" id="email" required />
            </div>
            <div>
                <button className={styles.submitButton}>Submit Comment</button>
            </div>
        </form>
    )
}

export default FeedbackForm;