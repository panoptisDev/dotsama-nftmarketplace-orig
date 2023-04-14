"use client";
import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import { ListGroup, ListGroupItem, Row, Col, Button } from "reactstrap";
import Dropzone from "@/components/DropZone/DropZone";

export default function LaunchPad() {
  return (
    <div className="text-black dark:text-white ">
      <div className="px-5 md:px-[15vw] py-8">
        <p className="py-4">
          Dostama Launchpad aims to help partnered GameFi projects to sell NFTs.{" "}
        </p>
        <div className="py-4">
          <p>If you are from any projects that meet the conditions below:</p>
          <li> Finished or going to start a token sale / IDO</li>
          <li>Going to release a new NFT collection</li>
          <li>1000+ community(twitter or telegram or discord)</li>
        </div>
        <p className="py-4">
          Please fill in the form below and let&apos;s figure out a way to work
          together. Your Launchpad page is shown on the top page of dostama 72
          hours ago from mint starting. CTA is set as your minting page URL.
          It&apos;s no cost, but you must list dostama as/among your official
          marketplaces on your website, Twitter, and other official channels.
        </p>
        <p className="py-4">
          Once submitted, changes will never be accepted. If you want to change
          anything, we charge $500/times. Pls ask it with tx of USDT for
          0x079a889eB69013d451EcF45377258948116e2b3e.
        </p>
      </div>
      <div className="divider"></div>
      <p className="text-center text-2xl font-semibold py-6">About Project</p>
      <div className="divider">
        <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
          FILL IN FIELD NOW
        </span>
      </div>

      <form className="mb-24">
        <div className="py-6">
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
                Description about your project{" "}
                <span className="text-red-400">*</span>
              </p>
            </label>
            <div className="m-auto">
              <textarea className="textarea textarea-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"></textarea>
            </div>
            <div className="m-auto w-[80vw] xl:w-[50vw]">
              <label className="label">
                <span className="label-text-alt">
                  The more the better. Will be displayed on the launch page.
                  Markdown format supported, you can put image or video too.
                </span>
              </label>
            </div>
          </div>

          <div className="form-control justify-center py-3">
            <label className="label flex justify-center">
              <p className="text-base text-black dark:text-white ">
                Project&apos;s Website
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
                What is the status of project?{" "}
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

          <div className="form-control justify-center py-3">
            <label className="label flex justify-center">
              <p className="text-base text-black dark:text-white ">
                Describe the status of the project
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
        </div>
        <div className="divider"></div>
        <p className="text-xl text-center py-6">
          Please upload an example of the NFT artwork (if you have one)
        </p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            DROP FILES IN THE BOX BELOW
          </span>
        </div>

        <Dropzone className="p-16 mt-10 flex justify-center" />
        <div className="divider"></div>
        <p className="text-xl text-center py-6">About the launch</p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            FILL IN FIELD NOW
          </span>
        </div>
        <div className="py-6">
          <div className="form-control justify-center py-3">
            <label className="label flex justify-center">
              <p className="text-base text-black dark:text-white ">
                How many items will be minted?
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

          <div className="form-control justify-center py-3">
            <label className="label flex justify-center">
              <p className="text-base text-black dark:text-white ">
                What blockchain to mint them on?
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
                How much will the mint price be?
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
              <p className="text-center text-base text-black dark:text-white ">
                Have you prepared minting page on your website?
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
                Have you submited Partnership as well?
              </p>
            </label>
            <div className="m-auto">
              <input
                type="text"
                placeholder=""
                className=" input input-bordered bg-white dark:bg-black banner-shadow w-[80vw] xl:w-[50vw]"
              />
            </div>
            <div className="m-auto w-[80vw] xl:w-[50vw]">
              <label className="label">
                <span className="label-text-alt">
                  It is a condition of use of LaunchPad to make an announcement
                  with tofuNFT as your official secondary secondary market.
                </span>
              </label>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <p className="text-xl text-center py-6">
          Choose your preferred launch day and end day (UTC time) *
        </p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            SELECT DATE
          </span>
        </div>
        <div className="flex justify-center">
          <div
            className="w-4/5 md:w-1/3 rounded-xl p-2"
            style={{ fontFamily: "VietnamRegular" }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["StaticDateTimePicker"]}>
                <DemoItem label="Start Date">
                  <StaticDateTimePicker
                    className="bg-slate-100 dark:bg-gray-500 rounded-xl"
                    onChange={(event) => console.log(event)}
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <div
            className="w-4/5 md:w-1/3 rounded-xl p-2"
            style={{ fontFamily: "VietnamRegular" }}
          >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["StaticDateTimePicker"]}>
                <DemoItem label="End Date">
                  <StaticDateTimePicker
                    className="bg-slate-100 dark:bg-gray-500 rounded-xl"
                    onChange={(event) => console.log(event)}
                    defaultValue={dayjs("2022-04-17T15:30")}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="divider"></div>
        <p className="text-xl text-center py-6">Banner image</p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            DROP FILES IN THE BOX BELOW
          </span>
        </div>

        <Dropzone className="p-16 mt-10 flex justify-center" />

        <div className="divider"></div>
        <p className="text-xl text-center py-6">Icon image</p>
        <div className="divider">
          <span className=" rounded-3xl px-4 border-2 border-gray-500 text-[#367CFE]">
            DROP FILES IN THE BOX BELOW
          </span>
        </div>

        <Dropzone className="p-16 mt-10 flex justify-center" />

        <div className="divider"></div>

        <div className="form-control justify-center py-3">
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
          <div className="m-auto w-[80vw] xl:w-[50vw]">
            <label className="label">
              <span className="label-text-alt">
                Because we receive so many inquiries, we will only contact you
                if your application is approved. If your application is not
                approved, we will not contact you. We usually contact you within
                2-3 business days.
              </span>
            </label>
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
