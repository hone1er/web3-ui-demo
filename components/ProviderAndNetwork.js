import React from "react";
import ProviderImage from "../images/Provider.png";
import Image from "next/image";
import DownArrow from "./DownArrow";
import { motion } from "framer-motion";

export default function ProviderAndNetwork() {
  return (
    <div className="flex relative flex-col">
      <div
        className="flex  flex-col lg:flex-row w-full min-h-screen h-full items-center bg-slate-300"
        id="provider&network"
      >
        <p className="p-16 text-lg w-4/5 leading-10">
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
          Then wrap your{" "}
          <motion.span
            className="inline-block text-violet-700 uppercase font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { rotateX: 90 },
              visible: { rotateX: 0 },
            }}
            transition={{
              delay: 0.25,
              duratoin: 0.5,
            }}
          >
            app
          </motion.span>{" "}
          in the hook <code className="bg-slate-300 p-2 my-4">Provider</code>{" "}
          and provide a <code className="bg-slate-300 p-2 my-4">network</code>
        </p>

        <Image
          className="mb-48"
          src={ProviderImage}
          alt="Image of code"
        ></Image>
      </div>
      <DownArrow href={"/#nextpage"} />
    </div>
  );
}
