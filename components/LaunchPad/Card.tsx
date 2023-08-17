"use client";
import Image from "next/image";
import Verified from "../../public/assets/images/verified.svg";
import Link from "next/link";

export default function Card(props: any) {
  return (
    <div className="carousel-item shadow-xl rounded-lg">
      <div className="card bg-white dark:bg-neutral-900 text-black dark:text-white rounded-lg">
        <figure>
          <Link href={"/launchpad/collectionName"}>
            <Image
              className="w-[280px] h-[200px] rounded-md hover:scale-125 ease-in duration-200"
              src={props.src}
              alt="item"
            />
          </Link>
          <div className="absolute top-3 left-3 bg-white dark:bg-black px-3 py-1 rounded-lg text-center">
            <h3>
              <span className="text-2xl text-black dark:text-white">24</span>
              <br /> <span className="text-gray-400">APR</span>
            </h3>
          </div>
        </figure>
        <div className="p-5">
          <h2
            className="card-title text-base font-bold"
            style={{ fontFamily: "VietnamRegular" }}
          >
            <Link href={"/launchpad/collectionName"}>Chain Arena</Link>
            <div className="flex items-center">
              <div className="tooltip" data-tip="Verified">
                <Image className="" src={Verified} alt="item" />
              </div>
            </div>
          </h2>
          <div className="flex justify-between mt-2">
            <div>
              <p
                className="text-sm font-normal"
                style={{ fontFamily: "VietnamMedium" }}
              >
                Floor
              </p>{" "}
              <p
                className="text-xs text-gray-400 mt-1"
                style={{ fontFamily: "VietnamMedium", fontSize: "0.75rem" }}
              >
                0.21 ETH
              </p>
            </div>
            <div className="flex flex-col justify-end text-left ">
              <p
                className="text-sm font-normal"
                style={{ fontFamily: "VietnamMedium" }}
              >
                Total Volume
              </p>{" "}
              <p
                className="text-xs text-gray-400 mt-1"
                style={{ fontFamily: "VietnamMedium", fontSize: "0.75rem" }}
              >
                1.21 ETH
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
