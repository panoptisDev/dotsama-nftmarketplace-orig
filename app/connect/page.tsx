"use client";
// import ConnectPage from "../../components/Connect/ConnectPage"
import dynamic from "next/dynamic";

const ConnectPage = dynamic(
  () => import("../../components/Connect/ConnectPage"),
  {
    ssr: false,
  }
);

export default function Connect() {
  return <ConnectPage />;
}
