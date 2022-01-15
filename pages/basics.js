import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import UsingConnectWallet from "../components/UsingConnectWallet";
import UsingAddress from "../components/UsingAddress";
const Basics = () => {
  return (
    <div>
      <UsingConnectWallet />
      <UsingAddress />
      <div className="flex w-full justify-center items-center">
        <Link href="/">
          <p className="py-4 px-8 m-4 hover:cursor-pointer bg-slate-600 rounded-lg text-slate-100">
            back
          </p>
        </Link>
        <Link href="/basics">
          <p className="py-4 px-8 m-4 hover:cursor-pointer bg-slate-600 rounded-lg text-slate-100">
            next
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Basics;
