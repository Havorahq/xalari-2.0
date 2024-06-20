"use client";

import React, { createContext, useState, ReactNode } from "react";
import Image from "next/image";
import moment from "moment";
import ContractType from "../components/contract/ContractType";
import Personal from "../components/contract/Personal";
import RoleDetails from "../components/contract/RoleDetails";
import Payments from "../components/contract/Payments";
import Wallet from "../components/contract/Wallet";
import ContractDetails from "../components/contract/ContractDetails";

export interface ContractState {
  step: number;
  contractType: string;
  employeeName: string;
  employeeEmail: string;
  jobTitle: string;
  jobDescription: string;
  startDate: Date | null;
  endDate: Date | null;
  monthlyRate: string;
  milestoneTitles: string[];
  milestoneRates: string[];
  walletAddress: string;
  isPasswordShown: boolean;
  contractAddress?: string;
}

interface ContractContextProps {
  handleNext: () => void;
  handlePrev: () => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFromDateChange: (date: Date | null) => void;
  onToDateChange: (date: Date | null) => void;
  state: ContractState;
}

export const ContractContext = createContext<ContractContextProps | undefined>(
  undefined
);

const Contract: React.FC = () => {
  const [state, setState] = useState<ContractState>({
    step: 0,
    contractType: "",
    employeeName: "",
    employeeEmail: "",
    jobTitle: "",
    jobDescription: "",
    startDate: null,
    endDate: null,
    monthlyRate: "",
    milestoneTitles: [],
    milestoneRates: [],
    walletAddress: "",
    isPasswordShown: false,
  });

  const handleNext = () => {
    if (state.step < 5) {
      setState((prevState) => ({
        ...prevState,
        step: prevState.step + 1,
      }));
    }
  };

  const handlePrev = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // const onFromDateChange = (date: Date) => {
  //   const value = moment(new Date(date)).format("YYYY-MM-DD");
  //   setState((prevState) => ({
  //     ...prevState,
  //     startDate: value !== "1970-01-01" ? value : "",
  //   }));
  // };


  // const onToDateChange = (date: Date) => {
  //   const value = moment(new Date(date)).format("YYYY-MM-DD");
  //   setState((prevState) => ({
  //     ...prevState,
  //     endDate: value !== "1970-01-01" ? value : "",
  //   }));
  // };

   const onFromDateChange = (date: Date | null) => {
     setState((prevState) => ({ ...prevState, startDate: date }));
   };

   const onToDateChange = (date: Date | null) => {
     setState((prevState) => ({ ...prevState, endDate: date }));
   };

  const details = [
    {
      title: "Create a contract",
      description:
        "Seamlessly Create Contracts on the Blockchain! Simplify and streamline your agreement processes with our intuitive platform.",
      asset: "signing-contract.png",
    },
    {
      title: "Personal Details",
      description:
        "Seamlessly Create Contracts on the Blockchain! Simplify and streamline your agreement processes with our intuitive platform.",
      asset: "personal.png",
    },
    {
      title: "Role Details",
      description:
        "Seamlessly Create Contracts on the Blockchain! Simplify and streamline your agreement processes with our intuitive platform.",
      asset: "office-desk.png",
    },
    {
      title: "Payment Schedule",
      description:
        "Seamlessly Create Contracts on the Blockchain! Simplify and streamline your agreement processes with our intuitive platform.",
      asset: "payment.png",
    },
    {
      title: "Contract Details",
      description:
        "Seamlessly Create Contracts on the Blockchain! Simplify and streamline your agreement processes with our intuitive platform.",
      asset: "wallet.png",
    },
  ];

  const renderStep = () => {
    switch (state.step) {
      case 0:
        return <ContractType setState={setState} />;
      case 1:
        return <Personal />;
      case 2:
        return <RoleDetails />;
      case 3:
        return <Payments />;
      case 4:
        return <ContractDetails />;
      default:
        return <ContractType setState={setState} />;
    }
  };

  return (
    <ContractContext.Provider
      value={{
        handleNext,
        handlePrev,
        onChange,
        onFromDateChange,
        onToDateChange,
        state,
      }}
    >
      <div className="flex justify-center h-full w-full">
        <div className="flex h-full w-4/5 flex-col justify-evenly p-8 px-16 text-white md:w-1/2 primary-bg overflow-hidden-forced">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/brandLogo.png"
              alt="Brand icon"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold">Xalari</h1>
          </div>
          <div>
            <p className="text-6xl font-semibold">
              {details[state.step]?.title}
            </p>
            <p className="text-md font-light mt-2">
              {details[state.step]?.description}
            </p>
          </div>
          <div className="self-center">
            <Image
              src={`/images/${details[state.step]?.asset}`}
              alt="Calculator image"
              width={340}
              height={300}
            />
          </div>
        </div>
        <div className="h-full w-full bg-white text-black p-8 md:w-1/2 overflow-forced">
          {renderStep()}
        </div>
      </div>
    </ContractContext.Provider>
  );
};

export default Contract;
