import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
  WindowProvider,
} from "@wagmi/core";

declare global {
  interface Window {
    SubWallet: any;
  }
}
export type SubWalletConnectorOptions = InjectedConnectorOptions & {
  // nothing for now
};

export class SubWalletConnector extends InjectedConnector {
  readonly id = "subwallet";
  // readonly ready =
  //   typeof window != "undefined" && !!window.SubWallet && !!window.isSubWallet;
  // readonly ready = true;
  readonly ready = typeof window != "undefined";

  constructor({
    chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: SubWalletConnectorOptions;
  } = {}) {
    super({
      chains,
      options: {
        name: "SubWallet",
        shimDisconnect: true,
        ...options_,
      },
    });
  }

  async getProvider() {
    if (typeof window === "undefined") return;
    return window.SubWallet;
  }
}
