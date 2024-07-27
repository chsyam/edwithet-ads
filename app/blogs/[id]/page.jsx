"use client";
import FeedbackForm from "@/app/feedback/FeedbackForm";
import UserSvg from "@/components/icons/User";
import styles from "@/styles/BlogPost.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function BlogPost({ params }) {
	const [blogInfo, setBlogInfo] = useState([]);

	const printFormattedDate = (postedAt) => {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
		var date = new Date(postedAt);
		return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	}

	useEffect(() => {
		async function fetchBlogData() {
			document.title = "Blogs";
			const response = await axios.get(`http://localhost:8080/api/blogs/${params.id}`)
			setBlogInfo(response.data);
		}
		fetchBlogData();
	});

	return (
		<div className={styles.blogPost}>
			<div className={styles.title}>{blogInfo?.title}</div>
			<div className={styles.blogDetails}>
				<div>
					<UserSvg />
				</div>
				<div>
					<div className={styles.authourName}>{blogInfo.publisherName}</div>
					<div className={styles.datePublished}>{printFormattedDate(blogInfo?.postedAt)}</div>
				</div>
			</div>
			<div className={styles.resources}>
				<iframe
					src={`https://www.youtube.com/embed/${blogInfo?.videoUrl}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
			<div className={styles.content}>
				<div dangerouslySetInnerHTML={{ __html: blogInfo?.content }}></div>
			</div>
			{
				blogInfo?.resourceUrl?.length > 0 &&
				<div>
					<div className={styles.resources}>
						<iframe
							src={`https://drive.google.com/file/d/${blogInfo?.resourceUrl}/preview`}
							allow="autoplay"
						/>
					</div>
				</div>
			}
			<div className={styles.feedbackSection}>
				<FeedbackForm relatedBlogId={params.id} />
			</div>
		</div>
	);
}