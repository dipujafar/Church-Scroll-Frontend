import type { Metadata } from "next";
import "./globals.css";
import { Figtree } from "next/font/google";
import Footer from "@/components/shared/Footer";
import "react-pagination-bar/dist/index.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";

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
        <div className="min-h-[calc(100vh-200px)]">{children}</div>
        <footer className="2xl:mt-32 lg:mt-20m mt-20">
          <Footer></Footer>
        </footer>

        <Toaster />
        <NextTopLoader
          color="#2434AD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #232323,0 0 5px #EA5326"
          zIndex={1600}
          showAtBottom={false}
        />
      </body>
    </html>
  );
}
