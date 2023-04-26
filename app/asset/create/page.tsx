import React from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/create/banner.png";
import Dropzone from "./Dropzone";

export default function Create() {
  return (
    <div className="">
      <div>
        <Image className="w-[100vw]" src={banner} alt="banner" />
      </div>
      <div className="mx-4 md:mx-24">
        <div className="mt-10">
          <Dropzone className="py-10" />
        </div>
        <div className="mb-20">
          <div className="form-control justify-center py-6">
            <label className="label">
              <p className="text-base text-black dark:text-white font-semibold">
                Title
              </p>
            </label>

            <input
              type="text"
              placeholder="e.g. 'Crypto Funk'"
              className=" input input-bordered bg-white dark:bg-[#323232] banner-shadow w-[100%] xl:w-[50vw]"
            />
          </div>

          <div className="form-control justify-center py-6">
            <label className="label">
              <p className="text-base text-black dark:text-white font-semibold">
                Description
              </p>
            </label>

            <input
              type="text"
              placeholder="e.g. ‘This is very limited item’"
              className=" input input-bordered bg-white dark:bg-[#323232] banner-shadow w-[100%] xl:w-[50vw]"
            />
          </div>

          <div className="form-control justify-center py-6">
            <label className="label">
              <p className="text-base text-black dark:text-white font-semibold">
                Price
              </p>
            </label>

            <input
              type="text"
              placeholder="Enter price in ETH"
              className=" input input-bordered bg-white dark:bg-[#323232] banner-shadow w-[100%] xl:w-[50vw]"
            />
          </div>

          <div className="form-control justify-center py-6">
            <label className="label">
              <p className="text-base text-black dark:text-white font-semibold">
                Royalties
              </p>
            </label>

            <input
              type="text"
              placeholder="Suggested: 0, 10%, 20%, 30%. Maximum is 70%"
              className=" input input-bordered bg-white dark:bg-[#323232] banner-shadow w-[100%] xl:w-[50vw]"
            />
          </div>
          <button className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md mt-10">
            Create Item
          </button>
        </div>
      </div>
    </div>
  );
}
