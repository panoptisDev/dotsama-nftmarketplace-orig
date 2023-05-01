import React from "react";
import Image from "next/image";
import Verified from "../../../public/assets/images/verified.svg";
import banner from "../../../public/assets/images/launchpad/1440.png";

export default function LaunchPadCollectionPage() {
  return (
    <div className="flex justify-center text-black dark:text-white my-14 md:my-24">
      <div className="w-5/6 md:w-3/4">
        <div className="flex justify-center items-center gap-x-2">
          <h1 className="text-center">zkAnimals</h1>
          <Image className="" src={Verified} alt="item" />
        </div>
        <div className="flex justify-center items-center gap-x-3 my-4">
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.18 14c-1.653.005-2.72 1.888-1.702 3.316C2.938 19.36 5.583 21 10 21c6.845 0 12.34-5.578 11.57-12.169l1.128-2.254c.781-1.563-.577-3.34-2.29-2.998l-1.49.298a7.45 7.45 0 00-1.152-.48C17.086 3.176 16.262 3 15.5 3c-1.37 0-2.551.351-3.49 1.056-.929.697-1.452 1.612-1.739 2.453a6.64 6.64 0 00-.277 1.15 10.105 10.105 0 01-1.603-.667c-1.203-.624-2.176-1.414-2.725-2.106-.92-1.163-2.872-1.077-3.557.434-.965 2.13-.7 4.653.167 6.693.29.683.67 1.36 1.131 1.985L3.181 14zM10 19c-3.863 0-5.861-1.4-6.894-2.846a.097.097 0 01.08-.154c1.051-.003 3.208-.053 4.63-.886.074-.043.058-.151-.023-.178-3.316-1.115-5.2-5.837-3.863-8.79a.099.099 0 01.168-.018c1.53 1.93 4.872 3.82 7.78 3.87a.102.102 0 00.102-.118C11.862 9.12 11.415 5 15.5 5c.976 0 2.427.476 2.962.963a.105.105 0 00.09.026L20.8 5.54a.1.1 0 01.11.143L19.515 8.47a.102.102 0 00-.01.063C20.483 14.02 15.989 19 10 19z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.64 15.359c1.998 0 3.641-1.635 3.641-3.68S9.638 8 7.641 8C5.643 8 4 9.634 4 11.68c0 2.044 1.643 3.679 3.64 3.679zm0 2c3.116 0 5.641-2.543 5.641-5.68C13.281 8.543 10.756 6 7.641 6 4.525 6 2 8.543 2 11.68c0 3.136 2.526 5.679 5.64 5.679zM16.874 14.527c.33-.627.595-1.63.595-2.847 0-1.219-.265-2.222-.595-2.848a2.475 2.475 0 00-.225-.36c-.063.08-.139.195-.226.36-.33.626-.595 1.63-.595 2.848 0 1.217.265 2.22.595 2.847.087.165.164.28.226.36a2.47 2.47 0 00.225-.36zm-.4.53l.015-.007-.014.007zm.334-.007l.015.007s-.005-.001-.015-.007zm.015-6.748l-.015.007c.01-.006.014-.008.015-.007zm-.334.007a.046.046 0 01-.015-.007s.006.001.015.007zm.16 8.717c1.557 0 2.82-2.394 2.82-5.346 0-2.954-1.263-5.347-2.82-5.347-1.558 0-2.82 2.394-2.82 5.347 0 2.952 1.262 5.346 2.82 5.346zM20.23 8.71c-.134.817-.214 1.848-.214 2.97 0 1.12.08 2.152.214 2.969.181 1.109.462 1.82.778 1.82s.597-.711.779-1.82c.133-.817.213-1.848.213-2.97 0-1.12-.08-2.152-.213-2.969-.182-1.109-.463-1.82-.779-1.82-.315 0-.596.711-.778 1.82z"
              fill="currentColor"
            ></path>
          </svg>

          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            focusable="false"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.747 18.177C14.485 16.699 15 14.518 15 12s-.515-4.7-1.253-6.177C12.948 4.226 12.215 4 12 4c-.215 0-.948.226-1.747 1.823C9.515 7.301 9 9.482 9 12s.515 4.7 1.253 6.177C11.052 19.774 11.785 20 12 20c.215 0 .948-.226 1.747-1.823zM12 22c2.761 0 5-4.477 5-10S14.761 2 12 2 7 6.477 7 12s2.239 10 5 10z"
              fill="currentColor"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.95 13a10.106 10.106 0 000-2H2.05a10.118 10.118 0 000 2h19.9z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex justify-center items-center mt-4 mb-10">
          <h3 className="text-sm py-2 px-2 bg-orange-500 rounded-lg">
            FEATURED LAUNCH 🚀
          </h3>
        </div>
        <div className="flex justify-center">
          <Image src={banner} alt="pBanner" />
        </div>
        <div className="flex justify-center my-8">
          <div className="stats banner-shadow bg-white dark:bg-black">
            <div className="stat">
              <div className="stat-title text-gray-400 font-medium">
                MINT START
              </div>
              <div className="stat-value text-black dark:text-white text-2xl mt-2">
                25 March 2023
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-gray-400 font-medium">
                MINT END
              </div>
              <div className="stat-value text-black dark:text-white text-2xl mt-2">
                <span className="text-green-500">Launched</span> 🚀
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-gray-400 font-medium">
                START PRICE
              </div>
              <div className="stat-value text-black dark:text-white text-2xl mt-2">
                0.01 ETH
              </div>
            </div>

            <div className="stat">
              <div className="stat-title text-gray-400 font-medium">AMOUNT</div>
              <div className="stat-value text-black dark:text-white text-2xl mt-2">
                999
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-5 py-2 bg-blue-700 rounded-full text-white flex gap-x-2 items-center">
            Open Mint Page{" "}
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.616 3.659a1 1 0 011.039-.96l4.76.19a1 1 0 01.959.96l.19 4.76a1 1 0 11-1.998.08l-.1-2.478-6.87 6.87a1 1 0 01-1.414-1.414l6.87-6.87-2.477-.1a1 1 0 01-.96-1.038z"
                fill="currentColor"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11 6a7 7 0 107 7 1 1 0 112 0 9 9 0 11-9-9 1 1 0 110 2z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
