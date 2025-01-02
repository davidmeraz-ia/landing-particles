import type { Metadata } from "next";
import {Urbanist} from "next/font/google"

import "./globals.css";

import Navbar from "@/components/navbar"
import Header from "@/components/header";

const urbanist = Urbanist({subsets: ["latin"], style:["italic"]})

export const metadata: Metadata = {
  title: "DavEe Landing Page",
  description: "Lading Page made by DavEe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className} ${urbanist.className} antialiased`} >
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
