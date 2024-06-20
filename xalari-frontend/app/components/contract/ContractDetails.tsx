"use client";

import React, { useContext } from "react";
import { ContractContext } from "@/app/create-contract/page";
import Button from "../common/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import moment from "moment";

const ContractDetails: React.FC = () => {
  const { onChange, handleNext, handlePrev, state } =
    useContext(ContractContext)!;

    console.log(state)
  return (
    <div className="flex flex-col m-8 p-8 h-full justify-center gap-12">
      <span
        className="flex items-center gap-2 text-primary cursor-pointer"
        onClick={handlePrev}
      >
        <FaChevronLeft />
        <p className="text-xs">Previous</p>
      </span>
      <div className="flex flex-col items-start">
        <h1>Contract Details</h1>
        <p className="text-xs font-light text-grey">
          Details of your contract below
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Contract Type</p>
          <p className="text-sm text-grey">{state?.contractType}</p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Employee Name</p>
          <p className="text-sm text-grey">{state?.employeeName}</p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Employee Email</p>
          <p className="text-sm text-grey">{state?.employeeEmail}</p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Job Title</p>
          <p className="text-sm text-grey">{state?.jobTitle}</p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Job Description</p>
          <p className="text-sm text-grey">{state?.jobDescription}</p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Start Date</p>
          <p className="text-sm text-grey">
            {state.startDate
              ? moment(state.startDate).format("YYYY-MM-DD")
              : "No end date selected"}
          </p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">End Date</p>
          <p className="text-sm text-grey">
            {state.endDate
              ? moment(state.endDate).format("YYYY-MM-DD")
              : "No end date selected"}
          </p>
        </div>
        <div className="py-1 my-1 border-b">
          <p className="text-md text-grey-500 font-medium">Monthly Rate</p>
          <p className="text-sm text-grey my-2">{state?.monthlyRate}</p>
        </div>
        {/* <input
          type="date"
          name="endDate"
          value={state.endDate}
          onChange={onChange}
          className="p-2 border border-gray-300 rounded"
        /> */}
      </div>
      <div className="flex justify-between mt-4">
        <Button
          onClick={handleNext}
          // disabled={!state.startDate || !state.endDate}
          primary
        >
          Create Contract
        </Button>
      </div>
    </div>
  );
};

export default ContractDetails;
