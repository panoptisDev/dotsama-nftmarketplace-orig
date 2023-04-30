"use client";
import { useState, useEffect } from "react";
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
  const [metamask, isMetamask] = useState<boolean>(true);
  const [talisman, isTalisman] = useState<boolean>(true);
  const [sub, isSub] = useState<boolean>(true);
  const [nova, isNova] = useState<boolean>(true);
  const [enkrypt, isEnkrypt] = useState<boolean>(true);
  const [selectedAccount, setSelectedAccount] =
    useState<InjectedAccountWithMeta>();
  const [accounts, setAccounts] = useState<InjectedAccountWithMeta[]>([]);
  // const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector(),
  });

  useEffect(() => {
    const checkWallets = () => {
      if (!(window as any).talismanEth) {
        isTalisman(false);
      }

      if (!(window as any).SubWallet) {
        isSub(false);
      }

      if (!(window as any).ethereum) {
        isMetamask(false);
      }

      if (!(window as any).injectedWeb3) {
        isNova(false);
        isEnkrypt(false);
      }
    };
    checkWallets();
  }, []);

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

  async function connectToEnkryptWallet(): Promise<void> {
    const extensions = await web3Enable("DotsamaNFT");
    if (!extensions) {
      throw Error("NO_EXTENSIONS_FOUND");
    }

    const allAccounts = await web3Accounts();
    console.log(allAccounts);
    if (allAccounts.length === 1) {
      setSelectedAccount(allAccounts[0]);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-5">
          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => connect()}
          >
            <svg
              onClick={() => connect()}
              className="cursor-pointer"
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
            <h3 className="cursor-pointer">Metamask</h3>
            {!metamask && (
              <Link target="_blank" href={"https://metamask.io/download/"}>
                <button className="px-2 py-1 bg-gray-300 rounded-2xl text-gray-500 text-sm">
                  INSTALL
                </button>
              </Link>
            )}
          </div>
          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => handleConnectionTalisman()}
          >
            <svg
              onClick={() => handleConnectionTalisman()}
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
            <h3 className="cursor-pointer">Talisman Wallet</h3>
            {!talisman && (
              <Link target="_blank" href={"https://www.talisman.xyz/"}>
                <button className="px-2 py-1 bg-gray-300 rounded-2xl text-gray-500 text-sm">
                  INSTALL
                </button>
              </Link>
            )}
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
            <h3 className="cursor-pointer">SubWallet</h3>
            {!sub && (
              <Link
                target="_blank"
                href={"https://subwallet.app/download.html"}
              >
                <button className="px-2 py-1 bg-gray-300 rounded-2xl text-gray-500 text-sm">
                  INSTALL
                </button>
              </Link>
            )}
          </div>

          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => handleConnectionNova()}
          >
            <Image
              onClick={() => handleConnectionNova()}
              className="w-[80px] h-[80px] rounded-lg"
              src={novawallet}
              alt="nova"
            />
            <h3 className="cursor-pointer">Nova Wallet</h3>
            {!nova && (
              <Link
                target="_blank"
                href={"https://subwallet.app/download.html"}
              >
                <button className="px-2 py-1 bg-gray-300 rounded-2xl text-gray-500 text-sm">
                  INSTALL
                </button>
              </Link>
            )}
          </div>

          <div
            className="cursor-pointer flex flex-col items-center justify-center gap-y-4 text-black dark:text-white p-5 shadow-xl"
            onClick={() => connectToEnkryptWallet()}
          >
            <svg
              onClick={() => connectToEnkryptWallet()}
              data-v-50a5d661=""
              width="100"
              height="80"
              viewBox="0 0 133 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M64.3409 7.59559C64.6278 7.21977 65.0733 6.99915 65.5458 6.99915H69.0673L63.941 13.2607L69.0673 19.5243H65.527C65.0528 19.5243 64.6062 19.3026 64.3197 18.925L60.8968 14.4132V19.5243H58.2131C57.6974 19.5243 57.2795 19.1064 57.2795 18.5909V3.72918C57.2795 3.21365 57.6974 2.79559 58.2131 2.79559H60.8968V12.1105L64.3409 7.59559ZM50.453 6.68279C48.9992 6.68279 47.837 7.33019 47.0616 8.2415V6.99909H44.3779C43.8624 6.99909 43.4444 7.41715 43.4444 7.93286V18.5908C43.4444 19.1064 43.8624 19.5244 44.3779 19.5244H47.0616V12.1088C47.0616 10.8653 47.9434 9.96095 49.2321 9.96095C50.5435 9.96095 51.2215 10.6618 51.2215 12.1991V19.5244H53.9054C54.4211 19.5244 54.839 19.1064 54.839 18.5908V11.1592C54.839 8.35591 53.1661 6.68279 50.453 6.68279ZM87.9242 7.62581L85.4066 14.8556L82.8892 7.62581C82.7586 7.2507 82.4048 6.99908 82.0076 6.99908H78.805L83.5302 19.1853L81.6081 23.7862H84.5062C84.9205 23.7862 85.2926 23.5334 85.4455 23.1481L91.85 6.99908H88.8058C88.4086 6.99908 88.0547 7.2507 87.9242 7.62581ZM113.643 16.54C112.388 16.54 111.812 15.9646 111.812 14.7092V9.98365H114.732C115.247 9.98365 115.665 9.5656 115.665 9.05006V6.99916H111.812V3.30882H109.264C108.748 3.30882 108.33 3.72687 108.33 4.24223V6.99916H107.478C106.962 6.99916 106.544 7.41722 106.544 7.93275V9.98365H108.308V14.9353C108.308 17.933 110 19.5243 112.772 19.5243H114.848C115.364 19.5243 115.782 19.1063 115.782 18.5909V16.54H113.643ZM35.3774 9.53129C33.994 9.53129 32.7951 10.5262 32.4492 11.9258H37.7984C37.7754 10.4811 36.7378 9.53129 35.3774 9.53129ZM28.9907 13.3072C28.9907 9.32796 31.8497 6.68276 35.4005 6.68276C38.6515 6.68276 41.3029 8.87569 41.3029 13.0582C41.3029 13.2569 41.2984 13.4467 41.2877 13.6434C41.2624 14.1027 40.874 14.4623 40.4048 14.4623H32.5183C33.0025 16.0654 34.4167 16.5401 36.3534 16.5401H40.4873V18.5908C40.4873 19.1063 40.0694 19.5244 39.5539 19.5244H35.8922C31.3962 19.5244 28.9907 17.1053 28.9907 13.3072ZM99.4057 16.584C97.7328 16.584 96.5121 15.2049 96.5121 13.2609C96.5121 11.3166 97.7328 9.9375 99.4284 9.9375C101.124 9.9375 102.367 11.3166 102.367 13.2383C102.367 15.1598 101.124 16.584 99.4057 16.584ZM100.423 6.68214C98.7708 6.68214 97.4022 7.4746 96.5574 8.59387V6.99863H93.8737C93.358 6.99863 92.9403 7.41651 92.9403 7.93204V22.8508C92.9403 23.3665 93.3582 23.7842 93.8737 23.7842H96.5574V17.6919C97.326 18.9803 98.8631 19.8394 100.491 19.8394C103.43 19.8394 106.03 17.2849 106.03 13.2608C106.03 9.25927 103.339 6.68214 100.423 6.68214ZM73.8309 8.35592C74.6221 7.46314 75.2947 6.82233 76.8452 6.82233C78.1286 6.82233 78.2043 7.41717 78.2043 7.9327V9.95848C75.4691 9.534 73.8309 10.3895 73.8309 12.7407V19.5243H71.147C70.6315 19.5243 70.2135 19.1064 70.2135 18.5908V7.9327C70.2135 7.41717 70.6315 6.99911 71.147 6.99911H73.8309V8.35592Z"
                fill="#684CFF"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 5.54104C0 3.30909 1.80927 1.5 4.04104 1.5H21V4.60068C21 6.20484 19.6997 7.50516 18.0955 7.50516H10.1221C7.89016 7.50516 6.08108 9.31443 6.08108 11.5464V12.5746C6.08108 14.8066 7.89016 16.6156 10.1221 16.6156H18.0955C19.6997 16.6156 21 17.9161 21 19.5203V22.5002H4.04104C1.80927 22.5002 0 20.6907 0 18.4589V5.54104ZM10.2966 9.19514H18.4743C19.8693 9.19514 21 10.326 21 11.7208V12.4001C21 13.795 19.8693 14.9259 18.4743 14.9259H10.2966C8.90161 14.9259 7.77076 13.795 7.77076 12.4001V11.7208C7.77076 10.326 8.90161 9.19514 10.2966 9.19514Z"
                fill="url(#paint0_radial_734_4589)"
              ></path>
              <defs>
                <radialGradient
                  id="paint0_radial_734_4589"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(0.582922 0.917034) rotate(55.378) scale(29.7535 118.891)"
                >
                  <stop offset="0.051483" stop-color="#C549FF"></stop>
                  <stop offset="0.815643" stop-color="#704BFF"></stop>
                </radialGradient>
              </defs>
            </svg>
            <h3 className="cursor-pointer">Enkrypt Wallet</h3>
            {!enkrypt && (
              <Link target="_blank" href={"https://www.enkrypt.com/"}>
                <button className="px-2 py-1 bg-gray-300 rounded-2xl text-gray-500 text-sm">
                  INSTALL
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
