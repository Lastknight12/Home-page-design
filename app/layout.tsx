import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter_400 = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Design template",
  description: "Design template for tournament",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter_400.className}>
        {children}
      </body>
    </html>
  );
}
