"use client";
import { useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { web3Accounts, web3Enable } from "@polkadot/extension-dapp";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types";
import Image from "next/image";
import subwallet from "../../public/assets/images/connect/subwallet.png";
import novawallet from "../../public/assets/images/connect/nova.png";
import Link from "next/link";
import type { InjectedExtension } from "@polkadot/extension-inject/types";
import { objectSpread } from "@polkadot/util";
const { ApiPromise, WsProvider } = require("@polkadot/api");

interface InjectedAccountExt {
  address: string;
  meta: {
    name: string;
    source: string;
    whenCreated: number;
  };
}

export default function ConnectPage() {
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

  async function handleConnectionNova(): Promise<InjectedAccountExt[]> {
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

  async function connectToFearlessWallet(): Promise<void> {
    try {
      const provider = new WsProvider("wss://rpc.polkadot.io");
      const api = await ApiPromise.create({ provider });

      const extensions = await web3Enable("DotsamaNFT");

      if (extensions.length === 0) {
        throw new Error("No wallet found");
      }
    } catch (e) {
      alert(e);
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
    <div className="my-10 md:my-14 flex justify-center items-center">
      <div className="w-5/6 md:w-1/2">
        <h1 className="text-2xl font-bold mb-10 text-center text-black dark:text-white">
          Connect Wallet
        </h1>
        <div className="grid grid-cols-2 gap-y-10 gap-x-5">
          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => connect()}
          >
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
          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => handleConnectionTalisman()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" rx="4" fill="#D5FF5C" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.5349 12.9159C16.6871 13.2472 17.135 13.3643 17.3929 13.1065L17.8651 12.6345C18.3535 12.1464 19.1453 12.1464 19.6337 12.6345C20.1221 13.1227 20.1221 13.9141 19.6337 14.4023L15.8097 18.2246C14.8921 19.3104 13.5198 20 11.9865 20C10.3851 20 8.95942 19.2478 8.04385 18.0777L4.36629 14.4018C3.87791 13.9136 3.87791 13.1222 4.36629 12.634C4.85467 12.1459 5.64649 12.1459 6.13487 12.634L6.60044 13.0994C6.85253 13.3514 7.29002 13.238 7.43894 12.9141V12.9141C7.46838 12.8501 7.48439 12.7814 7.48439 12.711L7.48438 7.00059C7.48438 6.30991 8.04428 5.75001 8.73496 5.75001C9.42563 5.75001 9.98553 6.30991 9.98553 7.00058L9.98553 9.88892C9.98553 10.1376 10.2403 10.3065 10.4774 10.2315V10.2315C10.6276 10.1841 10.736 10.0474 10.736 9.89001L10.736 5.25041C10.736 4.55974 11.2959 3.99984 11.9866 3.99984C12.6773 3.99984 13.2372 4.55974 13.2372 5.25041L13.2372 9.89018C13.2372 10.0476 13.3456 10.1842 13.4957 10.2316V10.2316C13.7327 10.3065 13.9874 10.1377 13.9874 9.88909L13.9874 7.00059C13.9874 6.30991 14.5473 5.75001 15.2379 5.75001C15.9286 5.75001 16.4885 6.30991 16.4885 7.00058L16.4885 12.7086C16.4885 12.7805 16.5049 12.8506 16.5349 12.9159V12.9159Z"
                fill="#FD4848"
              />
              <path
                d="M15.9885 15.5C15.9885 15.5 14.1969 18 11.9867 18C9.77655 18 7.98486 15.5 7.98486 15.5C7.98486 15.5 9.77655 13 11.9867 13C14.1969 13 15.9885 15.5 15.9885 15.5Z"
                fill="#D5FF5C"
              />
              <path
                d="M13.8543 15.5C13.8543 16.5311 13.018 17.3671 11.9863 17.3671C10.9545 17.3671 10.1183 16.5311 10.1183 15.5C10.1183 14.4689 10.9545 13.6329 11.9863 13.6329C13.018 13.6329 13.8543 14.4689 13.8543 15.5Z"
                stroke="#FD4848"
                strokeWidth="0.265831"
              />
              <path
                d="M13.1041 15.5C13.1041 16.1169 12.6037 16.6171 11.9864 16.6171C11.3691 16.6171 10.8688 16.1169 10.8688 15.5C10.8688 14.8831 11.3691 14.3829 11.9864 14.3829C12.6037 14.3829 13.1041 14.8831 13.1041 15.5Z"
                stroke="#FD4848"
                strokeWidth="0.265831"
              />
              <path
                d="M14.605 15.5C14.605 16.9453 13.4327 18.1171 11.9866 18.1171C10.5405 18.1171 9.36827 16.9453 9.36827 15.5C9.36827 14.0547 10.5405 12.8829 11.9866 12.8829C13.4327 12.8829 14.605 14.0547 14.605 15.5Z"
                stroke="#FD4848"
                strokeWidth="0.265831"
              />
              <path
                d="M15.3552 15.5C15.3552 17.3595 13.847 18.8671 11.9865 18.8671C10.1259 18.8671 8.61778 17.3595 8.61778 15.5C8.61778 13.6405 10.1259 12.1329 11.9865 12.1329C13.847 12.1329 15.3552 13.6405 15.3552 15.5Z"
                stroke="#FD4848"
                strokeWidth="0.265831"
              />
              <path
                d="M12.3534 15.5C12.3534 15.7027 12.1891 15.8671 11.9863 15.8671C11.7836 15.8671 11.6192 15.7027 11.6192 15.5C11.6192 15.2973 11.7836 15.1329 11.9863 15.1329C12.1891 15.1329 12.3534 15.2973 12.3534 15.5Z"
                fill="#162BEB"
                stroke="#FD4848"
                strokeWidth="0.265831"
              />
              <ellipse
                cx="11.9863"
                cy="15.5"
                rx="0.5"
                ry="0.5"
                fill="#FD4848"
              />
              <mask id="path-10-inside-1_4684_17034" fill="white">
                <path d="M15.9885 15.5C15.9885 15.5 14.1969 18 11.9867 18C9.77655 18 7.98486 15.5 7.98486 15.5C7.98486 15.5 9.77655 13 11.9867 13C14.1969 13 15.9885 15.5 15.9885 15.5Z" />
              </mask>
              <path
                d="M15.9885 15.5C15.9885 15.5 14.1969 18 11.9867 18C9.77655 18 7.98486 15.5 7.98486 15.5C7.98486 15.5 9.77655 13 11.9867 13C14.1969 13 15.9885 15.5 15.9885 15.5Z"
                stroke="#D5FF5C"
                strokeWidth="0.531663"
                mask="url(#path-10-inside-1_4684_17034)"
              />
            </svg>
            <h3
              className="cursor-pointer"
              onClick={() => handleConnectionTalisman()}
            >
              Talisman Wallet
            </h3>
          </div>

          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => handleConnectionSubWallet()}
          >
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

          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => handleConnectionNova()}
          >
            <Image
              className="w-[80px] h-[80px] rounded-lg"
              src={novawallet}
              alt="nova"
            />
            <h3
              className="cursor-pointer"
              onClick={() => handleConnectionNova()}
            >
              Nova Wallet
            </h3>
          </div>

          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => connectToFearlessWallet()}
          >
            <svg
              className="cursor-pointer"
              onClick={() => connectToFearlessWallet()}
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
              onClick={() => connectToFearlessWallet()}
            >
              Fearless Wallet
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}