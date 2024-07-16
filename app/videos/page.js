"use client";
import VideoContent from "./VideoContent";
import styles from '@/styles/Videos.module.css'
import { useEffect } from "react";

function Videos() {
    useEffect(() => {
        document.title = "Yt videos";
    }, []);

    return (
        <div className={styles.videoBody}>
            <VideoContent />
        </div>
    );
}

export default Videos;