import React from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import UsingConnectWallet from "../components/UsingConnectWallet";
import UsingAddress from "../components/UsingAddress";
import { motion } from "framer-motion";
const Basics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        durantion: 1,
        ease: "backInOut",
      }}
    >
      <UsingConnectWallet />
      <UsingAddress />
      <div className="flex w-full items-center justify-center">
        <Link href="/">
          <p className="m-4 rounded-lg bg-slate-600 py-4 px-8 text-slate-100 hover:cursor-pointer">
            back
          </p>
        </Link>
        <Link href="/basics">
          <p className="m-4 rounded-lg bg-slate-600 py-4 px-8 text-slate-100 hover:cursor-pointer">
            next
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Basics;
