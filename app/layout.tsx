import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import TopNav from "./components/TopNav/TopNav";
import SliderBanner from "./components/SliderBanner/SliderBanner";
import Footer from "./components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Olsen Park church of Christ",
  description: "Website for the Olsen Park church of Christ in Amarillo, Texas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="globalContainer rounded-md">
          <Header />
          <TopNav />
          <SliderBanner />
          <div className="w-full p-2.5 bg-neutral-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
