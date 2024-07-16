"use client";
import styles from "./../../styles/Navbar.module.css"
import React from "react";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <label className={styles.logo}>EDwithET</label>
            <ul className={styles.navLinks}>
                <li onClick={() => window.location.href = "/"}>Home</li>
                <li onClick={() => window.location.href = "/blogs"}>Blogs</li>
                <li onClick={() => window.location.href = "/videos"}>Videos</li>
                <li onClick={() => window.location.href = "/feedback"}>Feedback</li>
            </ul>
        </nav>
    );
}

export default Navbar;