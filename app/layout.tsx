import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashion Home Sourcing | Premium Textile Manufacturer & Exporter",
  description:
    "Fashion Home Sourcing is a premier global textile manufacturing and sourcing partner delivering woven, technical, and home textile solutions across international markets.",
  keywords: ["textile manufacturer", "home textiles", "Pakistan exporter", "woven fabrics"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col" style={{ backgroundColor: "#FBF8F1", color: "#0B1B33" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
