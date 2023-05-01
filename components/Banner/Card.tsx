import Image from "next/image";
import Link from "next/link";
export default function Card(props: any) {
  return (
    <div className="carousel-item bg-white dark:bg-gray-700 p-2 rounded-xl banner-shadow">
      <Image
        className=" rounded-xl w-full h-full "
        src={props.src}
        alt="main"
      />
    </div>
  );
}
// <div className="bg-white dark:bg-gray-700 p-2 rounded-xl banner-shadow">
//   <Image className=" rounded-xl w-full h-full" src={props.src} alt="main" />
// </div>
