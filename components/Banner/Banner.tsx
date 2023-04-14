"use client";
import { isDarkMode } from "../DarkMode/DarkMode";
import mainBanner from "../../public/assets/images/banner/main-Banner.png";
import Card from "../Banner/Card";
import Image1 from "../../public/assets/images/banner/image1.png";
import Image2 from "../../public/assets/images/banner/image2.png";
import Image3 from "../../public/assets/images/banner/image3.png";
import Image4 from "../../public/assets/images/banner/image4.png";
import Image5 from "../../public/assets/images/banner/image5.png";
import Image6 from "../../public/assets/images/banner/image6.png";
import Link from "next/link";
import Image from "next/image";
import TwoCard from "./TwoCard";

export default function Banner() {
  const scrollLeft = () => {
    document.getElementById("content")!.scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content")!.scrollLeft += 200;
  };
  return (
    <div>
      <div className="mt-16 mb-10 text-black dark:text-white block md:hidden">
        <div className="relative">
          <div
            id="content"
            className="carousel flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-x-4"
          >
            <Image
              className="w-[500px] h-[300px] bg-white dark:bg-gray-700 rounded-xl p-4 banner-shadow"
              src={mainBanner}
              alt="main"
            />

            <TwoCard />
            <TwoCard />
            <TwoCard />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="grid grid-cols-5 gap-x-4 text-white mt-16 mb-10">
          <div className="row-span-2 col-span-2 flex justify-center bg-white dark:bg-gray-700 rounded-xl p-4 banner-shadow">
            <Image
              className=" w-[100%] rounded-xl"
              src={mainBanner}
              alt="main"
            />
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4">
              <Card src={Image1} />
              <Card src={Image2} />
              <Card src={Image3} />
              <Card src={Image4} />
              <Card src={Image5} />
              <Card src={Image6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className="grid grid-cols-5 gap-x-4 text-white mt-16 mb-10">
  <div className="row-span-2 col-span-2 flex justify-center bg-white dark:bg-gray-700 rounded-xl p-4 banner-shadow">
    <Image className=" w-[100%] rounded-xl" src={mainBanner} alt="main" />
  </div>
  <div className="col-span-3">
    <div className="grid grid-cols-3 gap-4">
      <Card src={Image1} />
      <Card src={Image2} />
      <Card src={Image3} />
      <Card src={Image4} />
      <Card src={Image5} />
      <Card src={Image6} />
    </div>
  </div>
</div> */
}
