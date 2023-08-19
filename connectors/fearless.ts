import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
} from "@wagmi/core";

declare global {
  interface Window {
    injectedWeb3: any;
  }
}
export type FearlessWalletConnectorOptions = InjectedConnectorOptions & {
  // nothing for now
};

export class FearlessWalletConnector extends InjectedConnector {
  readonly id = "Fearlesswallet";
  // readonly ready = typeof window != "undefined" && !!window.injectedWeb3;
  // readonly ready = true;
  readonly ready = typeof window != "undefined";

  constructor({
    chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: FearlessWalletConnectorOptions;
  } = {}) {
    super({
      chains,
      options: {
        name: "Fearless Wallet",
        shimDisconnect: true,
        ...options_,
      },
    });
  }

  async getProvider() {
    if (typeof window === "undefined") return;
    return window.injectedWeb3;
  }
}
