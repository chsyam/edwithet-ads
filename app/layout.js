"use client"
import "./globals.css";
import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Adsense from "@/components/adSense/Adsense";
import AddBanner from "@/components/adSense/AddBanner";
import TagManager from "@/components/tagManager/TagManager";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<Head>
				<TagManager />
				<Adsense pId="9035732498574241" />
			</Head>
			<body style={{ padding: 0, margin: 0 }} className={inter.className}>
				<noscript>
					<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3ZQ2BZS"
						height="0" width="0"
						style={{ "display": "none", "visibility": "hidden" }}></iframe>
				</noscript>
				<Navbar />
				{children}
				<AddBanner dataAdFormat="auto"
					dataFullWidthResponsive={true}
					dataAdSlot="9640323625" />
			</body>
		</html>
	);
}
