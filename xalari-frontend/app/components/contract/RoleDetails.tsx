"use client";

import React, { useContext } from "react";
import Button from "../common/Button";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Input from "../common/Input";
// import { DatePicker } from "rsuite";
// import Datepicker from "../common/Datepicker";
import CustomDatePicker from "../common/Datepicker";
import { ContractContext } from "@/app/contexts/ContractContext";

const RoleDetails: React.FC = () => {
  const {
    onChange,
    handleNext,
    handlePrev,
    onFromDateChange,
    onToDateChange,
    state,
  } = useContext(ContractContext)!;

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
        <h1>Role Details</h1>
        <p className="text-xs font-light text-grey">
          Fill in the role details below
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          label="Job Title"
          type="text"
          name="jobTitle"
          id="jobTitle"
          value={state.jobTitle}
          onChange={onChange}
          placeholder="Solidity Engineer"
          className="p-2 border border-gray-300 rounded"
        />
        <label htmlFor="jobDescription">Job Description</label>
        <textarea
          name="jobDescription"
          id="jobDescription"
          value={state.jobDescription}
          onChange={onChange}
          placeholder="Responsible for developing Ethereum-based applications with smart..."
          className="p-2 border border-gray-300 rounded h-48"
        />
      </div>
      <div className="flex justify-between max-w-full">
        <div className="max-w-full">
          <CustomDatePicker
            label="Start Date"
            value={state?.startDate || null}
            onChange={onFromDateChange}
            placeholder="Select Start Date"
            style={{ width: "100%" }}
          />
        </div>
        <div className="max-w-full">
          <CustomDatePicker
            label="End Date"
            value={state?.endDate || null}
            onChange={onToDateChange}
            placeholder="Select End Date"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <div>
        {/* <Button
          text="Back"
          iconLeft={<FaChevronLeft size={14} />}
          onClick={handlePrev}
        /> */}
        <Button
          onClick={handleNext}
          disabled={!state.jobTitle || !state.jobDescription}
          primary
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default RoleDetails;
