import Image from "next/image";
import hot1 from "../../public/assets/images/hotcollections/hot1.png";
import Verified from "../../public/assets/images/verified.svg";
interface Trending {
  index: string;
  Name: string;
  FPrice: string;
  Volume: string;
}

export default function Entry(props: Trending) {
  return (
    <tr>
      <td>
        <h1 className="font-bold text-2xl text-center">{props.index}</h1>
      </td>
      <td className="flex items-center">
        <div className="indicator">
          <span className="indicator-item indicator-bottom">
            <Image className="w-[100%]" src={Verified} alt="main" />
          </span>
          <div className="grid w-20 h-20 place-items-center mt-8">
            <Image className="w-[100%] rounded-xl" src={hot1} alt="main" />
          </div>
        </div>
        <h2 className="ml-2 xl:ml-5 font-bold">{props.Name}</h2>
      </td>
      <td
        className="text-center"
        style={{ fontFamily: "VietnamMedium", fontSize: "0.8rem" }}
      >
        {props.FPrice}
      </td>
      <td
        className="text-center"
        style={{ fontFamily: "VietnamMedium", fontSize: "0.8rem" }}
      >
        {props.Volume}
      </td>
    </tr>
  );
}
