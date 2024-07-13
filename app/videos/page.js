"use client";
import Navbar from "@/components/navbar/Navbar";
import VideoContent from "./VideoContent";
import styles from './Videos.module.css'

function Videos() {
    return (
        <div className={styles.videoBody}>
            <Navbar />
            <VideoContent />
        </div>
    );
}

export default Videos;