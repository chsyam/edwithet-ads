"use client";
import styles from "@/styles/Blogs.module.css";
import BlogCard from "./BlogCard";
import Blog1 from "./../../components/images/kfvmyjk6hz8-1536x1051.jpg"
import { useEffect } from "react";

function Blogs() {
    useEffect(() => {
        document.title = "Blogs";
    }, []);

    const blogsList = [
        {
            id: 1,
            title: "Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of",
            dateWritten: "16 June, 2024",
            image: Blog1,
            content: "Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. \n\nIt's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)"
        },
        {
            id: 2,
            title: "Blog 2",
            dateWritten: "16 June, 2024",
            image: Blog1,
            content: "Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. \n\nIt's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)"
        },
        {
            id: 3,
            title: "Blog 3",
            dateWritten: "16 June, 2024",
            image: Blog1,
            content: "Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. \n\n It's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)"
        },
        {
            id: 4,
            title: "Blog 4",
            dateWritten: "16 June, 2024",
            image: Blog1,
            content: "Paul used two metaphors to explain what it means to continue to walk in Jesus. The first metaphor of their faith in Christ was to be “rooted” in Christ. Using an agricultural metaphor of plant growth, Paul reminded them that the basis of their faith, the life that would propel them forward, was found in Jesus. Christ was the source of their strength, spiritual vitality, and ability to please God. He was under the surface in their spiritual lives, nourishing them and helping them to become all that God had for them. \n\nIt's encouraging to remember that each of us have a “construction zone” sign over our lives. God is actively working on our hearts, building us up, and forming something new in our hearts. We can become discouraged when struggles come, when we lose personal battles over sin, and we find ourselves falling back into old habits. Be encouraged! Christ is living in you, rebuilding your life, and He is your hope of glory (Col 1:27)"
        }
    ];

    return (
        <div className={styles.blogContent}>
            {
                blogsList.map((blog, index) =>
                    <BlogCard key={index} blog={blog} />
                )
            }
        </div>
    );
}

export default Blogs;