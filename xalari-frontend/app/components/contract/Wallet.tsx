"use client";

import React, { useContext } from "react";
import { ContractContext } from "@/app/create-contract/page";
import Button from "../common/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Wallet: React.FC = () => {
  const { onChange, handleNext, handlePrev, state } =
    useContext(ContractContext)!;

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1>Wallet Details</h1>
        <p className="text-xs font-light">Fill in your wallet details below</p>
      </div>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          name="walletAddress"
          value={state.walletAddress}
          onChange={onChange}
          placeholder="Wallet Address"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="flex justify-between mt-4">
        <Button
          text="Back"
          iconLeft={<FaChevronLeft size={14} />}
          onClick={handlePrev}
        />
        <Button
          text="Next"
          iconRight={<FaChevronRight size={14} />}
          onClick={handleNext}
          disabled={!state.walletAddress}
        />
      </div>
    </div>
  );
};

export default Wallet;
