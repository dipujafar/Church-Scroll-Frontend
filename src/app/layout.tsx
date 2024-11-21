import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Navbar from "@/components/shared/Navbar";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Church Scroll",
    template: "%s | Church Scroll",
  },
  description: "The official website for Church Scroll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className}  antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
