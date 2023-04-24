import React from "react";
import Card from "./Card";

export default function Ranking() {
  return (
    <div>
      <div className="flex flex-col items-center gap-y-10 mx-5 md:mx-10 text-black dark:text-white">
        <h1>NFT Rankings</h1>
        <p>
          With trading volume , floor price and etc., you can find the most
          trending NFTs here.
        </p>
        <div className="flex gap-x-8">
          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="">
              <button className="py-2 border-2 text-black dark:text-white border-black dark:border-white rounded-xl w-32">
                <h2 className="text-center">
                  7 Days{" "}
                  <svg
                    className="ml-2 inline-flex"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                    />
                  </svg>
                </h2>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-black dark:bg-white rounded-box w-52"
            >
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  30 Days
                </button>
              </li>
            </ul>
          </div>

          <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="">
              <button className="py-2 border-2 text-black dark:text-white border-black dark:border-white rounded-xl w-36">
                <h2>
                  Avalaunche{" "}
                  <svg
                    className="ml-2 inline-flex"
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M5 6L0 1.13513L1.16667 0L5 3.72973L8.83333 0L10 1.13513L5 6Z"
                    />
                  </svg>
                </h2>
              </button>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-black dark:bg-white rounded-box w-52"
            >
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  Moonbeam
                </button>
              </li>
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  Moonriver
                </button>
              </li>
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  Astar
                </button>
              </li>
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  Shiden
                </button>
              </li>
              <li className="rounded-none">
                <button className="text-white dark:text-black hover:bg-gray-400 ">
                  EXO (SAMA)
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* TABLE HERE */}
      <div>
        <div className="mt-10 flex justify-center">
          <div className="overflow-x-auto ">
            <table className="table-auto">
              <thead className="mb-10">
                <tr>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6"></h2>
                  </th>
                  <th>
                    <h2 className="text-center text-black dark:text-white">
                      #
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-left pl-4 md:pl-6 text-black dark:text-white">
                      Collection
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-right pr-4 md:pr-6 text-black dark:text-white">
                      Volume
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-center text-black dark:text-white">
                      24h%
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-center text-black dark:text-white">
                      7d%
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-right pr-4 md:pr-6 text-black dark:text-white">
                      Floor Price
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-right pr-4 md:pr-6 text-black dark:text-white">
                      Players
                    </h2>
                  </th>
                  <th>
                    <h2 className="text-right pr-4 md:pr-6 text-black dark:text-white">
                      Items
                    </h2>
                  </th>
                </tr>
              </thead>
              <tbody>
                <Card index={1} increase={true} />
                <Card index={2} increase={true} />
                <Card index={3} increase={false} />
                <Card index={4} increase={false} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
