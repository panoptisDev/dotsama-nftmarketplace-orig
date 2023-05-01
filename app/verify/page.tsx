"use client";
import Link from "next/link";
import Image from "next/image";
import banner from "../../public/assets/images/apply/banner.jpeg";
import Dropzone from "@/components/DropZone/DropZone";

export default function Apply() {
  return (
    <div className="text-black dark:text-white mb-24">
      <div className="flex justify-center pt-16 md:pt-0 pb-24">
        <Image src={banner} alt="banner" />
      </div>
      <p className="text-center text-2xl font-semibold py-6">About Project</p>
      <div className="divider">
        <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
          FILL IN FIELD NOW
        </span>
      </div>

      <form className="">
        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Project’s name <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              NFT smart contract (721 Standard)
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control ">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Which blockchain are NFTs on?{" "}
              <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className="input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              What is current status of project
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="divider"></div>

        <p className="text-xl text-center px-3">
          Links and description to display on your Collection page
        </p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            FILL IN FIELD NOW
          </span>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Description of collection page{" "}
              <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <textarea className="textarea textarea-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"></textarea>
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Website <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Twitter link <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Twitter followers (e.g. 14K)
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Telegram group link
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-3">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Discord server link
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-6">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">Medium link</p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="divider"></div>
        <p className="text-xl text-center py-6 px-3">
          Project icon (512x512, square version, no gif files){" "}
          <span className="text-red-400">*</span>
        </p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            DROP FILES IN THE BOX BELOW
          </span>
        </div>

        <Dropzone className="p-0 md:p-16 mt-10 flex justify-center" />

        <div className="divider"></div>
        <p className="text-xl text-center py-6 px-3">
          Project banner (A rough size at 1200x400, safe area is 800x400, no gif
          files ) <span className="text-red-400">*</span>
        </p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            DROP FILES IN THE BOX BELOW
          </span>
        </div>

        <Dropzone className="p-0 md:p-16 mt-10 flex justify-center" />

        <div className="divider"></div>
        <div className="flex justify-center py-6">
          <p className="text-xl text-left w-[80vw] xl:w-[50vw]">
            Advanced options. Please be noticed that we may or may not pass your
            requests in this part. Only projects that meet specified conditions
            could enjoy the benefits below. Please refer also our{" "}
            <span className="text-blue-500">docs</span>
          </p>
        </div>
        <div className="divider"></div>
        <div className="form-control justify-center py-4">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              Do you want a Royalty fee distribution?{" "}
              <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="divider"></div>
        <p className="text-xl text-center py-6">Contact</p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            FILL IN FIELD NOW
          </span>
        </div>

        <div className="form-control justify-center py-4">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white px-3">
              What role do you play in the community? (Founder, Moderator,
              Collaboration Manager, etc){" "}
              <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="form-control justify-center py-4">
          <label className="label flex justify-center">
            <p className="text-base text-black dark:text-white ">
              How can we contact you? <span className="text-red-400">*</span>
            </p>
          </label>
          <div className="m-auto">
            <input
              type="text"
              placeholder=""
              className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
            />
          </div>
        </div>

        <div className="divider"></div>
        <p className="text-base text-black dark:text-white text-center py-6 px-3">
          What kind of collaboration are you looking for? (Giveaway,
          PartnershipTweet, Launchpad, Text AMA, etc.)
        </p>

        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            WRITE IN THE BOX BELOW
          </span>
        </div>

        <div className="form-control justify-center py-6">
          <div className="m-auto">
            <textarea className="textarea textarea-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"></textarea>
          </div>
        </div>

        <div className="divider"></div>
        <div className="flex justify-center py-4">
          <div
            className="text-center font-medium w-[80vw] xl:w-[50vw]"
            style={{ fontFamily: "VietnamRegular" }}
          >
            For other business inquiries: contact@dotsamanft.com
          </div>
        </div>
        <div className="divider"></div>
        <div className="flex justify-center mt-12">
          <button className="bg-[#2886DC] w-[20vw] text-white py-3 text-xl rounded-xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
