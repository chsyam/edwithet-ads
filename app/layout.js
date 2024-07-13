"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
	useEffect(() => {
		if (process.env.NODE_ENV === "production") {
			const script = document.createElement("script");
			script.async = true;
			script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9035732498574241";
			script.crossOrigin = "anonymous";
			document.head.appendChild(script);
		}
	}, [])

	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
