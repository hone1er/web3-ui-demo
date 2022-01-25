import AddressImage from "../images/AddressImage.png";
import Image from "next/image";
import React from "react";
import { Address } from "@web3-ui/components";
import { useWallet } from "@web3-ui/hooks";

export default function UsingAddress() {
  const { connection } = useWallet();
  return (
    <div id="addressComponent">
      <div className="flex h-full min-h-screen w-full flex-col items-center bg-slate-300 lg:flex-row-reverse">
        <div className="flex flex-col items-center justify-center p-10">
          <p className="w-4/5 p-4 text-lg leading-10">
            Once the user is connected you will want to display their address.
            Using <code className="my-4 bg-slate-200 p-2">connection</code> in
            the
            <code className="my-4 bg-slate-200 p-2">useWallet</code> hook from
            the last section along with the{" "}
            <code className="my-4 bg-slate-200 p-2">Address</code> component
            will display their address, shorten it, and even display their ENS
            name!
          </p>
          <p className="w-4/5 p-4 text-lg leading-10">
            You should see your address shown below twice. First full length,
            then shortened. If you have an ENS name you should be able to see
            that as well!
          </p>
          <p className="mb-4 w-4/5 p-4 text-xs leading-6">
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
