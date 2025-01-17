import {
  Chain,
  InjectedConnector,
  InjectedConnectorOptions,
  WindowProvider,
} from "@wagmi/core";

declare global {
  interface Window {
    talismanEth: any;
  }
}
export type TalismanConnectorOptions = InjectedConnectorOptions & {
  // nothing for now
};

export class TalismanConnector extends InjectedConnector {
  readonly id = "talisman";
  // readonly ready = typeof window != "undefined" && !!window.talismanEth;
  // readonly ready = true;
  readonly ready = typeof window != "undefined";

  constructor({
    chains,
    options: options_,
  }: {
    chains?: Chain[];
    options?: TalismanConnectorOptions;
  } = {}) {
    super({
      chains,
      options: {
        name: "Talisman",
        shimDisconnect: true,
        ...options_,
      },
    });
  }

  async getProvider() {
    if (typeof window === "undefined") return;
    return window.talismanEth;
  }
}
