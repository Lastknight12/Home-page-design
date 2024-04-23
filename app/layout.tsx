import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import Description from "./components/description/PageComponent";
import Cards from "./components/cards/Card";
import BGImage from "./page";

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
        <BGImage />
        <Home />
        <Main />
        <Description />
        <Cards />
        <div
          style={{
            margin: "30px 30px 30px 0",
            textAlign: "end",
            fontSize: "1.5em",
            color: "#fff",
          }}
        >
          Site developed by Last
        </div>
      </body>
    </html>
  );
}
