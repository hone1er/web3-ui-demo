import ConnectImage from "../images/ConnectImage.png";
import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { useWallet } from "@web3-ui/hooks";

export default function UsingConnectWallet() {
  const { connected, connectWallet, disconnectWallet } = useWallet();
  return (
    <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen h-full items-center bg-slate-200">
      <div className="flex flex-col justify-center items-center p-10">
        <p className="p-4 text-lg w-4/5 text-center leading-10">
          Most apps are going to need a way to connect to the user's wallet. For
          that you can use{" "}
          <code className="bg-slate-300 p-2 my-4">connectWallet</code> and{" "}
          <code className="bg-slate-300 p-2 my-4">disconnectWallet</code>{" "}
          functions to make working with the connection easy!
        </p>
        <p className="p-4 text-lg w-4/5 text-center leading-10 m-4">
          But first you'll want to check if you're{" "}
          <code className="bg-slate-300 p-2 my-4 ">connected</code>. The image
          here shows how the connect button below is implemented.
        </p>
        {!connected ? (
          <Button
            className="py-4 px-8 bg-slate-600 rounded-lg text-slate-100"
            onClick={connectWallet}
          >
            Connect
          </Button>
        ) : (
          <Button
            className="py-4 px-8 bg-slate-600 rounded-lg text-slate-100"
            onClick={disconnectWallet}
          >
            Disconnect
          </Button>
        )}
      </div>
      <Image src={ConnectImage}></Image>
    </div>
  );
}
