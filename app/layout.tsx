"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globalsSheet.css";
import Footer from "@/components/Footer/Footer";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import dynamic from "next/dynamic";

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet],
  [publicProvider()]
);

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark" lang="en">
      <body cz-shortcut-listen="true">
        <WagmiConfig client={client}>
          <div className="bg-white dark:bg-black min-h-screen">
            <div className="relative z-10">
              <Navbar />
              {children}
              <Footer />
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('../public/assets/images/Ellipse1.png')] bg-scroll bg-right bg-no-repeat bg-cover"></div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('../public/assets/images/Ellipse2.png')] bg-scroll bg-left bg-no-repeat bg-cover"></div>
            </div>
          </div>
        </WagmiConfig>
      </body>
    </html>
  );
}
