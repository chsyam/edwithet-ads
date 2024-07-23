"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Adsense from "@/components/adSense/Adsense";
import Head from "next/head";
import AddBanner from "@/components/adSense/AddBanner";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<Head>
				<Adsense pId="9035732498574241" />
			</Head>
			<body style={{ padding: 0, margin: 0 }} className={inter.className}>
				<Navbar />
				{children}
				<AddBanner dataAdFormat="auto"
					dataFullWidthResponsive={true}
					dataAdSlot="9640323625" />
			</body>
		</html>
	);
}
