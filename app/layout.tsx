import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { ThemeProvider } from "@/components/ui/ThemeProvider/themeprovider";
import type { Metadata } from "next";
import WagmiProvider from "./WagmiProvider/wagmi-provider";

export const metadata: Metadata = {
  title: "Dotsama NFT Marketplace",
  description: "Leading NFT Marketplace for Astar and Moonbeam.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className="bg-white dark:bg-black"
        suppressHydrationWarning={true}
        cz-shortcut-listen="true"
      >
        <div className="background-container">
          <div className="backgroundwrapperwrapper">
            <div className="background left"></div>
            <div className="background right"></div>
          </div>
          <WagmiProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <div className="min-h-screen w-screen">
                <Navbar />
                {children}
                <Footer />
              </div>
            </ThemeProvider>
          </WagmiProvider>
        </div>
      </body>
    </html>
  );
}
