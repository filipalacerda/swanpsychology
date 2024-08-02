import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationalHeader from "./components/navigationalHeader";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swan Pshychology",
  description: "Swan Pshychology website. Description goes here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="text-[#151817]">
          <NavigationalHeader />
          <section className="flex p-5">{children}</section>
        </section>
        <Footer />
      </body>
    </html>
  );
}
