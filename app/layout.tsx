"use client";
import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { WagmiConfig, createClient, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { ThemeProvider } from "@/components/ui/ThemeProvider/themeprovider";

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
    <html lang="en">
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

          <ThemeProvider attribute="class" defaultTheme="light">
            <WagmiConfig client={client}>
              <div className="min-h-screen w-screen">
                <div className="">
                  <Navbar />
                  {children}
                  <Footer />
                </div>
                {/* <div className="absolute top-0 left-0 w-screen h-full">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[url('../public/assets/images/Ellipse1.png')] bg-scroll bg-right bg-no-repeat bg-cover"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[url('../public/assets/images/Ellipse2.png')] bg-scroll bg-left bg-no-repeat bg-cover"></div>
              </div> */}
              </div>
            </WagmiConfig>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
