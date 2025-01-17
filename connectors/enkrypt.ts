import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
  WindowProvider,
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
  // readonly ready = typeof window != "undefined" && !!window.enkrypt;
  readonly ready = typeof window != "undefined";
  //   readonly ready = true;

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
