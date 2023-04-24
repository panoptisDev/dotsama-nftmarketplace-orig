import React from "react";
import Image from "next/image";
import banner from "../../../public/assets/images/create/banner.png";
import Dropzone from "@/components/DropZone/DropZone";

export default function Create() {
  return (
    <div>
      <div>
        <Image className="w-[100vw]" src={banner} alt="banner" />
      </div>
      <Dropzone />
    </div>
  );
}
