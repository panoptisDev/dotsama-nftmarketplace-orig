"use client";
import { Fragment, useState } from "react";
import Entry from "./Entry";
import Image from "next/image";
import Link from "next/link";
import blueAD from "../../public/assets/images/hotcollections/bluearrdown.svg";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const sort = [
  {
    id: 1,
    name: "7 Days",
  },
  {
    id: 2,
    name: "30 Days",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
export default function HotCollections() {
  const [selected2, setSelected2] = useState(sort[0]);
  return (
    <div className="text-black dark:text-white text-left">
      <div className="flex justify-between items-start md:items-center my-10">
        <div className="flex flex-col md:flex-row items-center">
          <h1 className="font-bold">Hot Collections</h1>

          <div>
            <Listbox value={selected2} onChange={setSelected2}>
              {({ open }) => (
                <>
                  {/* <h2 className="flex ml-6 text-xl text-[#40ABF2] font-bold items-center">
                    7 Days <Image className="ml-2" src={blueAD} alt="arrdown" />
                  </h2> */}
                  <div className="relative mt-1 ml-6">
                    <Listbox.Button className="relative w-28 md:w-28 rounded-md py-1 text-left text-gray-900 shadow-sm sm:text-sm sm:leading-6 cursor-pointer">
                      <span className="flex items-center">
                        <span className=" block truncate">
                          <h2 className="flex text-xl text-[#40ABF2] font-bold items-center">
                            {selected2.name}
                          </h2>
                        </span>
                      </span>
                      <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <Image className="ml-2" src={blueAD} alt="arrdown" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-32 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {sort.map((sort) => (
                          <Listbox.Option
                            key={sort.id}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "bg-[#40ABF2] text-white"
                                  : "text-gray-900",
                                "relative cursor-pointer select-none py-2 pl-3 pr-9 "
                              )
                            }
                            value={sort}
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
                                    {sort.name}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
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
        <Link href={"/ranking"}>
          <button className="border border-black dark:border-white text-black dark:text-white rounded-md px-4 py-1 mt-1 md:mt-0 hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white bg-white dark:bg-black">
            View All
          </button>
        </Link>
      </div>
      <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 divide-x-4 divide-solid dark:divide-[#1B1B1B]">
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <Entry
              index={"01"}
              Name={"Billiard Crypto NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"02"}
              Name={"Monsta Party"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"03"}
              Name={"Lunar Genesis Crystal"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"04"}
              Name={"Mathverse Land"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"05"}
              Name={"YuliMystery BOX"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>

        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <Entry
              index={"06"}
              Name={"Warfi-Warbot"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"07"}
              Name={"IGUVerse NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"08"}
              Name={"Metacity-Building"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"09"}
              Name={"City Of Atlantis"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"10"}
              Name={"Lord of Ring"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>
      </div>
      <div className="flex justify-center xl:hidden">
        <table className="table-auto mr-2">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <Entry
              index={"01"}
              Name={"Billiard Crypto NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"02"}
              Name={"Monsta Party"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"03"}
              Name={"Lunar Genesis Crystal"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"04"}
              Name={"Mathverse Land"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"05"}
              Name={"YuliMystery BOX"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"06"}
              Name={"Warfi-Warbot"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"07"}
              Name={"IGUVerse NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"08"}
              Name={"Metacity-Building"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"09"}
              Name={"City Of Atlantis"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"10"}
              Name={"Lord of Ring"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
