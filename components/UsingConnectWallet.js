import ConnectImage from "../images/ConnectImage.png";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useWallet } from "@web3-ui/hooks";
import DownArrow from "./DownArrow";
export default function UsingConnectWallet() {
  const { connected, connectWallet, disconnectWallet } = useWallet();
  return (
    <div className="relative flex flex-col">
      <div className="relative flex h-full min-h-screen w-full flex-col items-center bg-slate-200 lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center p-10">
          <p className="w-4/5 p-4 text-lg leading-10">
            Most apps are going to need a way to connect to the user&apos;s
            wallet. For that you can use{" "}
            <code className="my-4 bg-slate-300 p-2">connectWallet</code> and{" "}
            <code className="my-4 bg-slate-300 p-2">disconnectWallet</code>{" "}
            methods to make working with the connection easy!
          </p>
          <p className="m-4 w-4/5 p-4 text-lg leading-10">
            But first you&apos;ll want to check if you&apos;re{" "}
            <code className="my-4 bg-slate-300 p-2 ">connected</code>. All of
            this funcionality(and more...but that&apos;s for later) is
            accessible via the{" "}
            <code className="my-4 bg-slate-300 p-2 ">useWallet</code> hook. The
            image here shows how the connect button below is implemented.
          </p>
          {!connected ? (
            <Button
              className="rounded-lg bg-slate-600 py-4 px-8 text-slate-100"
              onClick={connectWallet}
            >
              Connect
            </Button>
          ) : (
            <Button
              className="rounded-lg bg-slate-600 py-4 px-8 text-slate-100"
              onClick={disconnectWallet}
            >
              Disconnect
            </Button>
          )}
        </div>
        <Image src={ConnectImage} alt="Image of code"></Image>
      </div>
      <DownArrow href={"/basics#addressComponent"} />
    </div>
  );
}
