"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<head>
				<meta name="google-adsense-account" content="ca-pub-9035732498574241"></meta>
				<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9035732498574241" crossOrigin="anonymous"></script>
			</head>
			<body style={{ padding: 0, margin: 0 }} className={inter.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
