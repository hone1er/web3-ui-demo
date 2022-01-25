import React from "react";
import ProviderImage from "../images/Provider.png";
import Image from "next/image";
import DownArrow from "./DownArrow";
import { motion } from "framer-motion";

export default function ProviderAndNetwork() {
  return (
    <div className="relative flex flex-col">
      <div
        className="flex  h-full min-h-screen w-full flex-col items-center bg-slate-300 lg:flex-row"
        id="provider&network"
      >
        <p className="w-4/5 p-16 text-lg leading-10">
          The first thing you need to do in order to use all the hooks and
          components properly is import{" "}
          <code className="my-4 bg-slate-300 p-2">Provider</code> and{" "}
          <code className="my-4 bg-slate-300 p-2">NETWORKS</code> from{" "}
          <code className="my-4 bg-slate-300 p-2">
            &quot;@web3-ui/hooks&quot;
          </code>
          <br />
          <br />
          <br />
          Then wrap your{" "}
          <motion.span
            className="inline-block font-bold uppercase text-violet-700"
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
          in the hook <code className="my-4 bg-slate-300 p-2">Provider</code>{" "}
          and provide a <code className="my-4 bg-slate-300 p-2">network</code>
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
