"use client";
import styles from "./Navbar.module.css"
import React from "react";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <label className={styles.logo}>EDwithET</label>
            <ul className={styles.navLinks}>
                <li onClick={() => window.location.href = "/"}>Home</li>
                <li onClick={() => window.location.href = "/videos"}>Videos  </li>
                <li onClick={() => window.location.href = "/"}>Material</li>
                <li onClick={() => window.location.href = "/"}>Feedback</li>
                <li onClick={() => window.location.href = "/"}>About</li>
                <li onClick={() => window.location.href = "/"}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;