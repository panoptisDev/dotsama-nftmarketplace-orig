import Image from "next/image";
import avatar from "../../public/assets/images/collection/avatar.png";
export default function Latest() {
  return (
    <div className="flex justify-center">
      <div className="bg-white dark:bg-[#232323] px-4 lg:px-16 py-3 md:py-6 rounded-3xl banner-shadow w-full md:w-3/4 2xl:w-3/4">
        <div className="flex justify-between items-center gap-x-6">
          <button className="text-xs md:text-xl px-2 py-1 bg-[#24B692] rounded-lg text-black dark:text-[#232323] font-bold">
            SALE
          </button>
          <div className="flex flex-row items-center gap-x-2 lg:gap-x-4">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <Image src={avatar} alt="avatar" />
              </div>
            </div>
            <p className="text-[0.7rem] md:text-sm">
              SPACE ID .bnb Name sold to crypto3egal.bnb from 0xbfB1...061a for
              0.0005BNB
            </p>
          </div>

          <span className="text-[0.7rem] md:text-sm hidden lg:block">
            1h ago
          </span>
        </div>
        <span className="text-[0.7rem] float-right block lg:hidden">
          1 hour ago
        </span>
      </div>
    </div>
  );
}
