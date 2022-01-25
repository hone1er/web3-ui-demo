import { motion } from "framer-motion";
import React from "react";
import DownArrow from "./DownArrow";

export default function AddWeb3() {
  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center bg-slate-400"
      id="web3libraries"
    >
      <p className="w-3/4 p-12 text-center text-lg leading-10">
        After your NextJS app is up and running you&apos;ll want to install the{" "}
        <motion.span
          className="inline-block font-bold uppercase text-violet-700"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duratoin: 0.5 }}
          variants={{
            hidden: { rotateY: 90 },
            visible: { rotateY: 0 },
          }}
        >
          web3-ui
        </motion.span>{" "}
        libraries.
      </p>
      <code className="mb-4 bg-slate-300 p-2">
        yarn add @web3-ui/components
      </code>
      <code className="m-4 bg-slate-300 p-2">yarn add @web3-ui/hooks</code>
      <DownArrow href={"/#provider&network"} />
    </div>
  );
}
