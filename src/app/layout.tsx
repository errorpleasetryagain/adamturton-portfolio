import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import SideRays from "@/components/ui/side-rays";
import Providers from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adam Turton",
  description: "Technology operations manager. Ten years across Apple, Selfridges and Starling Bank. Leads teams, keeps things running, and is at his best developing the people around him. Builds content sites and AI automations on the side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>
          <SideRays />
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
