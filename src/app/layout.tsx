import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OC Concrete Driveway | Top Concrete Contractor Orange County & Riverside",
  description: "Top-rated concrete driveway contractor in Orange County and Riverside. We specialize in driveway installation, emergency concrete repair, replacement, stamped concrete, and patio slabs. Get a free estimate today!",
  keywords: "concrete driveway contractors Orange County, affordable concrete driveway replacement Orange County, emergency concrete repair Riverside, concrete driveway installation cost, hire concrete contractor near me, best concrete driveway replacement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
