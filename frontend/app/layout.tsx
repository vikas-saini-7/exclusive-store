import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import HeaderTop from "@/components/common/HeaderTop";
import Footer from "@/components/common/Footer";
import ReduxProvider from "@/providers/ReduxProvider";
import { toast, Toaster } from "sonner";
import GetProfile from "@/lib/GetProfile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Toaster />
        <ReduxProvider>
          <GetProfile />
          <HeaderTop />
          <Header />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
