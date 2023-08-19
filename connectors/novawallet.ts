import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
} from "@wagmi/core";

declare global {
  interface Window {
    ethereum: any;
  }
}
export type NovaWalletConnectorOptions = InjectedConnectorOptions & {
  // nothing for now
};

export class NovaWalletConnector extends InjectedConnector {
  readonly id = "novawallet";
  // readonly ready =
  //   typeof window != "undefined" && !!window.ethereum.isNovaWallet;
  readonly ready = true;

  constructor({
    chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: NovaWalletConnectorOptions;
  } = {}) {
    super({
      chains,
      options: {
        name: "NovaWallet",
        shimDisconnect: true,
        ...options_,
      },
    });
  }

  async getProvider() {
    if (typeof window === "undefined") return;
    return window.ethereum;
  }
}
