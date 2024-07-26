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
	}, []);

	const blogData = {
		id: 1,
		authourName: "Ty Dunn, Nate Sesti",
		title:
			"Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of",
		dateWritten: "June 16, 2024",
		content:
			"Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. <br > Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. <br >It's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. <br >Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)",
		videoUrl: "q6OiDvEIgxk?si=neChNHRd076K5bqO",
	};

	return (
		<div className={styles.blogPost}>
			<div className={styles.title}>{/* {blogData.title} */}{blogInfo?.title}</div>
			<div className={styles.blogDetails}>
				<div>
					<UserSvg />
				</div>
				<div>
					<div className={styles.authourName}>{blogData.authourName}</div>
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
				{blogInfo?.content}
			</div>
			<div className={styles.resources}>
				<iframe
					src={`https://drive.google.com/file/d/${blogInfo?.resourceUrl}/preview`}
					allow="autoplay"
				/>
			</div>
			<div className={styles.feedbackSection}>
				<FeedbackForm relatedBlogId={params.id} />
			</div>
		</div>
	);
}