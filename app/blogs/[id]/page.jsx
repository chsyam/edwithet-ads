"use client";
import FeedbackForm from "@/app/feedback/FeedbackForm";
import Feedback from "@/app/feedback/page";
import UserSvg from "@/components/icons/User";
import styles from "@/styles/BlogPost.module.css";
import { useEffect } from "react";

function BlogPost({ params }) {
	useEffect(() => {
		document.title = "Blogs";
	}, []);

	const blogData = {
		id: 1,
		authourName: "Ty Dunn, Nate Sesti",
		title:
			"Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of",
		dateWritten: "June 16, 2024",
		content:
			"Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. <br > Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. <br >It's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. <br >Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)",
		videoUrl: "embed/q6OiDvEIgxk?si=neChNHRd076K5bqO",
	};

	return (
		<div className={styles.blogPost}>
			<div className={styles.title}>{blogData.title}</div>
			<div className={styles.blogDetails}>
				<div>
					<UserSvg />
				</div>
				<div>
					<div className={styles.authourName}>{blogData.authourName}</div>
					<div className={styles.datePublished}>{blogData.dateWritten}</div>
				</div>
			</div>
			<div className={styles.resources}>
				<iframe
					width="100%"
					height="100%"
					src={`https://www.youtube.com/${blogData.videoUrl}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
				/>
			</div>
			<div className={styles.content}>
				Paul used two metaphors to explain what it means to continue to walk in
				Jesus. The first metaphor of their faith in Christ was to be “rooted” in
				Christ. Using an agricultural metaphor of plant growth, Paul reminded
				them that the basis of their faith, the life that would propel them
				forward, was found in Jesus.
				<br />
				<br />
				Christ was the source of their strength, spiritual vitality, and ability
				to please God. He was under the surface in their spiritual lives,
				nourishing them and helping them to become all that God had for them.
				<br />
				<br />
				Its encouraging to remember that each of us have a “construction zone”
				sign over our lives. God is actively working on our hearts, building us
				up, and forming something new in our hearts. We can become discouraged
				when struggles come, when we lose personal battles over sin, and we find
				ourselves falling back into old habits.
			</div>
			<div className={styles.resources}>
				<iframe
					src="https://drive.google.com/file/d/1BysRBx7i0J2DFGmd8utTh3nhm0-PcYva/preview"
					width="100%"
					height="100%"
					allow="autoplay"
				/>
			</div>
			<FeedbackForm relatedBlogId={params.id} />
		</div>
	);
}

export default BlogPost;
