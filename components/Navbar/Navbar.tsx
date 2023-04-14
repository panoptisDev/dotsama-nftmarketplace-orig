"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import lightLogo from "../../public/assets/images/light-logo.png";
import logo from "../../public/assets/images/logo.png";
import bnbChain from "../../public/assets/images/bnbchain.png";
import Link from "next/link";
import Search from "../Navbar/Search";
import Connect from "./Connect";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [clicked, isClicked] = useState(false);
  const [sClicked, isSClicked] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("darkMode", (!isDarkMode).toString());
  };

  // Check localStorage for the dark mode value on mount
  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode");

    if (darkMode === "true") {
      setIsDarkMode(true);
    }
  }, []);

  // Apply the dark class to the body element
  useEffect(() => {
    const body = document.querySelector("html");
    if (body) {
      if (isDarkMode) {
        body.classList.add("dark");
      } else {
        body.classList.remove("dark");
      }
    }
  }, [isDarkMode]);

  return (
    <div>
      <div className="hidden desktop:block py-0 px-0 md:px-8 md:py-8">
        <div className="flex items-center nav-menu justify-between text-black dark:text-white ">
          <div className="flex items-center">
            {!isDarkMode ? (
              <Link href={"/"}>
                <Image src={logo} width={100} height={100} alt="logo" />
              </Link>
            ) : (
              <Link href={"/"}>
                <Image src={lightLogo} width={100} height={100} alt="logo" />
              </Link>
            )}
            <div className="">
              <div className="flex ml-8 items-center">
                <div className="dropdown dropdown-hover ">
                  <label
                    tabIndex={0}
                    className="btn m-1 bg-transparent border-0 text-black dark:text-white hover:bg-transparent"
                  >
                    Apply for NFT Verification and Launchpad
                    {!isDarkMode ? (
                      <svg
                        className="ml-2"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                          fill="black"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="ml-2"
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                          fill="white"
                        />
                      </svg>
                    )}
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-white dark:bg-black rounded-box w-80 banner-shadow"
                  >
                    <li className="dark:hover:bg-black">
                      <span>
                        <Link className="font-semibold" href={"/verify"}>
                          Apply for NFT Verification
                        </Link>
                      </span>
                    </li>
                    <li className="dark:hover:bg-black">
                      <span>
                        <Link className="font-semibold" href={"/launchpad"}>
                          Apply for NFT Launchpad
                        </Link>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Search isDarkMode={isDarkMode} />
          <div className="hidden desktop:block">
            <div className="flex gap-4">
              <div className="flex items-center">
                <Image src={bnbChain} alt="bnb-logo" />
                <h3 className="ml-1">BNB Chain</h3>
              </div>
              <div className="flex items-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-black dark:fill-white"
                    d="M1.99832 7.19863C1.84937 7.77846 1.77424 8.37478 1.77469 8.97344C1.77469 9.58575 1.85279 10.1803 1.99832 10.7483H4.52566C4.40602 9.56807 4.40602 8.37881 4.52566 7.19863H1.99832ZM2.72422 5.42381H4.80608C5.04213 4.34384 5.38289 3.37656 5.80086 2.57168C4.51251 3.19235 3.44055 4.18608 2.72422 5.42381ZM15.7496 7.19863H13.2223C13.3419 8.37881 13.3419 9.56807 13.2223 10.7483H15.7496C16.0483 9.58391 16.0483 8.36298 15.7496 7.19863ZM15.0237 5.42381C14.3074 4.18608 13.2354 3.19235 11.947 2.57168C12.3659 3.37656 12.7058 4.34384 12.9418 5.42381H15.0237ZM6.31112 7.19863C6.24463 7.78789 6.21145 8.38044 6.21173 8.97344C6.21173 9.58132 6.24545 10.1759 6.31112 10.7483H11.4368C11.5704 9.56882 11.5704 8.37806 11.4368 7.19863H6.31112ZM6.62881 5.42381H11.1191C10.9576 4.75674 10.7246 4.10904 10.4243 3.49192C9.86696 2.37823 9.27063 1.87418 8.87395 1.87418C8.4764 1.87418 7.88095 2.37823 7.32365 3.49192C7.04412 4.05277 6.80896 4.70501 6.62881 5.42381ZM2.72422 12.5231C3.44055 13.7608 4.51251 14.7545 5.80086 15.3752C5.38201 14.5703 5.04213 13.603 4.80608 12.5231H2.72422ZM15.0237 12.5231H12.9418C12.7058 13.603 12.365 14.5703 11.947 15.3752C13.2354 14.7545 14.3074 13.7608 15.0237 12.5231ZM6.62881 12.5231C6.80896 13.2419 7.04412 13.8941 7.32365 14.455C7.88095 15.5687 8.47728 16.0727 8.87395 16.0727C9.27151 16.0727 9.86696 15.5687 10.4243 14.455C10.7038 13.8941 10.939 13.2419 11.1191 12.5231H6.62881ZM8.87395 17.8475C3.9728 17.8475 -0.00012207 13.8746 -0.00012207 8.97344C-0.00012207 4.07229 3.9728 0.0993652 8.87395 0.0993652C13.7751 0.0993652 17.748 4.07229 17.748 8.97344C17.748 13.8746 13.7751 17.8475 8.87395 17.8475Z"
                    fill="white"
                  />
                </svg>
                <h3 className="ml-1">ENG-USD</h3>
              </div>
              <Connect />
              <div className="flex items-center gap-3">
                <svg
                  className="cursor-pointer"
                  onClick={toggleDarkMode}
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="fill-black dark:fill-white"
                    cx="13"
                    cy="13"
                    r="13"
                  />
                  <path
                    className="fill-white dark:fill-black"
                    d="M21.0954 14.5754C20.7266 15.8953 20.0187 17.0957 19.0421 18.0571C18.0655 19.0185 16.8542 19.7074 15.5287 20.0554C14.2032 20.4033 12.8097 20.3981 11.4869 20.0402C10.1641 19.6824 8.95798 18.9844 7.98859 18.0157C7.0192 17.047 6.3203 15.8413 5.96142 14.5187C5.60255 13.196 5.5962 11.8024 5.943 10.4765C6.28981 9.15064 6.97768 7.93867 7.9382 6.96118C8.89872 5.98368 10.0984 5.27473 11.4179 4.90485C11.5146 4.87371 11.6174 4.86681 11.7174 4.88474C11.8174 4.90267 11.9114 4.94488 11.9913 5.00767C12.0711 5.07046 12.1343 5.1519 12.1753 5.24484C12.2163 5.33777 12.2338 5.43935 12.2263 5.54065C12.2261 5.58871 12.2182 5.63642 12.2028 5.68194C11.8914 6.80595 11.8837 7.99244 12.1805 9.12039C12.4773 10.2483 13.068 11.2774 13.8922 12.1025C14.7165 12.9276 15.7448 13.5193 16.8724 13.8172C17.9999 14.1152 19.1863 14.1086 20.3105 13.7983L20.4832 13.7669C20.6198 13.7658 20.753 13.8088 20.8633 13.8893C20.9735 13.9699 21.0549 14.0839 21.0954 14.2143C21.1349 14.3314 21.1349 14.4583 21.0954 14.5754Z"
                  />
                </svg>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="fill-black dark:fill-white"
                    cx="12"
                    cy="12"
                    r="12"
                    fill="black"
                  />
                  <path
                    className="fill-white dark:fill-black"
                    d="M12 4C12.8487 4 13.6626 4.33714 14.2627 4.93726C14.8628 5.53737 15.2 6.35131 15.2 7.2C15.2 8.04869 14.8628 8.86263 14.2627 9.46274C13.6626 10.0629 12.8487 10.4 12 10.4C11.1513 10.4 10.3374 10.0629 9.73723 9.46274C9.13712 8.86263 8.79998 8.04869 8.79998 7.2C8.79998 6.35131 9.13712 5.53737 9.73723 4.93726C10.3374 4.33714 11.1513 4 12 4ZM12 12C15.536 12 18.4 13.432 18.4 15.2V16.8H5.59998V15.2C5.59998 13.432 8.46398 12 12 12Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE NAVBAR */}
      <div className="block desktop:hidden">
        <div className="flex text-black dark:text-white">
          <div className="flex-1 pl-3 py-6">
            {!isDarkMode ? (
              <Link href={"/"}>
                <Image src={logo} width={100} height={100} alt="logo" />
              </Link>
            ) : (
              <Link href={"/"}>
                <Image src={lightLogo} width={100} height={100} alt="logo" />
              </Link>
            )}
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="py-6">
                <button
                  className="btn btn-ghost btn-circle"
                  onClick={() => isSClicked(!sClicked)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </label>
              <div
                tabIndex={0}
                className={
                  sClicked
                    ? "hidden"
                    : "mt-3 card card-compact dropdown-content w-[80vw] bg-base-100 shadow"
                }
              >
                <div className="card-body">
                  <Search isDarkMode={isDarkMode} />
                </div>
              </div>
            </div>

            <div className="dropdown dropdown-end">
              <label className="btn btn-ghost btn-circle avatar py-6">
                <button
                  tabIndex={0}
                  onClick={() => isClicked(!clicked)}
                  className="btn btn-square btn-ghost z-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block w-5 h-5 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </label>
              <ul
                tabIndex={0}
                className={
                  clicked
                    ? "menu menu-compact dropdown-content p-2 shadow blurNav w-[100vw] fixed top-0 h-[350px]"
                    : "hidden"
                }
              >
                <li className="mb-5">
                  <div className="flex justify-between">
                    {!isDarkMode ? (
                      <Image src={logo} width={100} height={100} alt="logo" />
                    ) : (
                      <Image
                        src={lightLogo}
                        width={100}
                        height={100}
                        alt="logo"
                      />
                    )}
                    <span className="">
                      <svg
                        className="fill-[#1A1A1A]"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="24"
                        height="24"
                        viewBox="0 0 64 64"
                        onClick={() => isClicked(false)}
                      >
                        <path d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                      </svg>
                    </span>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col justify-center">
                    <table className="table-auto">
                      <tbody>
                        <tr>
                          <td>
                            <Image
                              className="mb-2"
                              width={26}
                              height={26}
                              src={bnbChain}
                              alt="bnb-logo"
                            />
                          </td>
                          <td>
                            <h3 className="ml-2 mb-2 text-black dark:text-white">
                              BNB Chain
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <svg
                              className="mb-2"
                              width="26"
                              height="26"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                className="fill-black dark:fill-white"
                                d="M1.99832 7.19863C1.84937 7.77846 1.77424 8.37478 1.77469 8.97344C1.77469 9.58575 1.85279 10.1803 1.99832 10.7483H4.52566C4.40602 9.56807 4.40602 8.37881 4.52566 7.19863H1.99832ZM2.72422 5.42381H4.80608C5.04213 4.34384 5.38289 3.37656 5.80086 2.57168C4.51251 3.19235 3.44055 4.18608 2.72422 5.42381ZM15.7496 7.19863H13.2223C13.3419 8.37881 13.3419 9.56807 13.2223 10.7483H15.7496C16.0483 9.58391 16.0483 8.36298 15.7496 7.19863ZM15.0237 5.42381C14.3074 4.18608 13.2354 3.19235 11.947 2.57168C12.3659 3.37656 12.7058 4.34384 12.9418 5.42381H15.0237ZM6.31112 7.19863C6.24463 7.78789 6.21145 8.38044 6.21173 8.97344C6.21173 9.58132 6.24545 10.1759 6.31112 10.7483H11.4368C11.5704 9.56882 11.5704 8.37806 11.4368 7.19863H6.31112ZM6.62881 5.42381H11.1191C10.9576 4.75674 10.7246 4.10904 10.4243 3.49192C9.86696 2.37823 9.27063 1.87418 8.87395 1.87418C8.4764 1.87418 7.88095 2.37823 7.32365 3.49192C7.04412 4.05277 6.80896 4.70501 6.62881 5.42381ZM2.72422 12.5231C3.44055 13.7608 4.51251 14.7545 5.80086 15.3752C5.38201 14.5703 5.04213 13.603 4.80608 12.5231H2.72422ZM15.0237 12.5231H12.9418C12.7058 13.603 12.365 14.5703 11.947 15.3752C13.2354 14.7545 14.3074 13.7608 15.0237 12.5231ZM6.62881 12.5231C6.80896 13.2419 7.04412 13.8941 7.32365 14.455C7.88095 15.5687 8.47728 16.0727 8.87395 16.0727C9.27151 16.0727 9.86696 15.5687 10.4243 14.455C10.7038 13.8941 10.939 13.2419 11.1191 12.5231H6.62881ZM8.87395 17.8475C3.9728 17.8475 -0.00012207 13.8746 -0.00012207 8.97344C-0.00012207 4.07229 3.9728 0.0993652 8.87395 0.0993652C13.7751 0.0993652 17.748 4.07229 17.748 8.97344C17.748 13.8746 13.7751 17.8475 8.87395 17.8475Z"
                                fill="white"
                              />
                            </svg>
                          </td>
                          <td>
                            <h3 className="ml-2 mb-2 text-black dark:text-white">
                              ENG - USD
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <svg
                              className="cursor-pointer mb-2"
                              width="26"
                              height="26"
                              viewBox="0 0 26 26"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              onClick={toggleDarkMode}
                            >
                              <circle
                                className="fill-black dark:fill-white"
                                cx="13"
                                cy="13"
                                r="13"
                              />
                              <path
                                className="fill-white dark:fill-black"
                                d="M21.0954 14.5754C20.7266 15.8953 20.0187 17.0957 19.0421 18.0571C18.0655 19.0185 16.8542 19.7074 15.5287 20.0554C14.2032 20.4033 12.8097 20.3981 11.4869 20.0402C10.1641 19.6824 8.95798 18.9844 7.98859 18.0157C7.0192 17.047 6.3203 15.8413 5.96142 14.5187C5.60255 13.196 5.5962 11.8024 5.943 10.4765C6.28981 9.15064 6.97768 7.93867 7.9382 6.96118C8.89872 5.98368 10.0984 5.27473 11.4179 4.90485C11.5146 4.87371 11.6174 4.86681 11.7174 4.88474C11.8174 4.90267 11.9114 4.94488 11.9913 5.00767C12.0711 5.07046 12.1343 5.1519 12.1753 5.24484C12.2163 5.33777 12.2338 5.43935 12.2263 5.54065C12.2261 5.58871 12.2182 5.63642 12.2028 5.68194C11.8914 6.80595 11.8837 7.99244 12.1805 9.12039C12.4773 10.2483 13.068 11.2774 13.8922 12.1025C14.7165 12.9276 15.7448 13.5193 16.8724 13.8172C17.9999 14.1152 19.1863 14.1086 20.3105 13.7983L20.4832 13.7669C20.6198 13.7658 20.753 13.8088 20.8633 13.8893C20.9735 13.9699 21.0549 14.0839 21.0954 14.2143C21.1349 14.3314 21.1349 14.4583 21.0954 14.5754Z"
                              />
                            </svg>
                          </td>
                          <td>
                            <h3
                              onClick={toggleDarkMode}
                              className="ml-2 mb-2 text-black dark:text-white"
                            >
                              Night Mode
                            </h3>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <svg
                              className="mb-2"
                              width="27"
                              height="27"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                className="fill-black dark:fill-white"
                                cx="12"
                                cy="12"
                                r="12"
                                fill="black"
                              />
                              <path
                                className="fill-white dark:fill-black"
                                d="M12 4C12.8487 4 13.6626 4.33714 14.2627 4.93726C14.8628 5.53737 15.2 6.35131 15.2 7.2C15.2 8.04869 14.8628 8.86263 14.2627 9.46274C13.6626 10.0629 12.8487 10.4 12 10.4C11.1513 10.4 10.3374 10.0629 9.73723 9.46274C9.13712 8.86263 8.79998 8.04869 8.79998 7.2C8.79998 6.35131 9.13712 5.53737 9.73723 4.93726C10.3374 4.33714 11.1513 4 12 4ZM12 12C15.536 12 18.4 13.432 18.4 15.2V16.8H5.59998V15.2C5.59998 13.432 8.46398 12 12 12Z"
                              />
                            </svg>
                          </td>
                          <td>
                            <h3 className="ml-2 mb-2 text-black dark:text-white">
                              Profile
                            </h3>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <Connect />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center text-black dark:text-white bg-gray-200 dark:bg-gray-900 py-4 px-4">
          <Link href={"/launchpad"}>
            <h3>Apply for NFT Verification and Launchpad </h3>
          </Link>
          {!isDarkMode ? (
            <svg
              className="ml-2"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                fill="black"
              />
            </svg>
          ) : (
            <svg
              className="ml-2"
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                fill="white"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
