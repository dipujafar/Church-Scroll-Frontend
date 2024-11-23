import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Footer from "@/components/shared/Footer";
import "react-pagination-bar/dist/index.css";

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
        {children}
        <footer className="2xl:mt-32 lg:mt-20m mt-20">
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
