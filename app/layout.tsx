import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import NavigationalHeader from "./components/navigationalHeader";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swan Psychology",
  description: "Swan Psychology website. Description goes here",
  viewport: "width=device-width, initial-scale=1",
  keywords: "Psychology, neurodivergent, AuDHD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-col min-h-screen justify-between bg-background">
          <NavigationalHeader />
          <section className="flex pt-5 flex-1 overflow-auto">
            {children}
          </section>
          <Footer />
        </section>
      </body>
    </html>
  );
}
