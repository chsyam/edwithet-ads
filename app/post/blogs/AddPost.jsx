"use client"
import styles from "@/styles/createPost.module.css"
import axios from "axios";
import JoditEditor from "jodit-react";
import { useRef, useState } from "react";

function AddPost() {
    const editor = useRef(null);

    const [formData, setFormData] = useState({
        title: "",
        publisherName: "Sai Kumar Nanna",
        content: "",
        videoUrl: "",
        resourceUrl: "",
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
        console.log(formData);
        const response = await axios.post("https://educationforjobs.onrender.com/api/blogs/create", formData);
        console.log(response);
        if (response.status === 201) {
            alert("Blog Created Successfully");
            window.location.reload();
        } else {
            alert("Something went wrong. Please try again later");
        }
    }

    return (
        <div>
            <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                <div className={styles.heading}>Create a Post</div>
                <div>
                    <label htmlFor="title">Blog Title (required)</label><br />
                    <textarea rows={3} name="title" onChange={(e) => handleChange(e)} type="text" id="title" required />
                </div>
                <div>
                    <label htmlFor="publisherName">Published By (required)</label><br />
                    <input name="publisherName" onChange={(e) => handleChange(e)} value={formData.publisherName} type="text" id="publisherName" required />
                </div>
                <div>
                    <label>Blog Content (required)</label><br />
                    <div className={styles.editor}>
                        <JoditEditor
                            ref={editor}
                            value={formData.content}
                            onChange={newContent => {
                                setFormData({
                                    ...formData,
                                    "content": newContent
                                })
                            }}
                        />
                    </div>
                    {formData.content.length > 0 && <div><label>Live Preview</label><br /></div>}
                    <div className={styles.preview}>
                        <div dangerouslySetInnerHTML={{ __html: formData.content }}></div>
                    </div>
                </div>
                <div>
                    <label htmlFor="videoUrl">Video ID ({`Optional`}) ({`Click on Video > share > embedd > video_id`})</label><br />
                    <input name="videoUrl" onChange={(e) => handleChange(e)} type="text" id="videoUrl" />
                </div>
                <div>
                    <label htmlFor="resourceUrl">Resource ID ({`Optional`}) ({`Click on file in Google Drive > click on 3 dots > Open in new window > click on 3 dots > Embedd Item > File_Id`})</label><br />
                    <input name="resourceUrl" onChange={(e) => handleChange(e)} type="text" id="resourceUrl" />
                </div>
                <div>
                    <button className={styles.submitButton}>Create Blog</button>
                </div>
            </form >
        </div >
    );
}

export default AddPost;