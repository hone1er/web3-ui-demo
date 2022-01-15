import React from "react";
import "tailwindcss/tailwind.css";
import UsingConnectWallet from "../components/UsingConnectWallet";
import UsingAddress from "../components/UsingAddress";
const Basics = () => {
  return (
    <div>
      <UsingConnectWallet />
      <UsingAddress />
    </div>
  );
};

export default Basics;
