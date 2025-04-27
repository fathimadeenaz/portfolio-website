import type { Metadata } from "next";
import { Arimo } from "next/font/google";
import "./globals.css";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { config } from "@/constants/config";

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
  keywords: config.keywords,
  authors: [{ name: config.author }],
};

const arimo = Arimo({
  subsets: ["latin"],
  variable: "--font-arimo",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={arimo.variable}>
      <head>
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
