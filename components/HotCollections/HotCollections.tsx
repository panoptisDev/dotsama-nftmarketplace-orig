import Entry from "./Entry";
import Image from "next/image";
import blueAD from "../../public/assets/images/hotcollections/bluearrdown.svg";

export default function HotCollections() {
  return (
    <div className="text-black dark:text-white text-left">
      <div className="flex items-center my-10">
        <h1 className="font-bold">Hot Collections</h1>
        <h2 className="flex ml-6 text-xl text-[#40ABF2] font-bold">
          7 Days <Image className="ml-2" src={blueAD} alt="arrdown" />
        </h2>
      </div>
      <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 divide-x-4 divide-solid dark:divide-[#1B1B1B]">
        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <Entry
              index={"01"}
              Name={"Billiard Crypto NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"02"}
              Name={"Monsta Party"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"03"}
              Name={"Lunar Genesis Crystal"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"04"}
              Name={"Mathverse Land"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"05"}
              Name={"YuliMystery BOX"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>

        <table className="table-auto">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <Entry
              index={"06"}
              Name={"Warfi-Warbot"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"07"}
              Name={"IGUVerse NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"08"}
              Name={"Metacity-Building"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"09"}
              Name={"City Of Atlantis"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"10"}
              Name={"Lord of Ring"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>
      </div>
      <div className="flex justify-center xl:hidden">
        <table className="table-auto mr-2">
          <thead>
            <tr>
              <th></th>
              <th>
                <h2 className="font-bold">Collection</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Floor Price</h2>
              </th>

              <th className="text-center">
                <h2 className="font-bold">Volume</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            <Entry
              index={"01"}
              Name={"Billiard Crypto NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"02"}
              Name={"Monsta Party"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"03"}
              Name={"Lunar Genesis Crystal"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"04"}
              Name={"Mathverse Land"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"05"}
              Name={"YuliMystery BOX"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"06"}
              Name={"Warfi-Warbot"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"07"}
              Name={"IGUVerse NFT"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"08"}
              Name={"Metacity-Building"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"09"}
              Name={"City Of Atlantis"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
            <Entry
              index={"10"}
              Name={"Lord of Ring"}
              FPrice={"0.75 ETH"}
              Volume={"1 ETH"}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
