import Image from "next/image";
import hot1 from "../../public/assets/images/hotcollections/hot1.png";
import Verified from "../../public/assets/images/verified.svg";
import Link from "next/link";

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
        <h1 className="font-bold text-xl text-center">{props.index}</h1>
      </td>
      <td className="flex items-center">
        <div className="indicator">
          <span className="indicator-item indicator-bottom">
            <div className="tooltip" data-tip="Verified">
              <Image src={Verified} alt="item" />
            </div>
          </span>
          <div className="grid w-20 h-20 place-items-center mt-8">
            <Link
              className=" w-20 h-20"
              href={"/collection/bnb/0x98A49JDJae17D8eef1"}
            >
              <Image className="w-[100%] rounded-xl" src={hot1} alt="main" />
            </Link>
          </div>
        </div>

        <h2 className="ml-2 xl:ml-5 font-bold mt-8">
          <Link href={"/collection/bnb/0x98A49JDJae17D8eef1"}>
            {props.Name}
          </Link>
        </h2>
      </td>
      <td
        className="text-center"
        style={{ fontFamily: "VietnamMedium", fontSize: "0.8rem" }}
      >
        <h5 className="mt-8"> {props.FPrice}</h5>
      </td>
      <td
        className="text-center"
        style={{ fontFamily: "VietnamMedium", fontSize: "0.8rem" }}
      >
        <h5 className="mt-8"> {props.Volume}</h5>
      </td>
    </tr>
  );
}
