import React from "react";
import Image from "next/image";
import avatar from "../../public/assets/images/item/avatar.png";
import Verified from "../../public/assets/images/verified.svg";
import green from "../../public/assets/images/ranking/green.png";
import red from "../../public/assets/images/ranking/red.png";

export default function Card(props: any) {
  return (
    <tr>
      <td>
        <div className="w-12 flex justify-center">
          <div className="tooltip" data-tip="New!">
            <Image className="w-3 h-3" src={green} alt="up" />
          </div>
        </div>
      </td>
      <td>
        <div className="w-8 flex justify-center">
          <h3 className="indicator text-black dark:text-white">
            0{props.index}
          </h3>
        </div>
      </td>
      <td>
        <div className="flex flex-row justify-start gap-x-8 w-72 md:w-[35vw] lg:w-[24vw] p-4 md:p-6">
          <Image className="w-[65px] rounded-2xl" src={avatar} alt="avatar" />
          <div className="flex flex-col">
            <h2 className="text-base text-black dark:text-white">
              Treasureland
            </h2>
            <h3 className="text-base flex text-black dark:text-white">
              Billiard Crypto NFT{" "}
              <Image className="ml-2" src={Verified} alt="verified" />
            </h3>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-2 w-40 md:w-[20vw] lg:w-[12vw] p-4 md:p-6">
          <h3 className="text-base text-right text-black dark:text-white">
            $5,974.8
          </h3>{" "}
          <h2 className="text-xs text-right text-black dark:text-white">
            312 AVAX
          </h2>
        </div>
      </td>
      <td>
        <div className="w-40 md:w-[20vw] lg:w-[10vw] p-4 md:p-6">
          <h2 className="text-base text-center">
            <span
              className={props.increase ? "text-green-600" : "text-red-600"}
            >
              7.18%
            </span>
          </h2>
        </div>
      </td>
      <td>
        <div className="w-40 md:w-[20vw] lg:w-[10vw] p-4 md:p-6">
          <h2 className="text-base text-center">
            <span
              className={props.increase ? "text-green-600" : "text-red-600"}
            >
              23.03%
            </span>
          </h2>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-2 w-40 md:w-[20vw] lg:w-[12vw] p-4 md:p-6">
          <h3 className="text-base text-right text-black dark:text-white">
            $727.7
          </h3>{" "}
          <h2 className="text-xs text-right text-black dark:text-white">
            38 AVAX
          </h2>
        </div>
      </td>
      <td>
        <div className="w-40 md:w-[20vw] lg:w-[10vw] p-4 md:p-6">
          <h2 className="text-base text-right text-black dark:text-white">
            10
          </h2>
        </div>
      </td>
      <td>
        <div className="w-40 md:w-[20vw] lg:w-[10vw] p-4 md:p-6">
          <h2 className="text-base text-right text-black dark:text-white">
            1000
          </h2>
        </div>
      </td>
    </tr>
  );
}
