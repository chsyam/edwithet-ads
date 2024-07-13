"use client";
import styles from "./Videos.module.css";
import React from 'react';

function VideoContent() {
    const videoInfo = [
        {
            title: "How to download textbooks || టెట్ మరియు డీఎస్సీ కోసం TEXTBOOKS ను డౌన్లోడ్ చేయడం ఎలా?",
            videoId: "IOmm2SJ1kRY?si=pBgpoKu6ZMMyxfjV",
        },
        {
            title: "English grammar for TET2024 || 3rd class english textbook grammar explanation for TET 2024",
            videoId: "xv1ZpsKmdWU?si=P0TsfGQIebkBJ0CV",
        },
        {
            title: "TET2024 మ్యాథ్స్ లో ఎక్కువ మార్కులు సాధించడం ఎలా? || How to get good marks in maths in tet 2024",
            videoId: "_hZuFqpmOoE?si=MBVxGLvfMoSx69Yf",
        },
        {
            title: "TET 2024 ఇంగ్లీష్ లో మంచి మార్కులు తెచ్చుకోవడం ఎలా? || How to score good marks in english in tet2024",
            videoId: "xykvh24zkHs?si=2SGCtTRyiDxnfawb",
        },
        {
            title: "AP TET 2024 revised schedule released || #aptet కొత్త షెడ్యూల్ విడుదల|| #aptetnotification",
            videoId: "Aw1HpCqFWlg?si=0X7nUKyo8w7mWv61",
        },
        {
            title: "గవర్నమెంట్ టీచర్ గా మీ మొదటి జీతం ఎంతో తెల్సా? || motivational video for #apdsc #aptet aspirants",
            videoId: "Wv3UZ9P5qnE?si=Hz-L7GFp791OqBj3",
        },
        {
            title: "TET లో 120+ సాధించడం ఎలా? || How to get 120+ marks in tet2024 || 90 days preparation plan for tet",
            videoId: "oZZ-fJ3eRWU?si=hOFQrSTj_4wR8feA",
        },
        {
            title: "టెట్ అప్లై చేసేటపుడు ఈ తప్పు అసలు చేయకండి, డీఎస్సీ లో తప్పక విజయం సాధిస్తారు #aptet2024 #apdsc",
            videoId: "N9ARgGXLCUY?si=pNgqpcT0OZQf7nOf",
        }
    ];

    return (
        <div className={styles.VideoContent}>
            {
                videoInfo.map((video, index) =>
                    <div className={styles.video} key={index}>
                        <iframe width="100%" height="100%"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen>
                        </iframe>
                        <div className={styles.title}>
                            {video.title}
                        </div>
                    </div>
                )
            }
        </div >
    );
}

export default VideoContent;