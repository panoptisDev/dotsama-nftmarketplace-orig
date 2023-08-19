import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
} from "@wagmi/core";

declare global {
  interface Window {
    enkrypt: any;
  }
}
export type EnkryptWalletConnectorOptions = InjectedConnectorOptions & {
  // nothing for now
};

export class EnkryptWalletConnector extends InjectedConnector {
  readonly id = "Enkrypt";
  readonly ready = typeof window != "undefined" && !!window.enkrypt;

  constructor({
    chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: EnkryptWalletConnectorOptions;
  } = {}) {
    super({
      chains,
      options: {
        name: "Enkrypt",
        shimDisconnect: true,
        ...options_,
      },
    });
  }

  async getProvider() {
    if (typeof window === "undefined") return;
    return window.enkrypt.providers.ethereum;
  }
}
