"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body cz-shortcut-listen="true">
        <div className="bg-white dark:bg-black min-h-screen">
          <div className="relative z-10">
            <Navbar />
            {children}
            <Footer />
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="ellipse1 absolute top-0 left-0 w-1/2 h-full bg-[url('../public/assets/images/ellipse1.png')] bg-scroll bg-right bg-no-repeat bg-cover"></div>
            <div className="ellipse2 absolute top-0 right-0 w-1/2 h-full bg-[url('../public/assets/images/ellipse2.png')] bg-scroll bg-left bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
