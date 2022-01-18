import React from "react";
import DownArrow from "./DownArrow";

export default function AddWeb3() {
  return (
    <div
      className="flex relative flex-col justify-center items-center bg-slate-200 min-h-screen"
      id="web3libraries"
    >
      <p className="p-12 text-lg w-3/4 text-center leading-10">
        After your NextJS app is up and running you&apos;ll want to install the
        <span className="text-violet-700 uppercase"> web3-ui</span> libraries.
      </p>
      <code className="bg-slate-300 p-2 mb-4">
        yarn add @web3-ui/components
      </code>
      <code className="bg-slate-300 p-2 m-4">yarn add @web3-ui/hooks</code>
      <DownArrow href={"/#provider&network"} />
    </div>
  );
}
