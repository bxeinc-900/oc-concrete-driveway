import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OC Concrete Driveway | Top Concrete Contractor Orange County",
  description: "Top-rated concrete driveway contractor in Orange County and Riverside. We specialize in driveway installation, replacement, stamped concrete, and patio slabs. Get a free quote today!",
  keywords: "concrete driveway installation Orange County, concrete driveway replacement Orange County, concrete driveway repair Orange County, concrete contractor Orange County, local concrete driveway contractor Orange County",
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
