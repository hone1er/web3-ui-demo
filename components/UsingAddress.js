import AddressImage from "../images/AddressImage.png";
import Image from "next/image";
import React from "react";
import { Address } from "@web3-ui/components";
import { useWallet } from "@web3-ui/hooks";

export default function UsingAddress() {
  const { connection } = useWallet();
  return (
    <div id="addressComponent">
      <div className="flex flex-col lg:flex-row-reverse w-full min-h-screen h-full items-center bg-slate-300">
        <div className="flex flex-col justify-center items-center p-10">
          <p className="p-4 text-lg w-4/5 leading-10">
            Once the user is connected you will want to display their address.
            Using <code className="bg-slate-200 p-2 my-4">connection</code> in
            the
            <code className="bg-slate-200 p-2 my-4">useWallet</code> hook from
            the last section along with the{" "}
            <code className="bg-slate-200 p-2 my-4">Address</code> component
            will display their address, shorten it, and even display their ENS
            name!
          </p>
          <p className="p-4 text-lg w-4/5 leading-10">
            You should see your address shown below twice. First full length,
            then shortened. If you have an ENS name you should be able to see
            that as well!
          </p>
          <p className="p-4 text-xs w-4/5 leading-6 mb-4">
            *if you do not see your address below, go to the previous section
            and make sure your wallet is connected.
          </p>
          {connection && (
            <>
              <Address value={connection.userAddress || ""} />
              <Address value={connection.userAddress || ""} shortened />
              <Address value={connection.ens || ""} />
            </>
          )}
        </div>
        <Image src={AddressImage} alt="using address component code"></Image>
      </div>
    </div>
  );
}
