import Image from "next/image";
import Verified from "../../public/assets/images/verified.svg";
import bnbChain from "../../public/assets/images/discover/bnbChain.png";
import Link from "next/link";
export default function Card(props: any) {
  return (
    <div className="card bg-white dark:bg-stone-700 text-black dark:text-white rounded-lg banner-shadow w-max ">
      <figure>
        <Image
          className="w-[320px] h-[240px] md:w-[260px] md:h-[200px] rounded-md "
          src={props.src}
          alt="item"
        />
      </figure>
      <div className="p-5">
        <h2
          className="card-title text-base font-bold"
          style={{ fontFamily: "VietnamRegular" }}
        >
          <Link href={"/collection/bnb/0x98A49JDJae17D8eef1"}>Chain Arena</Link>
          <div className="">
            <Image className="" src={Verified} alt="item" />
          </div>
        </h2>
        <div className="flex justify-between mt-4 gap-y-4">
          <div className="flex flex-col text-left gap-y-4">
            <p
              className="text-sm font-normal"
              style={{ fontFamily: "VietnamMedium" }}
            >
              <Link
                href={"/nft/bsc/0x458AEE8b453F0d0FF22D8aab4FC1D10026a62068"}
              >
                {" "}
                BitKeep Kn...
              </Link>
            </p>{" "}
            <Image
              className=""
              height={20}
              width={20}
              src={bnbChain}
              alt="item"
            />
          </div>
          <div className="flex flex-col text-left justify-end gap-y-4">
            <p
              className="text-[#10C623] flex"
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
              className="text-gray-400"
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
