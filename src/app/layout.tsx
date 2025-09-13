import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { JetBrains_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const JetBrainsMono = JetBrains_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "website about me and the stuff l do",
  openGraph: {
    title: "Portfolio",
    description: "website about me and the stuff l do",
    url: "https://stephen-karani.0xzile.sbs",
    siteName: "Stephen Karani - Portfolio",
    images: [
      {
        url: "/Preview.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "website about me and the stuff l do",
    images: ["/Preview.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={JetBrainsMono.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
