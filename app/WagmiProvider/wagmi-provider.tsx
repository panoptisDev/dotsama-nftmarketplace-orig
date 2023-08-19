"use client";
import React from "react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { moonbeam } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { InjectedConnector } from "wagmi/connectors/injected";
import { TalismanConnector } from "@/connectors/talisman";
import { SubWalletConnector } from "@/connectors/subwallet";
import { NovaWalletConnector } from "@/connectors/novawallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { EnkryptWalletConnector } from "@/connectors/enkrypt";
import { Chain } from "wagmi";
if (typeof window === "undefined") React.useLayoutEffect = () => {};

export const astar = {
  id: 592,
  name: "Astar",
  network: "astar",
  nativeCurrency: { decimals: 18, name: "Astar", symbol: "ASTR" },
  rpcUrls: {
    public: { http: ["https://astar.api.onfinality.io/public"] },
    default: { http: ["https://evm.astar.network"] },
  },
  blockExplorers: {
    etherscan: { name: "subscan", url: "https://astar.subscan.io" },
    default: { name: "subscan", url: "https://astar.subscan.io" },
  },
} as const satisfies Chain;

const projectId = "42c71cd37d77c04d8536c46fd3de9ef6";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [moonbeam, astar],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains: [moonbeam, astar],
      options: {
        shimDisconnect: true,
      },
    }),
    new TalismanConnector({ chains: [moonbeam, astar] }),
    new SubWalletConnector({ chains: [moonbeam, astar] }),
    new NovaWalletConnector({ chains: [moonbeam, astar] }),
    new EnkryptWalletConnector({ chains: [moonbeam, astar] }),
    new InjectedConnector({ chains: [moonbeam, astar] }),
    new WalletConnectConnector({
      chains: [moonbeam, astar],
      options: {
        projectId: projectId,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function WagmiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
}
