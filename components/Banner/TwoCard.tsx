import Image1 from "../../public/assets/images/banner/image1.png";
import Image2 from "../../public/assets/images/banner/image2.png";
import Image3 from "../../public/assets/images/banner/image3.png";
import Image4 from "../../public/assets/images/banner/image4.png";
import Image5 from "../../public/assets/images/banner/image5.png";
import Image6 from "../../public/assets/images/banner/image6.png";
import Link from "next/link";
import Image from "next/image";

export default function TwoCard() {
  return (
    <div className="grid grid-cols-1 gap-x-4 text-white">
      <div className="col-span-10">
        <div className="grid grid-rows-2 gap-4">
          <Image
            className="bg-white dark:bg-neutral-900 p-2 rounded-xl banner-shadow"
            src={Image1}
            alt="b-image"
          />{" "}
          <Image
            className="bg-white dark:bg-neutral-900 p-2 rounded-xl banner-shadow"
            src={Image2}
            alt="b-image"
          />
        </div>
      </div>
    </div>
  );
}
