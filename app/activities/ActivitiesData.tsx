import Image from "next/image";
import avatar from "../../public/assets/images/item/avatar.png";
import Verified from "../../public/assets/images/verified.svg";
export default function ActivitiesData() {
  return (
    <tr>
      <td>
        <div className="flex flex-col w-44 md:w-[25vw] lg:w-[15vw] p-4 md:p-6">
          <h3 className="text-base">Sale</h3>
          <span>as fixed price</span>
        </div>{" "}
      </td>
      <td>
        <div className="flex flex-row justify-start gap-x-8 w-72 md:w-[35vw] lg:w-[24vw] p-4 md:p-6">
          <Image className="w-[50px] rounded-2xl" src={avatar} alt="avatar" />
          <div className="flex flex-col">
            <h2 className="text-base">Treasureland</h2>
            <h3 className="text-base flex">
              Billiard Crypto NFT{" "}
              <Image className="ml-2" src={Verified} alt="verified" />
            </h3>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-col gap-y-2 w-44 md:w-[20vw] lg:w-[12vw] p-4 md:p-6">
          <h3 className="text-base text-right">$0.10</h3>{" "}
          <h2 className="text-xs text-right">0.001 BNB</h2>
        </div>
      </td>
      <td>
        <div className="w-44 md:w-[25vw] lg:w-[12vw] p-4 md:p-6">
          <h2 className="text-base">0xbe12…983D</h2>
        </div>
      </td>
      <td>
        <div className="w-44 md:w-[25vw] lg:w-[12vw] p-4 md:p-6">
          <h2 className="text-base">-</h2>
        </div>
      </td>
      <td>
        <div className="w-44 md:w-[25vw] lg:w-[12vw] p-4 md:p-6">
          <h2 className="text-base">2 days ago</h2>
        </div>
      </td>
    </tr>
  );
}
