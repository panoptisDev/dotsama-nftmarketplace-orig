"use client";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import Image from "next/image";
import subwallet from "../../public/assets/images/connect/subwallet.png";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import { objectSpread } from "@polkadot/util";

interface InjectedAccountExt {
  address: string;
  meta: {
    name: string;
    source: string;
    whenCreated: number;
  };
}

export default function Connect() {
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  // const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  const handleConnectionTalisman = async () => {
    // const extensions = await web3Enable("DotsamaNFT");
    // if (!extensions) {
    //   throw Error("NO_EXTENSIONS_FOUND");
    // }

    // const allAccounts = await web3Accounts();
    // console.log(allAccounts);
    // if (allAccounts.length === 1) {
    //   setSelectedAccount(allAccounts[0]);
    // }
    const wallet = (window as any).talismanEth;

    if (!wallet) {
      console.warn("Talisman is not installed");
    }
    try {
      const accounts = await wallet.request({ method: "eth_requestAccounts" });
      console.log(accounts);
    } catch (e) {
      console.log(e);
    }
  };

  // const extensions = await web3Enable("DotsamaNFT");
  // if (!extensions) {
  //   throw Error("NO_EXTENSIONS_FOUND");
  // }

  // const allAccounts = await web3Accounts();
  // console.log(allAccounts);
  // if (allAccounts.length === 1) {
  //   setSelectedAccount(allAccounts[0]);
  // }
  async function handleConnectionFearless(): Promise<InjectedAccountExt[]> {
    try {
      const injectedPromise = web3Enable("DotsamaNFT");
      await injectedPromise;

      const accounts = await web3Accounts();

      return accounts.map(
        ({ address, meta }, whenCreated): InjectedAccountExt => ({
          address,
          meta: objectSpread({}, meta, {
            name: `${meta.name || "unknown"} (${
              meta.source === "polkadot-js" ? "extension" : meta.source
            })`,
            whenCreated,
          }),
        })
      );
    } catch (error) {
      console.error("web3Accounts", error);

      return [];
    }
  }

  const handleConnectionSubWallet = async () => {
    const wallet = (window as any).SubWallet;

    if (!wallet || !wallet.isSubWallet) {
      console.warn("SubWallet is not installed");
    }
    try {
      await wallet.enable();
      const accounts = await wallet.request("eth_requestAccounts");
      console.log(accounts);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <label
        className="cursor-pointer bg-black xl:bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 text-white dark:text-white px-3 py-3 text-sm rounded-lg"
        style={{ fontFamily: "VietnamSemiBold" }}
        htmlFor="my-modal-3"
      >
        Connect Wallet
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-gray-300 dark:bg-black banner-shadow">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-5">Connect Wallet</h3>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-center">
              <svg
                className="cursor-pointer"
                onClick={() => connect()}
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 212 189"
                id="metamask"
              >
                <g fill="none" fillRule="evenodd">
                  <polygon
                    fill="#CDBDB2"
                    points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                  ></polygon>
                  <polygon
                    fill="#CDBDB2"
                    points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                    transform="matrix(-1 0 0 1 256.5 0)"
                  ></polygon>
                  <polygon
                    fill="#393939"
                    points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                  ></polygon>
                  <polygon
                    fill="#F89C35"
                    points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                  ></polygon>
                  <polygon
                    fill="#F89D35"
                    points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                  ></polygon>
                  <polygon
                    fill="#D87C30"
                    points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                  ></polygon>
                  <polygon
                    fill="#EA8D3A"
                    points="46.125 101.813 65.25 119.813 65.25 137.813"
                  ></polygon>
                  <polygon
                    fill="#F89D35"
                    points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                  ></polygon>
                  <polygon
                    fill="#EB8F35"
                    points="65.25 138.375 60.75 173.25 90.563 152.438"
                  ></polygon>
                  <polygon
                    fill="#EA8E3A"
                    points="92.25 102.375 95.063 150.188 86.625 125.719"
                  ></polygon>
                  <polygon
                    fill="#D87C30"
                    points="39.375 138.938 65.25 138.375 60.75 173.25"
                  ></polygon>
                  <polygon
                    fill="#EB8F35"
                    points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                  ></polygon>
                  <polygon
                    fill="#E8821E"
                    points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                  ></polygon>
                  <polygon
                    fill="#DFCEC3"
                    points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                  ></polygon>
                  <polygon
                    fill="#DFCEC3"
                    points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                    transform="matrix(-1 0 0 1 272.25 0)"
                  ></polygon>
                  <polygon
                    fill="#393939"
                    points="70.313 112.5 64.125 125.438 86.063 119.813"
                    transform="matrix(-1 0 0 1 150.188 0)"
                  ></polygon>
                  <polygon
                    fill="#E88F35"
                    points="12.375 .563 88.875 58.5 75.938 27"
                  ></polygon>
                  <path
                    fill="#8E5A30"
                    d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                  ></path>
                  <g transform="matrix(-1 0 0 1 211.5 0)">
                    <polygon
                      fill="#F89D35"
                      points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                    ></polygon>
                    <polygon
                      fill="#D87C30"
                      points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                    ></polygon>
                    <polygon
                      fill="#EA8D3A"
                      points="46.125 101.813 65.25 119.813 65.25 137.813"
                    ></polygon>
                    <polygon
                      fill="#F89D35"
                      points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                    ></polygon>
                    <polygon
                      fill="#EB8F35"
                      points="65.25 138.375 60.75 173.25 90 153"
                    ></polygon>
                    <polygon
                      fill="#EA8E3A"
                      points="92.25 102.375 95.063 150.188 86.625 125.719"
                    ></polygon>
                    <polygon
                      fill="#D87C30"
                      points="39.375 138.938 65.25 138.375 60.75 173.25"
                    ></polygon>
                    <polygon
                      fill="#EB8F35"
                      points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                    ></polygon>
                    <polygon
                      fill="#E8821E"
                      points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                    ></polygon>
                    <polygon
                      fill="#393939"
                      points="70.313 112.5 64.125 125.438 86.063 119.813"
                      transform="matrix(-1 0 0 1 150.188 0)"
                    ></polygon>
                    <polygon
                      fill="#E88F35"
                      points="12.375 .563 88.875 58.5 75.938 27"
                    ></polygon>
                    <path
                      fill="#8E5A30"
                      d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                    ></path>
                  </g>
                </g>
              </svg>
              <h3 className="cursor-pointer" onClick={() => connect()}>
                Metamask
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 156 32"
                fill="none"
              >
                <path
                  d="M42.6574 25.9819H46.4739V8.71953H53.7253V5.43146H35.5234V8.71953H42.6574V25.9819Z"
                  fill="black"
                />
                <path
                  d="M51.4838 22.2241C51.4838 24.8076 53.3627 26.4223 56.181 26.4223C58.559 26.4223 60.0562 25.0131 60.6728 22.9287H61.9351C61.9939 25.2186 62.5517 25.9819 64.959 25.9819H66.4856V23.1636H65.1058C64.3425 23.1636 64.225 23.0168 64.225 22.2828V16.3819C64.225 12.8296 62.0232 10.9214 58.0012 10.9214C54.0379 10.9214 51.5718 13.0351 51.2783 15.237L54.537 16.0883C54.9186 14.5911 56.0049 13.6516 58.0012 13.6516C59.8507 13.6516 60.6728 14.4443 60.6728 15.9415V16.4406C57.8838 16.7049 55.6526 17.2626 53.9792 18.1434C52.3058 18.9948 51.4838 20.3746 51.4838 22.2241ZM60.6728 19.9636C60.6728 22.459 59.1461 23.7214 57.326 23.7214C55.9168 23.7214 55.1241 23.0461 55.1241 21.8718C55.1241 19.9929 57.1792 19.1709 60.6728 18.7893V19.9636Z"
                  fill="black"
                />
                <path
                  d="M68.8209 25.9819H72.4026V5.43146H68.8209V25.9819Z"
                  fill="black"
                />
                <path
                  d="M76.6443 9.04247H80.4608V5.4021H76.6443V9.04247ZM76.7911 25.9819H80.3434V11.3617H76.7911V25.9819Z"
                  fill="black"
                />
                <path
                  d="M83.3835 22.2241C84.0294 24.8076 86.789 26.3929 90.0771 26.3929C94.0991 26.3929 96.5358 24.5434 96.5358 21.6957C96.5358 20.3452 96.0367 19.3177 95.0679 18.6131C94.0991 17.9085 92.9248 17.4094 91.545 17.1452L89.6367 16.7929C87.8753 16.4406 87.4055 16.0003 87.4055 15.1489C87.4055 14.1801 88.2569 13.5049 89.8129 13.5049C91.4863 13.5049 92.5432 14.4737 93.0129 15.736L96.0367 14.4443C95.3615 12.6535 93.4239 10.9214 89.9303 10.9214C86.4367 10.9214 84 12.7709 84 15.4718C84 18.2315 85.7615 19.259 88.7267 19.8755L90.6643 20.2278C92.3083 20.5507 92.8367 21.1379 92.8367 22.048C92.8367 23.0755 91.8973 23.7214 90.2239 23.7214C87.9046 23.7214 86.9652 22.4296 86.701 21.1379L83.3835 22.2241Z"
                  fill="black"
                />
                <path
                  d="M99.7269 25.9819H103.309V18.7599C103.309 17.1159 103.426 15.7654 104.336 14.7085C104.776 14.1801 105.452 13.9159 106.362 13.9159C108.123 13.9159 109.004 14.9727 109.004 17.0571V25.9819H112.527V18.7599C112.527 17.0865 112.615 15.7654 113.525 14.7085C113.965 14.1801 114.67 13.9159 115.58 13.9159C117.253 13.9159 118.222 14.914 118.222 17.0571V25.9819H121.775V16.4406C121.775 12.8883 119.72 10.9214 116.901 10.9214C114.905 10.9214 113.29 12.3305 112.674 14.3562H111.411C110.912 12.1544 109.356 10.9214 107.389 10.9214C105.246 10.9214 103.984 12.3599 103.426 14.3562H101.753C102.369 13.5049 102.898 12.2131 102.898 11.3617H99.7269V25.9819Z"
                  fill="black"
                />
                <path
                  d="M125.079 22.2241C125.079 24.8076 126.958 26.4223 129.776 26.4223C132.154 26.4223 133.651 25.0131 134.268 22.9287H135.53C135.589 25.2186 136.147 25.9819 138.554 25.9819H140.081V23.1636H138.701C137.938 23.1636 137.82 23.0168 137.82 22.2828V16.3819C137.82 12.8296 135.618 10.9214 131.596 10.9214C127.633 10.9214 125.167 13.0351 124.873 15.237L128.132 16.0883C128.514 14.5911 129.6 13.6516 131.596 13.6516C133.446 13.6516 134.268 14.4443 134.268 15.9415V16.4406C131.479 16.7049 129.248 17.2626 127.574 18.1434C125.901 18.9948 125.079 20.3746 125.079 22.2241ZM134.268 19.9636C134.268 22.459 132.741 23.7214 130.921 23.7214C129.512 23.7214 128.719 23.0461 128.719 21.8718C128.719 19.9929 130.774 19.1709 134.268 18.7893V19.9636Z"
                  fill="black"
                />
                <path
                  d="M142.416 25.9819H145.998V19.2883C145.998 17.5269 146.115 16.0003 147.084 14.826C147.583 14.2094 148.346 13.9159 149.345 13.9159C151.018 13.9159 151.987 14.9434 151.987 17.0571V25.9819H155.568V16.3526C155.568 12.9764 153.836 10.9214 150.548 10.9214C148.141 10.9214 146.614 12.7709 145.968 14.7379H144.295C145.117 13.5342 145.704 12.2131 145.734 11.3617H142.416V25.9819Z"
                  fill="black"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M26.7728 18.2123C26.2575 18.7275 25.362 18.4936 25.0579 17.8314C24.998 17.7009 24.9654 17.5609 24.9654 17.4173L24.9654 6C24.9654 4.61928 23.8461 3.49999 22.4654 3.49999C21.0846 3.49999 19.9654 4.61928 19.9654 6L19.9654 11.7786C19.9654 12.2755 19.4563 12.6128 18.9825 12.4631C18.6827 12.3683 18.466 12.0953 18.466 11.7808L18.466 2.50001C18.466 1.11929 17.3467 -3.62118e-07 15.966 0C14.5853 3.62118e-07 13.466 1.11929 13.466 2.50001L13.466 11.7801C13.466 12.0948 13.2492 12.368 12.9491 12.4628C12.475 12.6126 11.9657 12.2751 11.9657 11.7779L11.9657 5.99999C11.9657 4.61928 10.8464 3.49998 9.46569 3.49999C8.08497 3.49999 6.96568 4.61928 6.96568 6L6.96569 17.4211C6.96569 17.562 6.93369 17.6994 6.87484 17.8274C6.57705 18.4751 5.70193 18.7018 5.19784 18.1977L4.26779 17.2677C3.29147 16.2914 1.70855 16.2914 0.732237 17.2677C-0.24408 18.244 -0.244078 19.8269 0.732238 20.8033L8.08179 28.1528C9.91204 30.4946 12.763 32 15.9655 32C19.0348 32 21.7812 30.6172 23.6156 28.4406L31.2529 20.8032C32.2292 19.8269 32.2292 18.244 31.2529 17.2677C30.2766 16.2914 28.6937 16.2914 27.7173 17.2677L26.7728 18.2123ZM15.9649 28.0001C20.3832 28.0001 23.965 23.0001 23.965 23.0001C23.965 23.0001 20.3832 18 15.9649 18C11.5466 18 7.96487 23.0001 7.96487 23.0001C7.96487 23.0001 11.5466 28.0001 15.9649 28.0001Z"
                  fill="black"
                />
                <path
                  d="M18.9659 23.0007C18.9659 24.6576 17.6227 26.0008 15.9658 26.0008C14.309 26.0008 12.9658 24.6576 12.9658 23.0007C12.9658 21.3439 14.309 20.0007 15.9658 20.0007C17.6227 20.0007 18.9659 21.3439 18.9659 23.0007Z"
                  fill="black"
                />
              </svg>
              <h3
                className="cursor-pointer"
                onClick={() => handleConnectionTalisman()}
              >
                Talisman Wallet
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center">
              <Image
                onClick={() => handleConnectionSubWallet()}
                className="w-[80px] h-[80px] cursor-pointer"
                src={subwallet}
                alt="subwallet"
              />
              <h3
                className="cursor-pointer"
                onClick={() => handleConnectionSubWallet()}
              >
                SubWallet
              </h3>
            </div>

            <div className="flex flex-col items-center justify-center">
              <svg
                className="cursor-pointer"
                onClick={() => handleConnectionFearless()}
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M31.6315 11.3153L19.2596 12.9247C19.189 12.9339 19.1232 12.9658 19.0729 13.0156L18.0545 14.0177C17.9278 14.1427 17.7231 14.1427 17.596 14.0177L17.4177 13.8421C17.2898 13.7163 17.2898 13.5114 17.4177 13.3856L18.6334 12.1894C18.7614 12.0636 18.7614 11.8587 18.6334 11.7329L16.2289 9.36641C16.1023 9.24147 15.8975 9.24147 15.7705 9.36641L13.366 11.7329C13.238 11.8587 13.238 12.0636 13.366 12.1894L14.5817 13.3856C14.7097 13.5114 14.7097 13.7163 14.5817 13.8421L14.4034 14.0177C14.2768 14.1427 14.072 14.1427 13.9449 14.0177L12.9265 13.0156C12.8757 12.9658 12.8104 12.9339 12.7398 12.9247L0.368384 11.3153C0.0599368 11.2751 -0.123632 11.6455 0.097003 11.8627L2.79493 14.518C3.00056 14.7202 2.85582 15.068 2.56591 15.068C2.27599 15.068 2.13126 15.4157 2.33689 15.618L4.86581 18.1068C4.90728 18.1474 4.95936 18.1767 5.01584 18.1907L13.6241 20.327C13.6938 20.3444 13.7561 20.3842 13.8006 20.4401L15.1324 22.1151C15.3698 22.4397 15.7709 22.8154 15.7709 22.8154C15.8975 22.9403 16.1023 22.9403 16.2294 22.8154C16.2294 22.8154 16.5612 22.4833 16.8679 22.1151L18.1997 20.4401C18.2442 20.3842 18.306 20.3444 18.3762 20.327L26.9845 18.1907C27.0414 18.1767 27.093 18.1474 27.1345 18.1068L29.6634 15.618C29.869 15.4157 29.7243 15.068 29.4344 15.068C29.1445 15.068 28.9997 14.7202 29.2054 14.518L31.9033 11.8627C32.1235 11.6455 31.9399 11.2755 31.6315 11.3153Z"
                  fill="#ED145B"
                />
              </svg>
              <h3
                className="cursor-pointer"
                onClick={() => handleConnectionFearless()}
              >
                Fearless Wallet
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  // return (
  //   <button
  //     className="bg-black xl:bg-gradient-to-r from-sky-950 via-sky-900 to-sky-800 text-white dark:text-white px-3 py-3 text-sm rounded-lg"
  //     style={{ fontFamily: "VietnamSemiBold" }}
  //   >
  //     Connect Wallet
  //   </button>
  // );
}
