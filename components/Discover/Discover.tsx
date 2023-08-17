"use client";
import { Fragment, useState } from "react";
import Card from "./Card";
import Image1 from "../../public/assets/images/discover/cardimg.png";
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import bnbChain from "../../public/assets/images/bnbchain.png";
import Image from "next/image";
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

const sort = [
  {
    id: 1,
    name: "Newest",
  },
  {
    id: 2,
    name: "Price: Low to High",
  },
  {
    id: 3,
    name: "Price: High to Low",
  },
];

const type = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Fixed Price",
  },
  {
    id: 3,
    name: "Auction",
  },
  {
    id: 4,
    name: "With Buy Offer",
  },
];
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Discover() {
  const [selected, setSelected] = useState(type[0]);
  const [selected2, setSelected2] = useState(sort[0]);
  const [selected3, setSelected3] = useState(chains[0]);
  const [selected4, setSelected4] = useState(category[0]);
  return (
    <div className="">
      <div className="text-black dark:text-white pb-14 ">
        <div className="hidden xl:block">
          <div className="flex mt-4 justify-between">
            <div className="flex gap-x-5">
              <button className="py-2 border text-white dark:text-black hover:text-white dark:hover:text-black border-black dark:border-white bg-black dark:bg-white rounded-md w-28">
                <h2>Items</h2>
              </button>
              <button className="py-2 border text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-md w-28">
                <Link href="/activities">
                  <h2>Activities</h2>
                </Link>
              </button>
            </div>

            <div className="flex gap-x-6">
              <div>
                {/* <Listbox value={selected3} onChange={setSelected3}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black sm:text-sm sm:leading-6">
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
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                </Listbox> */}
                <div className="flex items-center">
                  <Select defaultValue={"bnb"}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bnb">
                        <div className="flex items-center">
                          <Image src={bnbChain} alt="bnb-logo" />
                          <h3 className="ml-1">BNB Chain</h3>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <div className="dropdown dropdown-bottom">
                <button
                  tabIndex={0}
                  className="flex items-center justify-around py-2 border text-black dark:text-white border-black dark:border-white rounded-md w-36"
                >
                  <h2>Category</h2>
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M5.71288 7.88172L0.837883 3.22338C0.244133 2.65602 0.111633 2.00684 0.440383 1.27584C0.767883 0.543648 1.35351 0.177551 2.19726 0.177551H11.8535C12.6973 0.177551 13.2829 0.543648 13.6104 1.27584C13.9391 2.00684 13.8066 2.65602 13.2129 3.22338L8.33788 7.88172C8.15038 8.06089 7.94726 8.19526 7.72851 8.28484C7.50976 8.37443 7.27538 8.41922 7.02538 8.41922C6.77538 8.41922 6.54101 8.37443 6.32226 8.28484C6.10351 8.19526 5.90038 8.06089 5.71288 7.88172Z"
                    />
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-black dark:bg-white rounded-box w-[9rem]"
                >
                  <li>
                    <button className="text-white dark:text-black hover:bg-gray-400 ">
                      Item 1
                    </button>
                  </li>
                  <li>
                    <button className="text-white dark:text-black hover:bg-gray-400 ">
                      Item 2
                    </button>
                  </li>
                </ul>
              </div> */}
              <div>
                {/* <Listbox value={selected4} onChange={setSelected4}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black sm:text-sm sm:leading-6">
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
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                </Listbox> */}
                <div className="flex items-center">
                  <Select defaultValue={"bnb"}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bnb">
                        <h3 className="ml-1">Category</h3>
                      </SelectItem>
                      <SelectItem value="eth">
                        <h3 className="ml-1">Category2</h3>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {/* <div className="dropdown dropdown-bottom">
                <button
                  tabIndex={0}
                  className="flex items-center justify-around py-2 border text-black dark:text-white border-black dark:border-white rounded-md w-36"
                >
                  <h2>Newest</h2>
                  <svg
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M5.71288 7.88172L0.837883 3.22338C0.244133 2.65602 0.111633 2.00684 0.440383 1.27584C0.767883 0.543648 1.35351 0.177551 2.19726 0.177551H11.8535C12.6973 0.177551 13.2829 0.543648 13.6104 1.27584C13.9391 2.00684 13.8066 2.65602 13.2129 3.22338L8.33788 7.88172C8.15038 8.06089 7.94726 8.19526 7.72851 8.28484C7.50976 8.37443 7.27538 8.41922 7.02538 8.41922C6.77538 8.41922 6.54101 8.37443 6.32226 8.28484C6.10351 8.19526 5.90038 8.06089 5.71288 7.88172Z"
                    />
                  </svg>
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-black dark:bg-white rounded-box w-[9rem]"
                >
                  <li>
                    <button className="text-white dark:text-black hover:bg-gray-400 ">
                      Item 1
                    </button>
                  </li>
                  <li>
                    <button className="text-white dark:text-black hover:bg-gray-400 ">
                      Item 2
                    </button>
                  </li>
                </ul>
              </div> */}
              {/* <div>
                <Listbox value={selected3} onChange={setSelected3}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-black sm:text-sm sm:leading-6">
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
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
              </div> */}
              <div>
                <label htmlFor="my-modal-5">
                  <svg
                    className="cursor-pointer"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-black dark:stroke-white"
                      d="M17.5009 32.5004L17.4997 32.4992C17.2784 32.2787 17.1667 32.0127 17.1667 31.6667V21.6667V21.4941L17.0602 21.3582L7.39705 9.02934C7.23481 8.81183 7.15787 8.61185 7.13806 8.42615C7.11822 8.24012 7.15202 8.0342 7.26446 7.79905L7.26478 7.79838C7.37445 7.56816 7.5121 7.4192 7.66993 7.32402C7.82977 7.22762 8.04321 7.16669 8.33338 7.16669H31.6667C31.9569 7.16669 32.1706 7.22761 32.3308 7.32414C32.4889 7.41939 32.6269 7.56837 32.737 7.79838C32.849 8.03348 32.8825 8.23946 32.8625 8.42569C32.8425 8.61159 32.7654 8.81173 32.6031 9.02932L22.9399 21.3582L22.8334 21.4941V21.6667V31.6667C22.8334 32.0133 22.7218 32.2795 22.5015 32.4998C22.2797 32.7216 22.0128 32.8334 21.6667 32.8334H18.3334C17.9874 32.8334 17.7213 32.7216 17.5009 32.5004Z"
                    />
                  </svg>
                </label>

                <input
                  type="checkbox"
                  id="my-modal-5"
                  className="modal-toggle"
                />
                <div className="modal">
                  <div className="modal-box w-11/12 max-w-xs bg-white dark:bg-black banner-shadow">
                    <h3 className="font-bold text-lg mb-2 text-center">
                      Filter
                    </h3>
                    <div className="flex justify-center">
                      <div>
                        <Listbox value={selected} onChange={setSelected}>
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Type
                              </Listbox.Label>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm border border-gray-500  sm:text-sm sm:leading-6">
                                  <span className="flex items-center">
                                    <span className=" block truncate">
                                      {selected.name}
                                    </span>
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon
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
                                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {type.map((type) => (
                                      <Listbox.Option
                                        key={type.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "bg-indigo-600 text-white"
                                              : "text-gray-900",
                                            "relative cursor-default select-none py-2 pl-3 pr-9"
                                          )
                                        }
                                        value={type}
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
                                                {type.name}
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
                    <div className="flex justify-center my-2">
                      <div>
                        <Listbox value={selected2} onChange={setSelected2}>
                          {({ open }) => (
                            <>
                              <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900 dark:text-white">
                                Sort
                              </Listbox.Label>
                              <div className="relative mt-1">
                                <Listbox.Button className="relative w-52 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm border border-gray-500  sm:text-sm sm:leading-6">
                                  <span className="flex items-center">
                                    <span className=" block truncate">
                                      {selected2.name}
                                    </span>
                                  </span>
                                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                                    <ChevronUpDownIcon
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
                                  <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-52 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {sort.map((sort) => (
                                      <Listbox.Option
                                        key={sort.id}
                                        className={({ active }) =>
                                          classNames(
                                            active
                                              ? "bg-indigo-600 text-white"
                                              : "text-gray-900",
                                            "relative cursor-default select-none py-2 pl-3 pr-9"
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
                    <div className="flex justify-center">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text text-black dark:text-white">
                            Price
                          </span>
                        </label>
                        <label className="input-group gap-x-4">
                          <input
                            type="number"
                            placeholder="MIN"
                            className="input input-bordered w-20 text-gray-900 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                          <span className="p-0 m-0 bg-transparent">To</span>
                          <input
                            type="number"
                            placeholder="MAX"
                            className="input input-bordered w-20 text-gray-900 bg-gray-200 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="modal-action justify-center items-center gap-x-5">
                      <label
                        htmlFor="my-modal-5"
                        className="bg-gray-200 border border-gray-400 rounded-lg text-black dark:text-gray-900 hover:bg-gray-200 px-3 py-1 cursor-pointer"
                      >
                        Apply
                      </label>
                      <label
                        htmlFor="my-modal-5"
                        className="border-0 text-black dark:text-gray-300 p-0"
                      >
                        Close
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block xl:hidden">
          {/* MOBILE NAVBAR */}
          <div className="block desktop:hidden">
            <div className="flex text-black dark:text-white">
              <div className="flex-1 mt-5">
                <div className="flex gap-x-5">
                  <button className="py-2 border-2 text-white dark:text-black hover:text-white dark:hover:text-black border-black dark:border-white bg-black dark:bg-white rounded-xl w-28">
                    <h2>Items</h2>
                  </button>
                  <Link href="/activities">
                    <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
                      <h2>Activities</h2>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="flex-none">
                <div className="dropdown dropdown-end mt-5">
                  <label className="btn btn-ghost btn-circle avatar ">
                    <button
                      tabIndex={0}
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
                      "menu menu-compact dropdown-content p-2 shadow blurNav w-52"
                    }
                  >
                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title ">BNB Chain</div>
                      <div className="collapse-content ">
                        <p>hello</p>
                      </div>
                    </div>

                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title ">Category</div>
                      <div className="collapse-content ">
                        <p>hello</p>
                      </div>
                    </div>

                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title ">Newest</div>
                      <div className="collapse-content ">
                        <p>hello</p>
                      </div>
                    </div>

                    <div className="collapse">
                      <input type="checkbox" className="peer" />
                      <div className="collapse-title ">Filter</div>
                      <div className="collapse-content ">
                        <p>hello</p>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-col items-center">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 lgDesktop:grid-cols-6 xlDesktop:grid-cols-7 gap-y-10 justify-items-center gap-x-4">
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
          <div className="btn-group">
            <button className="btn">«</button>
            <button className="btn">Page 22</button>
            <button className="btn">»</button>
          </div>
        </div>
      </div>
    </div>
  );
}
