"use client";
import React from "react";
import Script from "next/script";
import Image from "next/image";
import main from "../../../public/assets/images/item/main-Banner.png";
import "./item.modules.css";
import Trait from "./Traits";
import avatar from "../../../public/assets/images/item/avatar.png";
import Activities from "./Activities";
import Link from "next/link";

export default function Item() {
  const [liked, isLiked] = React.useState<boolean>(false);
  const [selectedInp, isSelectedInp] = React.useState<string>("attributes");

  return (
    <>
      <Script src="https://kit.fontawesome.com/aa92af4b25.js" />
      <div className="text-black dark:text-white px-6 md:px-20 py-8 md:py-10">
        <Link
          href={"/"}
          className="px-4 py-2 bg-black text-white dark:text-black dark:bg-white rounded-3xl"
        >
          Back to home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 my-8">
          <div className="m-auto md:m-0">
            <Image
              className="w-[80vw] md:w-screen rounded-3xl item-shadow"
              src={main}
              alt="main"
            />
          </div>
          <div className="mt-10 md:mt-0">
            <h1>Galxe OAT 2</h1>
            <h2 className="text-xl">
              TreasureLand x TAKANOTSUME DAN NFT WL...
            </h2>
            <div className="my-4 flex flex-row justify-between">
              <div className="flex flex-row gap-x-4 rounded-3xl border border-[#414040] w-20 py-1 justify-center">
                <span>21</span>
                <span>
                  <i
                    className={
                      liked
                        ? "fa-solid fa-heart cursor-pointer text-red-600"
                        : "fa-regular fa-heart cursor-pointer"
                    }
                    onClick={() => isLiked(!liked)}
                  ></i>
                </span>
              </div>
              <div className="flex flex-row gap-x-4">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-black dark:fill-white"
                    d="M22.5 25.5C21.875 25.5 21.3438 25.2812 20.9062 24.8438C20.4688 24.4062 20.25 23.875 20.25 23.25C20.25 23.1625 20.2562 23.0717 20.2687 22.9777C20.2812 22.8837 20.3 22.7995 20.325 22.725L15.0375 19.65C14.825 19.8375 14.5875 19.9845 14.325 20.091C14.0625 20.1975 13.7875 20.2505 13.5 20.25C12.875 20.25 12.3438 20.0312 11.9062 19.5938C11.4688 19.1562 11.25 18.625 11.25 18C11.25 17.375 11.4688 16.8438 11.9062 16.4062C12.3438 15.9688 12.875 15.75 13.5 15.75C13.7875 15.75 14.0625 15.8033 14.325 15.9097C14.5875 16.0163 14.825 16.163 15.0375 16.35L20.325 13.275C20.3 13.2 20.2812 13.1157 20.2687 13.0222C20.2562 12.9288 20.25 12.838 20.25 12.75C20.25 12.125 20.4688 11.5938 20.9062 11.1562C21.3438 10.7188 21.875 10.5 22.5 10.5C23.125 10.5 23.6562 10.7188 24.0938 11.1562C24.5312 11.5938 24.75 12.125 24.75 12.75C24.75 13.375 24.5312 13.9062 24.0938 14.3438C23.6562 14.7812 23.125 15 22.5 15C22.2125 15 21.9375 14.947 21.675 14.841C21.4125 14.735 21.175 14.588 20.9625 14.4L15.675 17.475C15.7 17.55 15.7188 17.6345 15.7313 17.7285C15.7438 17.8225 15.75 17.913 15.75 18C15.75 18.0875 15.7438 18.1782 15.7313 18.2723C15.7188 18.3663 15.7 18.4505 15.675 18.525L20.9625 21.6C21.175 21.4125 21.4125 21.2657 21.675 21.1597C21.9375 21.0537 22.2125 21.0005 22.5 21C23.125 21 23.6562 21.2188 24.0938 21.6562C24.5312 22.0938 24.75 22.625 24.75 23.25C24.75 23.875 24.5312 24.4062 24.0938 24.8438C23.6562 25.2812 23.125 25.5 22.5 25.5Z"
                  />
                  <circle cx="18" cy="18" r="17.5" stroke="#313131" />
                </svg>
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="18" cy="18" r="17.5" stroke="#313131" />
                  <ellipse
                    className="fill-black dark:fill-white"
                    cx="12"
                    cy="18"
                    rx="2"
                    ry="2"
                    transform="rotate(-90 12 18)"
                  />
                  <ellipse
                    className="fill-black dark:fill-white"
                    cx="18"
                    cy="18"
                    rx="2"
                    ry="2"
                    transform="rotate(-90 18 18)"
                  />
                  <ellipse
                    className="fill-black dark:fill-white"
                    cx="24"
                    cy="18"
                    rx="2"
                    ry="2"
                    transform="rotate(-90 24 18)"
                  />
                </svg>
              </div>
            </div>
            <h2 className="my-4">Preserved by 0x621E…5F98</h2>
            <div className="flex flex-row justify-between mt-6 mb-2 px-6 py-4 rounded-3xl bg-white dark:bg-[#23262f] banner-shadow items-center">
              <div className="flex flex-col">
                <h2 className="text-green-500 font-bold">0.4 BNB</h2>
                <h2 className="font-light">Price ($139.22 USD)</h2>
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center">
                  {/* The button to open modal */}
                  <label
                    htmlFor="my-modal-4"
                    className="cursor-pointer banner-shadow w-32 py-2 rounded-full text-center font-bold text-black dark:text-white bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900"
                    style={{ fontSize: "1rem", fontFamily: "VietnamSemiBold" }}
                  >
                    Make offer
                  </label>

                  {/* Put this part before </body> tag */}
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle bg-white dark:bg-black"
                  />
                  <label htmlFor="my-modal-4" className="modal cursor-pointer">
                    <label
                      className="modal-box relative dark:bg-black"
                      htmlFor=""
                    >
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-sm btn-circle absolute right-3 top-5"
                      >
                        ✕
                      </label>
                      <h1 className="font-bold">Offer to buy</h1>
                      <div className="form-control py-4">
                        <label className="label">
                          <span className="label-text text-black dark:text-gray-300">
                            Price
                          </span>
                        </label>
                        <label className="input-group">
                          <input
                            type="number"
                            placeholder="0.01"
                            className="input input-bordered"
                          />
                          <span className="dark:bg-gray-700">BNB</span>
                        </label>
                      </div>
                      <p className="text-xs">
                        In order to finalize the purchase, the owner must accept
                        your offer, and the payment will be held by the
                        marketplace. However, you have the option to cancel the
                        offer at any time if it is not accepted.
                      </p>
                      <button className="bg-[#3772ff] text-white btn w-[100%] rounded-full mt-8">
                        Offer to buy
                      </button>
                    </label>
                  </label>
                </div>
                <button
                  className="banner-shadow w-32 py-2 rounded-full font-bold bg-white dark:bg-black hover:bg-gray-200 dark:hover:bg-gray-900"
                  style={{ fontSize: "1rem", fontFamily: "VietnamSemiBold" }}
                >
                  Buy now
                </button>
              </div>
            </div>
            <p className="my-8">
              Hectic and fluttering, the Unichick is always on the move,
              discovering life at the fastest pace. Behind the hyperactive
              facade is the full presence of timidity and thoughtfulness.
            </p>
            <div>
              <div className="flex flex-row justify-between bg-white dark:bg-[#23262f] rounded-3xl p-4 banner-shadow">
                <button
                  className={
                    selectedInp === "attributes"
                      ? "font-bold rounded-3xl w-28 py-1 bg-gray-200 dark:bg-black text-xs md:text-base"
                      : "font-medium hover:font-bold rounded-3xl w-28 py-1 text-xs md:text-base"
                  }
                  onClick={() => isSelectedInp("attributes")}
                >
                  Attributes
                </button>
                <button
                  className={
                    selectedInp === "offers"
                      ? "font-bold rounded-3xl w-28 py-1 bg-gray-200 dark:bg-black text-xs md:text-base"
                      : "font-medium hover:font-bold rounded-3xl w-28 py-1 text-xs md:text-base"
                  }
                  onClick={() => isSelectedInp("offers")}
                >
                  Offers
                </button>
                <button
                  className={
                    selectedInp === "bids"
                      ? "font-bold rounded-3xl w-28 py-1 bg-gray-200 dark:bg-black text-xs md:text-base"
                      : "font-medium hover:font-bold rounded-3xl w-28 py-1 text-xs md:text-base"
                  }
                  onClick={() => isSelectedInp("bids")}
                >
                  Bids
                </button>
                <button
                  className={
                    selectedInp === "info"
                      ? "font-bold rounded-3xl w-28 py-1 bg-gray-200 dark:bg-black text-xs md:text-base"
                      : "font-medium hover:font-bold rounded-3xl w-28 py-1 text-xs md:text-base"
                  }
                  onClick={() => isSelectedInp("info")}
                >
                  Info
                </button>
              </div>
              <div className="my-6">
                {selectedInp === "attributes" && (
                  <div>
                    <Trait attribute="BACKGROUND" value="Blue" />
                    <Trait attribute="SKINS" value="Purple" />
                    <Trait attribute="EYES" value="Blue" />
                    <Trait attribute="CLOTHING" value="Blue Kaftan" />
                    <Trait attribute="MOUTH" value="Meat" />
                    <Trait attribute="EYEWEAR" value="NULL" />
                    <Trait attribute="HAIR" value="Yellow" />
                    <Trait attribute="GLASSES" value="NULL" />
                  </div>
                )}

                {selectedInp === "info" && (
                  <div>
                    <div className="flex flex-row justify-between my-3">
                      <h2 className="text-gray-500 font-semibold">Contract</h2>
                      <h2>0x26D6…268e</h2>
                    </div>
                    <div className="flex flex-row justify-between my-3">
                      <h2 className="text-gray-500 font-semibold">Token ID</h2>
                      <h2>1</h2>
                    </div>
                    <div className="flex flex-row justify-between my-3">
                      <h2 className="text-gray-500 font-semibold">
                        Blockchain
                      </h2>
                      <h2>BNB Chain</h2>
                    </div>
                    <div className="flex flex-row justify-between my-3">
                      <h2 className="text-gray-500 font-semibold">Metadata</h2>
                      <h2>Decentralized</h2>
                    </div>
                  </div>
                )}

                {selectedInp === "bids" && (
                  <div className="flex flex-row justify-start gap-x-4">
                    <Image
                      className="w-[60px] rounded-full"
                      src={avatar}
                      alt="avatar"
                    />
                    <div className="flex flex-col w-[100%] justify-center gap-y-2">
                      <div className="">
                        <span>
                          0x902c…b62E{" "}
                          <span className="text-gray-600">offers</span>
                        </span>
                        <span className="float-right">Lead</span>
                      </div>
                      <div className="">
                        <span className="text-green-600 font-bold">
                          0.3 BNB{" "}
                          <span className="pl-2 text-black dark:text-white font-normal text-sm">
                            ($104.34)
                          </span>
                        </span>
                        <span className="float-right">2 days ago</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 mt-20">
          <button className="bg-black dark:bg-white text-white dark:text-black py-2 px-5 rounded-full font-semibold">
            Activities
          </button>
          <button
            className="text-gray-500 py-2 px-5 cursor-not-allowed font-semibold"
            disabled={true}
          >
            Chart
          </button>
        </div>
        <div className="mt-10 flex justify-center">
          <div className="overflow-x-auto ">
            <table className="table-auto">
              <thead className="mb-10">
                <tr>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6">Type</h2>
                  </th>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6">Item</h2>
                  </th>
                  <th>
                    <h2 className="text-right pr-4 md:pr-6">Price</h2>
                  </th>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6">From</h2>
                  </th>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6">To</h2>
                  </th>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6">Date</h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <Activities />
                <Activities />
                <Activities />
                <Activities />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
