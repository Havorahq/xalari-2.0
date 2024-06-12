import React, { useState, useContext } from "react";
import { OnboardingContext } from "../../(onboarding)/page";
import Button from "../common/Button";

const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(OnboardingContext);

  if (!context) {
    return null; // Or handle the case where context is undefined
  }

  const { onRouteChange, onTabChange, onReset, state } = context;
  const { activeTab } = state;

  return (
    <div className="m-8 p-8 h-full flex flex-col justify-evenly overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h1>Welcome 👋🏼</h1>
        <p className="text-gray-600 text-sm">Please Create an account</p>
        <p>You will be signed in if you already have an account</p>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex gap-4 my-4">
          <div
            className={`p-4 rounded ${
              activeTab === "business" ? "border-2 border-blue-500" : "border"
            }`}
            onClick={() => {
              onTabChange("business");
              onReset();
            }}
          >
            <h2>Business</h2>
            <p>Sign In As a Business</p>
          </div>
          <div
            className={`p-4 rounded ${
              activeTab === "employee" ? "border-2 border-blue-500" : "border"
            }`}
            onClick={() => {
              onTabChange("employee");
              onReset();
            }}
          >
            <h2>Employee</h2>
            <p>Sign In As an Employee</p>
          </div>
        </div>
        <Button onClick={() => console.log("Clicked!")}>Connect Wallet</Button>
      </div>

      <p className="self-center text-sm">
        Already have an account?{" "}
        <span
          className="text-gradient font-medium cursor-pointer"
          onClick={() => onRouteChange("signin")}
        >
          Sign In
        </span>
      </p>
    </div>
  );
};

export default Signup;
