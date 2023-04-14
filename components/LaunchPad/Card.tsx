import Image from "next/image";
import Verified from "../../public/assets/images/verified.svg";

export default function Card(props: any) {
  return (
    <div className="carousel-item banner-shadow rounded-lg">
      <div className="card bg-white dark:bg-stone-700 text-black dark:text-white rounded-lg">
        <figure>
          <Image
            className="w-[280px] h-[200px] rounded-md"
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
