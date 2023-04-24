"use client";
import { Fragment, useState } from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/profile/banner.png";
import banner1 from "../../../public/assets/images/profile/banner1.png";
import Image1 from "../../../public/assets/images/profile/Rectangle70.png";
import Image2 from "../../../public/assets/images/profile/Rectangle71.png";
import CardFeature from "./CardFeature";
import Card from "../../../components/Discover/Card";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const category = [
  {
    id: 1,
    name: "Category",
  },
  {
    id: 1,
    name: "Category2",
  },
];

const chains = [
  {
    id: 1,
    name: "Moonbeam",
  },
  {
    id: 2,
    name: "Moonriver",
  },
  {
    id: 3,
    name: "Astar",
  },
  {
    id: 4,
    name: "Shiden",
  },
  {
    id: 5,
    name: "EXO (SAMA)",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function User() {
  const [selected3, setSelected3] = useState(chains[0]);
  const [selected4, setSelected4] = useState(category[0]);
  return (
    <div className="my-10 md:my-12 text-black dark:text-white">
      <Image className="w-[100vw]" src={banner} alt="banner" />
      <div className=" mx-4 md:mx-10">
        <div className="relative -top-2 md:-top-10 flex justify-center">
          <div className="grid grid-cols-6 md:grid-cols-5 gap-x-2 gap-y-5 md:gap-x-5">
            <Image
              className="w-full h-[15vh] md:h-[35vh] col-span-2 md:col-span-1 hidden md:block rounded-3xl"
              src={banner1}
              alt="profile"
            />

            <div className="h-[45vh] md:h-[35vh] banner-card banner-shadow col-span-6 md:col-span-2 rounded-3xl p-4 flex flex-col justify-evenly">
              <div className="flex justify-center">
                <Image
                  className="w-1/2 h-[20vh] md:h-[35vh] block md:hidden"
                  src={banner1}
                  alt="profile"
                />
              </div>
              <h1 className="text-center text-lg md:text-2xl">
                MRS SUNAYARA AHSAN
              </h1>
              <div className="flex justify-center gap-x-4">
                {" "}
                <svg
                  width="31"
                  height="27"
                  viewBox="0 0 31 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-black dark:fill-white"
                    d="M30.3709 2.20495C30.3711 1.96111 30.3066 1.72158 30.1841 1.51076C30.0616 1.29994 29.8854 1.12536 29.6734 1.0048C29.4615 0.884231 29.2214 0.82199 28.9776 0.824412C28.7337 0.826834 28.4949 0.893833 28.2854 1.01858C27.4774 1.49953 26.6075 1.86784 25.6997 2.11331C24.4034 1.00096 22.7501 0.392264 21.042 0.398485C19.1681 0.400642 17.3684 1.13096 16.0228 2.43523C14.6773 3.73949 13.8913 5.51561 13.8308 7.38854C10.1366 6.79943 6.78848 4.87126 4.42484 1.97171C4.28243 1.79892 4.10055 1.66292 3.89454 1.57516C3.68854 1.48741 3.46446 1.45048 3.24119 1.46749C3.01805 1.48586 2.80274 1.55832 2.61388 1.67858C2.42503 1.79885 2.26831 1.9633 2.15729 2.15773C1.58787 3.15142 1.26084 4.2654 1.20275 5.4092C1.14466 6.553 1.35714 7.69438 1.82295 8.74064L1.82025 8.74333C1.6109 8.87228 1.43813 9.05278 1.31846 9.26757C1.19879 9.48236 1.13622 9.72427 1.13675 9.97014C1.13421 10.173 1.14638 10.3757 1.17315 10.5768C1.31415 12.3138 2.08397 13.9397 3.33825 15.1497C3.25316 15.3118 3.20123 15.4892 3.18549 15.6716C3.16975 15.854 3.19051 16.0377 3.24657 16.212C3.7934 17.9157 4.9563 19.354 6.50771 20.2456C4.93152 20.8551 3.22963 21.0676 1.55197 20.8644C1.24146 20.8254 0.92693 20.8931 0.659969 21.0564C0.393008 21.2197 0.18947 21.4689 0.0827425 21.7631C-0.023985 22.0573 -0.0275647 22.379 0.0725902 22.6755C0.172745 22.972 0.370688 23.2256 0.633949 23.3948C3.51929 25.2532 6.87882 26.2412 10.3108 26.2407C14.2028 26.2845 18.0001 25.0408 21.1121 22.7032C24.2241 20.3655 26.4762 17.0649 27.5183 13.3148C28.0057 11.6812 28.2546 9.98573 28.2571 8.28096C28.2571 8.19063 28.2571 8.09761 28.2558 8.0046C28.9765 7.22729 29.5349 6.31392 29.8981 5.31803C30.2613 4.32214 30.4221 3.26377 30.3709 2.20495ZM25.8062 6.63894C25.5782 6.90861 25.4628 7.25574 25.484 7.60825C25.4975 7.83603 25.4961 8.06519 25.4961 8.28096C25.4933 9.72155 25.2821 11.1542 24.8692 12.5343C24.0182 15.7252 22.1209 18.5381 19.4813 20.5226C16.8417 22.5071 13.6125 23.5485 10.3108 23.4798C9.12483 23.4801 7.94291 23.3408 6.78952 23.0646C8.2603 22.5906 9.63551 21.8598 10.8514 20.9062C11.0754 20.7299 11.2393 20.4886 11.3206 20.2154C11.402 19.9422 11.3968 19.6505 11.3058 19.3804C11.2149 19.1103 11.0425 18.8749 10.8125 18.7066C10.5824 18.5384 10.3059 18.4454 10.0209 18.4405C8.87351 18.4226 7.77782 17.9601 6.96471 17.1503C7.17099 17.1112 7.37591 17.0627 7.57947 17.0047C7.87767 16.9198 8.13863 16.7371 8.32032 16.4858C8.50202 16.2346 8.59388 15.9295 8.58111 15.6198C8.56835 15.31 8.4517 15.0135 8.24995 14.7781C8.0482 14.5427 7.77309 14.382 7.46892 14.3219C6.80289 14.1904 6.17616 13.907 5.63745 13.4939C5.09875 13.0807 4.66257 12.5489 4.36283 11.9398C4.61233 11.9738 4.86341 11.995 5.11509 12.0031C5.41408 12.0077 5.70675 11.917 5.9508 11.7442C6.19484 11.5714 6.3776 11.3254 6.47265 11.0419C6.56374 10.7558 6.55905 10.4479 6.4593 10.1647C6.35956 9.88149 6.17019 9.63855 5.91992 9.4727C5.31271 9.06818 4.81532 8.51937 4.47229 7.87542C4.12925 7.23147 3.95129 6.5125 3.95435 5.78289C3.95435 5.69122 3.95704 5.59954 3.96244 5.50922C7.05646 8.39478 11.0696 10.0958 15.2948 10.3126C15.5081 10.321 15.7205 10.2808 15.916 10.1951C16.1115 10.1094 16.2849 9.9804 16.4232 9.81784C16.5601 9.6537 16.6571 9.46002 16.7064 9.25206C16.7558 9.04409 16.7562 8.8275 16.7076 8.61935C16.6287 8.28992 16.5884 7.9524 16.5876 7.61364C16.5889 6.43269 17.0586 5.30046 17.8936 4.4654C18.7287 3.63034 19.8609 3.16066 21.0419 3.15941C21.6495 3.15779 22.2508 3.28214 22.8079 3.52462C23.3651 3.76709 23.8659 4.12244 24.2787 4.56821C24.438 4.73951 24.6384 4.86722 24.8609 4.9392C25.0834 5.01118 25.3206 5.02503 25.55 4.97944C26.1171 4.86908 26.676 4.72045 27.223 4.53457C26.8499 5.29794 26.3731 6.00609 25.8062 6.63894Z"
                  />
                </svg>
                <h2 className="text-base md:text-xl">it0besshion</h2>
              </div>
              <div className="flex justify-evenly">
                <div className="text-base md:text-xl">
                  <span className="font-semibold">180k</span>
                  <span> followers</span>
                </div>
                <div className="text-base md:text-xl">
                  <span className="font-semibold">156k</span>
                  <span> following</span>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-5 px-0 md:px-8">
                  <div className="col-span-2">
                    <div className="flex justify-center items-center bg-[#d9d9d9] dark:bg-[#676767] h-10 md:h-12 rounded-lg">
                      <svg
                        width="36"
                        height="28"
                        viewBox="0 0 36 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          className="fill-black dark:fill-white"
                          d="M34.0971 9.88117V11.9911H25.1366V9.88117H34.0971ZM30.7571 6.28078V15.798H28.4855V6.28078H30.7571Z"
                        />
                        <path
                          className="fill-black dark:fill-white"
                          d="M18.9234 15.5582C20.212 14.5444 21.1525 13.1541 21.6142 11.5808C22.0759 10.0075 22.0357 8.32948 21.4993 6.7801C20.9628 5.23071 19.9568 3.88705 18.6211 2.93605C17.2855 1.98505 15.6866 1.474 14.047 1.474C12.4074 1.474 10.8085 1.98505 9.47288 2.93605C8.13723 3.88705 7.13121 5.23071 6.59477 6.7801C6.05833 8.32948 6.01815 10.0075 6.47982 11.5808C6.9415 13.1541 7.88206 14.5444 9.17067 15.5582C6.96262 16.4429 5.03601 17.9101 3.59625 19.8036C2.15648 21.697 1.25753 23.9457 0.995233 26.3098C0.976246 26.4824 0.991443 26.6571 1.03996 26.8238C1.08847 26.9906 1.16935 27.1461 1.27797 27.2816C1.49735 27.5552 1.81644 27.7305 2.16503 27.7688C2.51363 27.8071 2.86318 27.7054 3.13678 27.4861C3.41039 27.2667 3.58565 26.9476 3.62399 26.599C3.91261 24.0296 5.13774 21.6567 7.06532 19.9335C8.9929 18.2103 11.4878 17.2578 14.0733 17.2578C16.6588 17.2578 19.1537 18.2103 21.0813 19.9335C23.0089 21.6567 24.234 24.0296 24.5226 26.599C24.5583 26.922 24.7125 27.2203 24.9552 27.4363C25.1979 27.6523 25.5121 27.7708 25.837 27.7688H25.9816C26.3261 27.7292 26.641 27.5549 26.8577 27.2841C27.0743 27.0133 27.1752 26.6678 27.1382 26.323C26.8747 23.9521 25.9709 21.6977 24.5237 19.8013C23.0766 17.9049 21.1406 16.4382 18.9234 15.5582ZM14.047 14.625C13.0072 14.625 11.9907 14.3167 11.1261 13.739C10.2615 13.1613 9.58763 12.3401 9.1897 11.3795C8.79177 10.4188 8.68766 9.36166 8.89052 8.34181C9.09338 7.32195 9.59411 6.38515 10.3294 5.64987C11.0647 4.91459 12.0015 4.41386 13.0213 4.211C14.0412 4.00814 15.0983 4.11226 16.059 4.51019C17.0197 4.90811 17.8408 5.58198 18.4185 6.44658C18.9962 7.31117 19.3045 8.32766 19.3045 9.3675C19.3045 10.7619 18.7506 12.0991 17.7646 13.0851C16.7787 14.0711 15.4414 14.625 14.047 14.625Z"
                        />
                      </svg>
                      <h2 className="ml-2 text-black dark:text-white font-semibold">
                        {" "}
                        follow
                      </h2>
                    </div>
                  </div>
                  <div className="col-span-3">
                    <div className="flex justify-end items-center gap-x-2 md:gap-x-8">
                      <div className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-[#d9d9d9] dark:bg-[#676767] rounded-lg">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-black dark:fill-white"
                            d="M25.5396 13.7866C25.1928 13.7866 24.8602 13.9244 24.615 14.1696C24.3698 14.4148 24.232 14.7474 24.232 15.0942V22.9394C24.232 23.2862 24.0943 23.6188 23.8491 23.864C23.6039 24.1092 23.2713 24.2469 22.9245 24.2469H4.61891C4.27213 24.2469 3.93955 24.1092 3.69434 23.864C3.44913 23.6188 3.31137 23.2862 3.31137 22.9394V4.63382C3.31137 4.28704 3.44913 3.95446 3.69434 3.70925C3.93955 3.46404 4.27213 3.32628 4.61891 3.32628H12.4642C12.8109 3.32628 13.1435 3.18852 13.3887 2.94331C13.6339 2.6981 13.7717 2.36552 13.7717 2.01874C13.7717 1.67195 13.6339 1.33938 13.3887 1.09416C13.1435 0.848953 12.8109 0.711195 12.4642 0.711195H4.61891C3.57857 0.711195 2.58083 1.12447 1.8452 1.86011C1.10956 2.59574 0.696289 3.59347 0.696289 4.63382V22.9394C0.696289 23.9797 1.10956 24.9775 1.8452 25.7131C2.58083 26.4487 3.57857 26.862 4.61891 26.862H22.9245C23.9648 26.862 24.9626 26.4487 25.6982 25.7131C26.4338 24.9775 26.8471 23.9797 26.8471 22.9394V15.0942C26.8471 14.7474 26.7094 14.4148 26.4641 14.1696C26.2189 13.9244 25.8864 13.7866 25.5396 13.7866ZM5.92646 14.7803V20.3243C5.92646 20.6711 6.06421 21.0037 6.30943 21.2489C6.55464 21.4941 6.88722 21.6319 7.234 21.6319H12.778C12.9501 21.6329 13.1206 21.5999 13.2799 21.5348C13.4393 21.4697 13.5842 21.3739 13.7063 21.2527L22.7545 12.1914L26.4679 8.55644C26.5905 8.43489 26.6878 8.29028 26.7541 8.13094C26.8205 7.9716 26.8547 7.8007 26.8547 7.62809C26.8547 7.45548 26.8205 7.28457 26.7541 7.12524C26.6878 6.9659 26.5905 6.82129 26.4679 6.69973L20.924 1.09038C20.8024 0.967828 20.6578 0.870554 20.4985 0.804172C20.3391 0.73779 20.1682 0.703613 19.9956 0.703613C19.823 0.703613 19.6521 0.73779 19.4928 0.804172C19.3334 0.870554 19.1888 0.967828 19.0672 1.09038L15.38 4.79072L6.30564 13.852C6.18446 13.9742 6.08858 14.1191 6.02351 14.2784C5.95844 14.4377 5.92546 14.6083 5.92646 14.7803ZM19.9956 3.86237L23.6959 7.56271L21.8392 9.41942L18.1389 5.71908L19.9956 3.86237ZM8.54154 15.3164L16.2953 7.56271L19.9956 11.2631L12.2419 19.0168H8.54154V15.3164Z"
                          />
                        </svg>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-[#d9d9d9] dark:bg-[#676767] rounded-lg">
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 27 27"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-black dark:fill-white"
                            d="M21.7292 16.4358C20.9567 16.441 20.1949 16.6171 19.4986 16.9517C18.8023 17.2863 18.1888 17.771 17.7021 18.3709L11.0339 15.2983C11.3474 14.3383 11.3474 13.3034 11.0339 12.3434L17.7021 9.27077C18.4887 10.22 19.5854 10.8608 20.7985 11.0801C22.0116 11.2995 23.2632 11.0833 24.3324 10.4696C25.4016 9.85598 26.2196 8.88438 26.6422 7.72628C27.0647 6.56819 27.0646 5.29805 26.6419 4.14004C26.2191 2.98202 25.4008 2.01056 24.3315 1.39712C23.2622 0.783677 22.0106 0.567679 20.7975 0.787247C19.5845 1.00681 18.488 1.64783 17.7015 2.59717C16.9151 3.54651 16.4893 4.74315 16.4992 5.97588C16.5032 6.28737 16.5338 6.59795 16.5907 6.9042L9.68717 10.0814C8.95116 9.36174 8.01913 8.87527 7.00786 8.68296C5.99659 8.49064 4.95106 8.60103 4.00225 9.00029C3.05344 9.39956 2.24355 10.0699 1.67405 10.9274C1.10456 11.785 0.800781 12.7915 0.800781 13.8209C0.800781 14.8502 1.10456 15.8568 1.67405 16.7143C2.24355 17.5718 3.05344 18.2422 4.00225 18.6414C4.95106 19.0407 5.99659 19.1511 7.00786 18.9588C8.01913 18.7664 8.95116 18.28 9.68717 17.5603L16.5907 20.7375C16.5338 21.0438 16.5032 21.3543 16.4992 21.6658C16.4992 22.7002 16.806 23.7114 17.3806 24.5715C17.9553 25.4315 18.7721 26.1019 19.7278 26.4977C20.6834 26.8935 21.735 26.9971 22.7495 26.7953C23.764 26.5935 24.6959 26.0954 25.4274 25.364C26.1588 24.6326 26.6569 23.7007 26.8587 22.6861C27.0605 21.6716 26.9569 20.6201 26.5611 19.6644C26.1652 18.7087 25.4949 17.8919 24.6348 17.3173C23.7748 16.7426 22.7636 16.4358 21.7292 16.4358ZM21.7292 3.36089C22.2464 3.36089 22.752 3.51426 23.182 3.8016C23.6121 4.08894 23.9472 4.49734 24.1451 4.97517C24.3431 5.45299 24.3949 5.97878 24.294 6.48604C24.1931 6.9933 23.944 7.45925 23.5783 7.82496C23.2126 8.19067 22.7466 8.43973 22.2394 8.54063C21.7321 8.64153 21.2063 8.58974 20.7285 8.39182C20.2507 8.1939 19.8423 7.85873 19.5549 7.42869C19.2676 6.99866 19.1142 6.49308 19.1142 5.97588C19.1142 5.28234 19.3897 4.61721 19.8801 4.1268C20.3705 3.6364 21.0357 3.36089 21.7292 3.36089ZM6.03926 16.4358C5.52206 16.4358 5.01648 16.2825 4.58645 15.9951C4.15642 15.7078 3.82124 15.2994 3.62332 14.8216C3.4254 14.3437 3.37361 13.818 3.47451 13.3107C3.57541 12.8034 3.82447 12.3375 4.19018 11.9718C4.55589 11.6061 5.02184 11.357 5.5291 11.2561C6.03636 11.1552 6.56215 11.207 7.03997 11.4049C7.5178 11.6028 7.92621 11.938 8.21354 12.368C8.50088 12.7981 8.65425 13.3037 8.65425 13.8209C8.65425 14.5144 8.37874 15.1795 7.88834 15.6699C7.39793 16.1603 6.7328 16.4358 6.03926 16.4358ZM21.7292 24.2808C21.212 24.2808 20.7064 24.1275 20.2764 23.8401C19.8464 23.5528 19.5112 23.1444 19.3133 22.6665C19.1153 22.1887 19.0636 21.6629 19.1645 21.1557C19.2654 20.6484 19.5144 20.1825 19.8801 19.8168C20.2458 19.451 20.7118 19.202 21.219 19.1011C21.7263 19.0002 22.2521 19.052 22.7299 19.2499C23.2077 19.4478 23.6162 19.783 23.9035 20.213C24.1908 20.643 24.3442 21.1486 24.3442 21.6658C24.3442 22.3594 24.0687 23.0245 23.5783 23.5149C23.0879 24.0053 22.4227 24.2808 21.7292 24.2808Z"
                          />
                        </svg>
                      </div>
                      <div className="w-10 h-10 md:w-12 md:h-12 flex justify-center items-center bg-[#d9d9d9] dark:bg-[#676767] rounded-lg">
                        <svg
                          width="28"
                          height="7"
                          viewBox="0 0 28 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="fill-black dark:fill-white"
                            d="M14.046 0.335083C12.4474 0.335083 11.1395 1.643 11.1395 3.24157C11.1395 4.84014 12.4474 6.14806 14.046 6.14806C15.6446 6.14806 16.9525 4.84014 16.9525 3.24157C16.9525 1.643 15.6446 0.335083 14.046 0.335083ZM3.87329 0.335083C2.27472 0.335083 0.966797 1.643 0.966797 3.24157C0.966797 4.84014 2.27472 6.14806 3.87329 6.14806C5.47186 6.14806 6.77978 4.84014 6.77978 3.24157C6.77978 1.643 5.47186 0.335083 3.87329 0.335083ZM24.2187 0.335083C22.6201 0.335083 21.3122 1.643 21.3122 3.24157C21.3122 4.84014 22.6201 6.14806 24.2187 6.14806C25.8173 6.14806 27.1252 4.84014 27.1252 3.24157C27.1252 1.643 25.8173 0.335083 24.2187 0.335083Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden banner-shadow rounded-lg bg-white dark:bg-[#373737] col-span-6 p-4 ">
              <h1>About Me</h1>
              <p className="my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className="col-span-6 md:col-span-2">
              <div className="grid grid-cols-6 md:grid-cols-2 gap-x-4">
                <div className="col-span-3 md:col-span-1">
                  <CardFeature src={Image1} />
                </div>
                <div className="col-span-3 md:col-span-1">
                  <CardFeature src={Image2} />
                </div>
                <h1 className="col-span-6 md:col-span-2 py-5 text-center px-14 md:px-20 text-xl md:text-3xl">
                  Stake your Formica Regem and Earn
                </h1>
              </div>
            </div>
            {/* <div className="col-span-3 md:col-span-1">
            <Card src={Image1} />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Card src={Image2} />
          </div> */}
          </div>
        </div>
        <div className="hidden md:block">
          <div className="banner-shadow rounded-3xl bg-white dark:bg-[#373737] relative -top-64 w-7/12 p-4 ">
            <h1>About Me</h1>
            <p className="my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="relative -top-0 md:-top-36">
          <div className="flex flex-col gap-y-4 md:gap-y-14 filter-shadow px-0 py-0 md:py-10 rounded-lg md:px-16 mx-0 md:mx-24">
            <div className="flex flex-row gap-x-2 md:gap-x-6 justify-center items-center">
              <button className="bg-gray-500 rounded-md w-28 py-1 text-gray-200 hover:bg-black">
                On Sale
              </button>
              <button className="bg-gray-500 rounded-md w-28 py-1 text-gray-200 hover:bg-black">
                Items
              </button>
              <button className="bg-gray-500 rounded-md w-28 py-1 text-gray-200 hover:bg-black">
                Offer
              </button>
              <button className="bg-gray-500 rounded-md w-28 py-1 text-gray-200 hover:bg-black">
                Activities
              </button>
            </div>
            <div className="flex flex-wrap md:flex-row gap-y-2 justify-center md:justify-between items-center">
              <div className="flex gap-x-2 md:gap-x-6">
                <button className="bg-gray-500 rounded-md w-20 md:w-28 py-1 text-gray-200 hover:bg-black">
                  Buy Now
                </button>
                <button className="bg-gray-500 rounded-md w-20 md:w-28 py-1 text-gray-200 hover:bg-black">
                  Auctions
                </button>
                <button className="bg-gray-500 rounded-md w-20 md:w-28 py-1 text-gray-200 hover:bg-black">
                  Bids
                </button>
                <button className="bg-gray-500 rounded-md w-20 md:w-28 py-1 text-gray-200 hover:bg-black">
                  Ended
                </button>
              </div>
              <div className="flex gap-x-4">
                <div className="flex items-center">
                  <Listbox value={selected3} onChange={setSelected3}>
                    {({ open }) => (
                      <>
                        <div className="relative">
                          <Listbox.Button className="relative w-40 md:w-40 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              <span className=" block truncate">
                                {selected3.name}
                              </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-40 md:w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {chains.map((chains) => (
                                <Listbox.Option
                                  key={chains.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={chains}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "ml-3 block truncate"
                                          )}
                                        >
                                          {chains.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
                <div className="flex items-center">
                  <Listbox value={selected4} onChange={setSelected4}>
                    {({ open }) => (
                      <>
                        <div className="relative">
                          <Listbox.Button className="relative w-40 md:w-40 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black sm:text-sm sm:leading-6">
                            <span className="flex items-center">
                              <span className=" block truncate">
                                {selected4.name}
                              </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-40 md:w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {category.map((category) => (
                                <Listbox.Option
                                  key={category.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "bg-indigo-600 text-white"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={category}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "ml-3 block truncate"
                                          )}
                                        >
                                          {category.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex-col items-center">
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lgDesktop:grid-cols-6 xlDesktop:grid-cols-7 gap-y-10 justify-items-center">
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
              <Card src={Image1} />
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
              <h2>Load More</h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}