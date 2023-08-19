import React, { useEffect, useState } from "react";
import Image from "next/image";
import moonbeamLogo from "../../public/assets/images/moonbeam-logo.png";
import astarLogo from "../../public/assets/images/astar-logo.png";
import { fetchBalance } from "@wagmi/core";
import { astar } from "@/app/WagmiProvider/wagmi-provider";
import { moonbeam } from "@wagmi/core/chains";
import { useAccount, useDisconnect, useNetwork } from "wagmi";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import WalletConnections from "../Connect/ConnectModal";
import { ModeToggle } from "../ui/ThemeToggle/Toggle";

export default function SwitchNetwork() {
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  console.log(chain);
  console.log(address, isConnected);
  const router = useRouter();

  return (
    <div className="flex gap-x-2">
      <div className="flex items-center">
        <Select defaultValue={"moonbeam"}>
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem
              className="text-black"
              onChange={(event: any) => console.log(event.target.value)}
              value="moonbeam"
            >
              <div className="flex items-center">
                <Image
                  className="w-[27px] h-[27px]"
                  src={moonbeamLogo}
                  alt="moonbeam logo"
                />
                <h3 className="ml-1">Moonbeam</h3>
              </div>
            </SelectItem>
            <SelectItem className="text-black" value="astar">
              <div className="flex items-center">
                <Image
                  className="w-[27px] h-[27px]"
                  src={astarLogo}
                  alt="astar logo"
                />
                <h3 className="ml-1">Astar</h3>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <Select defaultValue={"english"}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">
                <div className="flex items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-black dark:fill-white"
                      d="M1.99832 7.19863C1.84937 7.77846 1.77424 8.37478 1.77469 8.97344C1.77469 9.58575 1.85279 10.1803 1.99832 10.7483H4.52566C4.40602 9.56807 4.40602 8.37881 4.52566 7.19863H1.99832ZM2.72422 5.42381H4.80608C5.04213 4.34384 5.38289 3.37656 5.80086 2.57168C4.51251 3.19235 3.44055 4.18608 2.72422 5.42381ZM15.7496 7.19863H13.2223C13.3419 8.37881 13.3419 9.56807 13.2223 10.7483H15.7496C16.0483 9.58391 16.0483 8.36298 15.7496 7.19863ZM15.0237 5.42381C14.3074 4.18608 13.2354 3.19235 11.947 2.57168C12.3659 3.37656 12.7058 4.34384 12.9418 5.42381H15.0237ZM6.31112 7.19863C6.24463 7.78789 6.21145 8.38044 6.21173 8.97344C6.21173 9.58132 6.24545 10.1759 6.31112 10.7483H11.4368C11.5704 9.56882 11.5704 8.37806 11.4368 7.19863H6.31112ZM6.62881 5.42381H11.1191C10.9576 4.75674 10.7246 4.10904 10.4243 3.49192C9.86696 2.37823 9.27063 1.87418 8.87395 1.87418C8.4764 1.87418 7.88095 2.37823 7.32365 3.49192C7.04412 4.05277 6.80896 4.70501 6.62881 5.42381ZM2.72422 12.5231C3.44055 13.7608 4.51251 14.7545 5.80086 15.3752C5.38201 14.5703 5.04213 13.603 4.80608 12.5231H2.72422ZM15.0237 12.5231H12.9418C12.7058 13.603 12.365 14.5703 11.947 15.3752C13.2354 14.7545 14.3074 13.7608 15.0237 12.5231ZM6.62881 12.5231C6.80896 13.2419 7.04412 13.8941 7.32365 14.455C7.88095 15.5687 8.47728 16.0727 8.87395 16.0727C9.27151 16.0727 9.86696 15.5687 10.4243 14.455C10.7038 13.8941 10.939 13.2419 11.1191 12.5231H6.62881ZM8.87395 17.8475C3.9728 17.8475 -0.00012207 13.8746 -0.00012207 8.97344C-0.00012207 4.07229 3.9728 0.0993652 8.87395 0.0993652C13.7751 0.0993652 17.748 4.07229 17.748 8.97344C17.748 13.8746 13.7751 17.8475 8.87395 17.8475Z"
                      fill="white"
                    />
                  </svg>
                  <h3 className="ml-1">ENG-USD</h3>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* <Connect /> */}
      <div className="flex items-center">
        {!address && !isConnected && <WalletConnections />}

        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="h-10 w-10 flex justify-center items-center">
              <svg
                className="h-[1.2rem] w-[1.2rem] md:w-[1.5rem] md:h-[1.5rem]"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="fill-black dark:fill-white"
                  cx="12"
                  cy="12"
                  r="12"
                  fill="black"
                />
                <path
                  className="fill-white dark:fill-black"
                  d="M12 4C12.8487 4 13.6626 4.33714 14.2627 4.93726C14.8628 5.53737 15.2 6.35131 15.2 7.2C15.2 8.04869 14.8628 8.86263 14.2627 9.46274C13.6626 10.0629 12.8487 10.4 12 10.4C11.1513 10.4 10.3374 10.0629 9.73723 9.46274C9.13712 8.86263 8.79998 8.04869 8.79998 7.2C8.79998 6.35131 9.13712 5.53737 9.73723 4.93726C10.3374 4.33714 11.1513 4 12 4ZM12 12C15.536 12 18.4 13.432 18.4 15.2V16.8H5.59998V15.2C5.59998 13.432 8.46398 12 12 12Z"
                />
              </svg>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="dark:bg-neutral-900 text-neutral-900 dark:text-white"
            align="end"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/user/100x100")}>
              Profile
            </DropdownMenuItem>
            {/* <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem> */}
            <DropdownMenuItem onClick={() => disconnect()}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
