import { motion } from "framer-motion";
import React from "react";
import DownArrow from "./DownArrow";

export default function AddWeb3() {
  return (
    <div
      className="flex relative flex-col justify-center items-center bg-slate-400 min-h-screen"
      id="web3libraries"
    >
      <p className="p-12 text-lg w-3/4 text-center leading-10">
        After your NextJS app is up and running you&apos;ll want to install the{" "}
        <motion.span
          className="inline-block text-violet-700 uppercase font-bold"
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
      <code className="bg-slate-300 p-2 mb-4">
        yarn add @web3-ui/components
      </code>
      <code className="bg-slate-300 p-2 m-4">yarn add @web3-ui/hooks</code>
      <DownArrow href={"/#provider&network"} />
    </div>
  );
}
