import "dotenv/config";
require("dotenv").config();

import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@components/Header/Header";
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
          <div className="w-full bg-neutral-content pb-12">{children}</div>
        </div>
      </body>
    </html>
  );
}
