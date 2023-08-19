"use client";
import { useConnect } from "wagmi";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "../ui/button";
import { moonbeam } from "@wagmi/core/chains";
import subwallet from "../../public/assets/images/connect/subwallet.png";
import novawallet from "../../public/assets/images/novawallet.png";
import Link from "next/link";

export default function WalletConnections() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  console.log(connectors.map((connector) => console.log(connector.name)));
  return (
    <div className="flex justify-center items-center">
      <Dialog>
        <DialogTrigger>
          <Button className="hidden md:flex" variant="ghost" size={"icon"}>
            <svg
              className="h-[27px] w-[27px] "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              // className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
          </Button>
          <Button
            className="flex items-center gap-x-2 md:hidden"
            variant="ghost"
          >
            <svg
              className="h-[27px] w-[27px] "
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              // className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>
            <h3 className="ml-2 text-black dark:text-white">Connect Wallet</h3>
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-white dark:bg-neutral-900">
          <DialogHeader>
            <DialogTitle className="text-black dark:text-white mb-4 text-center">
              Connect your wallet
            </DialogTitle>
            <div className="flex flex-col gap-y-2">
              {connectors.map((connector) => {
                return (
                  <div className="w-full" key={connector.id}>
                    {connector.name === "MetaMask" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className=" w-full flex items-center gap-x-2"
                        >
                          <svg
                            // onClick={() => connect()}
                            className="cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
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
                          <span className="cursor-pointer">Metamask</span>
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                      </div>
                    )}

                    {connector.name === "Talisman" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className="w-full flex items-center gap-x-2"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="27"
                            height="27"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <rect
                              width="24"
                              height="24"
                              rx="4"
                              fill="#D5FF5C"
                            />
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
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                      </div>
                    )}

                    {connector.name === "SubWallet" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className="w-full flex items-center gap-x-2"
                        >
                          <Image
                            className="w-[27px] h-[27px] cursor-pointer"
                            src={subwallet}
                            alt="subwallet"
                          />
                          <h3 className="cursor-pointer">SubWallet</h3>
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                      </div>
                    )}

                    {connector.name === "NovaWallet" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className="w-full flex items-center gap-x-2"
                        >
                          <Image
                            className="w-[27px] h-[27px] cursor-pointer"
                            src={novawallet}
                            alt="NovaWallet"
                          />
                          <h3 className="cursor-pointer">NovaWallet</h3>
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                        {!connector.ready && (
                          <Button size={"default"} variant={"ghost"}>
                            <Link
                              target={"_blank"}
                              rel="norefferer"
                              href={"https://novawallet.io"}
                            >
                              {" "}
                              INSTALL
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}

                    {connector.name === "Enkrypt" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className="w-full flex items-center gap-x-2"
                        >
                          <svg
                            data-v-a4e890d5=""
                            width="27"
                            height="26"
                            viewBox="0 0 27 26"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M0 4.61833C0 2.06753 2.06773 0 4.61833 0H24V3.54363C24 5.37696 22.5139 6.86304 20.6806 6.86304H11.5681C9.01733 6.86304 6.9498 8.93077 6.9498 11.4816V12.6567C6.9498 15.2075 9.01733 17.275 11.5681 17.275H20.6806C22.5139 17.275 24 18.7613 24 20.5946V24.0002H4.61833C2.06773 24.0002 0 21.9322 0 19.3816V4.61833ZM11.7675 8.79444H21.1136C22.7078 8.79444 24 10.0869 24 11.6809V12.4572C24 14.0514 22.7078 15.3439 21.1136 15.3439H11.7675C10.1733 15.3439 8.8809 14.0514 8.8809 12.4572V11.6809C8.8809 10.0869 10.1733 8.79444 11.7675 8.79444Z"
                              fill="#9454FF"
                            ></path>
                          </svg>
                          <h3 className="cursor-pointer">Enkrypt Wallet</h3>
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                        {!connector.ready && (
                          <Button size={"default"} variant={"ghost"}>
                            <Link
                              target={"_blank"}
                              rel="norefferer"
                              href={"https://www.enkrypt.com"}
                            >
                              {" "}
                              INSTALL
                            </Link>
                          </Button>
                        )}
                      </div>
                    )}

                    {connector.name === "WalletConnect" && (
                      <div className="cursor-pointer flex gap-x-2 items-center justify-between gap-y-4 text-black dark:text-white p-5 shadow-lg dark:shadow-slate-700 w-full">
                        <button
                          onClick={() => {
                            connect({ chainId: moonbeam.id, connector });
                          }}
                          disabled={!connector.ready}
                          className="w-full flex items-center gap-x-2"
                        >
                          <svg
                            fill="none"
                            width="27"
                            height="26"
                            viewBox="0 0 480 332"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="m126.613 93.9842c62.622-61.3123 164.152-61.3123 226.775 0l7.536 7.3788c3.131 3.066 3.131 8.036 0 11.102l-25.781 25.242c-1.566 1.533-4.104 1.533-5.67 0l-10.371-10.154c-43.687-42.7734-114.517-42.7734-158.204 0l-11.107 10.874c-1.565 1.533-4.103 1.533-5.669 0l-25.781-25.242c-3.132-3.066-3.132-8.036 0-11.102zm280.093 52.2038 22.946 22.465c3.131 3.066 3.131 8.036 0 11.102l-103.463 101.301c-3.131 3.065-8.208 3.065-11.339 0l-73.432-71.896c-.783-.767-2.052-.767-2.835 0l-73.43 71.896c-3.131 3.065-8.208 3.065-11.339 0l-103.4657-101.302c-3.1311-3.066-3.1311-8.036 0-11.102l22.9456-22.466c3.1311-3.065 8.2077-3.065 11.3388 0l73.4333 71.897c.782.767 2.051.767 2.834 0l73.429-71.897c3.131-3.065 8.208-3.065 11.339 0l73.433 71.897c.783.767 2.052.767 2.835 0l73.431-71.895c3.132-3.066 8.208-3.066 11.339 0z"
                              fill="#3396ff"
                            />
                          </svg>
                          <h3 className="cursor-pointer">WalletConnect</h3>
                        </button>
                        {isLoading && connector.id === pendingConnector?.id && (
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
