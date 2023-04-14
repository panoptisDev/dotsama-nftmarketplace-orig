import Image from "next/image";
import Verified from "../../public/assets/images/verified.svg";
import bnbChain from "../../public/assets/images/discover/bnbChain.png";
export default function Card(props: any) {
  return (
    <div className="card bg-white dark:bg-stone-700 text-black dark:text-white rounded-lg banner-shadow w-max ">
      <figure>
        <Image
          className="w-[280px] h-[200px] rounded-md "
          src={props.src}
          alt="item"
        />
      </figure>
      <div className="p-5">
        <h2
          className="card-title text-base font-bold"
          style={{ fontFamily: "VietnamRegular" }}
        >
          Chain Arena
          <div className="">
            <Image className="" src={Verified} alt="item" />
          </div>
        </h2>
        <div className="flex justify-between mt-2">
          <div>
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "VietnamMedium" }}
            >
              BitKeep Kn...
            </p>{" "}
            <Image
              className=""
              height={20}
              width={20}
              src={bnbChain}
              alt="item"
            />
          </div>
          <div className="flex flex-col justify-end text-left">
            <p
              className="text-xs mt-1 text-[#10C623] flex"
              style={{ fontFamily: "VietnamMedium", fontSize: "0.75rem" }}
            >
              0.000006 BNB
              <svg
                className="ml-2"
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.60487 11.4859H0.824463L6.11703 0.842209V6.92433H9.89744L4.60487 17.568V11.4859Z"
                  fill="#10C623"
                />
              </svg>
            </p>
            <p
              className="text-xs text-gray-400 mt-1"
              style={{ fontFamily: "VietnamMedium", fontSize: "0.75rem" }}
            >
              Floor 0.00001BNB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
