"use client";
import Link from "next/link";
import Image1 from "../../public/assets/images/banner/image1.png";
import Image2 from "../../public/assets/images/banner/image2.png";
import Image3 from "../../public/assets/images/banner/image3.png";
import Image4 from "../../public/assets/images/banner/image4.png";
import Image5 from "../../public/assets/images/banner/image5.png";

import Card from "./Card";
export default function Launchpad() {
  const scrollLeft = () => {
    document.getElementById("content")!.scrollLeft -= 200;
  };
  const scrollRight = () => {
    document.getElementById("content")!.scrollLeft += 200;
  };

  return (
    <div className="py-10 text-black dark:text-white">
      <h1>Launchpad</h1>

      <div className="relative">
        <div className="flex justify-end items-center">
          <button onClick={scrollLeft} className="mx-1">
            <svg
              className="h-6 w-6 fill-dark dark:fill-white md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
            </svg>
          </button>
          <Link href="/">View All</Link>
          <button onClick={scrollRight} className="mx-1">
            <svg
              className="h-6 w-6 fill-dark dark:fill-white md:h-8 md:w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path>
            </svg>
          </button>
        </div>

        <div
          id="content"
          className="carousel p-5 flex items-center justify-start overflow-x-auto scroll-smooth scrollbar-hide gap-x-10"
        >
          <Card src={Image1} />

          <Card src={Image2} />

          <Card src={Image3} />

          <Card src={Image4} />

          <Card src={Image5} />

          <Card src={Image1} />

          <Card src={Image2} />

          <Card src={Image3} />

          <Card src={Image4} />

          <Card src={Image5} />
        </div>
      </div>
    </div>
  );
}
