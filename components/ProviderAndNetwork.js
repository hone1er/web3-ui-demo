import React from "react";
import ProviderImage from "../images/Provider.png";
import Image from "next/image";

export default function ProviderAndNetwork() {
  return (
    <div className="flex flex-col lg:flex-row w-full min-h-screen h-full items-center bg-slate-100">
      <p className="p-16 text-lg w-4/5 text-center leading-10">
        The first thing you need to do in order to use all the hooks and
        components properly is import{" "}
        <code className="bg-slate-300 p-2 my-4">Provider</code> and{" "}
        <code className="bg-slate-300 p-2 my-4">NETWORKS</code> from{" "}
        <code className="bg-slate-300 p-2 my-4">
          &quot;@web3-ui/hooks&quot;
        </code>
        <br />
        <br />
        <br />
        Then wrap your App in the hook{" "}
        <code className="bg-slate-300 p-2 my-4">Provider</code> and provide a{" "}
        <code className="bg-slate-300 p-2 my-4">network</code>
      </p>

      <Image src={ProviderImage} alt="Image of code"></Image>
    </div>
  );
}
