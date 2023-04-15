import Card from "./Card";
import Image1 from "../../public/assets/images/discover/cardimg.png";
export default function Discover() {
  return (
    <div className="">
      <div className="text-black dark:text-white pb-14 ">
        <div className="hidden xl:block">
          <div className="flex mt-4 justify-between">
            <div className="flex gap-x-5">
              <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
                <h2>Items</h2>
              </button>
              <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
                <h2>Activities</h2>
              </button>
            </div>

            <div className="flex gap-x-6 bg-white dark:bg-black">
              <div className="dropdown dropdown-bottom">
                <button
                  tabIndex={0}
                  className="flex items-center justify-around py-2 border-2 text-black dark:text-white border-black dark:border-white rounded-xl w-36"
                >
                  <h2>BNB Chain</h2>
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown dropdown-bottom">
                <button
                  tabIndex={0}
                  className="flex items-center justify-around py-2 border-2 text-black dark:text-white border-black dark:border-white rounded-xl w-36"
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>

              <div className="dropdown dropdown-bottom">
                <button
                  tabIndex={0}
                  className="flex items-center justify-around py-2 border-2 text-black dark:text-white border-black dark:border-white rounded-xl w-36"
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </div>
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
            </div>
          </div>
        </div>

        <div className="block xl:hidden">
          {/* MOBILE NAVBAR */}
          <div className="block desktop:hidden">
            <div className="flex text-black dark:text-white">
              <div className="flex-1 mt-5">
                <div className="flex gap-x-5">
                  <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
                    <h2>Items</h2>
                  </button>
                  <button className="py-2 border-2 text-black dark:text-white hover:text-white dark:hover:text-black border-black dark:border-white hover:bg-black dark:hover:bg-white rounded-xl w-28">
                    <h2>Activities</h2>
                  </button>
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
  );
}
