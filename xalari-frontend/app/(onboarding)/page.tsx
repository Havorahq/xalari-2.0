"use client";

import React, { useState, createContext, ChangeEvent } from "react";
import Image from "next/image";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import Onboard from "../components/auth/Onboard";

interface OnboardingContextType {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onRouteChange: (value: string) => void;
  onTabChange: (value: string) => void;
  onReset: () => void;
  state: StateType;
}

interface StateType {
  route: string;
  email: string;
  firstName: string;
  lastName: string;
  businessName: string;
  businessEmail: string;
  activeTab: string;
}

export const OnboardingContext = createContext<
  OnboardingContextType | undefined
>(undefined);

const Onboarding: React.FC = () => {
  const [state, setState] = useState<StateType>({
    route: "signin",
    email: "",
    firstName: "",
    lastName: "",
    businessName: "",
    businessEmail: "",
    activeTab: "business",
  });

  const { route } = state;

  const renderPages = () => {
    switch (route) {
      case "signin":
        return <Signin />;
      case "signup":
        return <Signup />;
      case "onboard":
        return <Onboard />;
      default:
        return <Signin />;
    }
  };

  const onRouteChange = (value: string) => {
    setState((state) => ({
      ...state,
      route: value,
    }));
  };

  const onTabChange = (value: string) => {
    setState((state) => ({
      ...state,
      activeTab: value,
    }));
  };

  const onReset = () => {
    setState((state) => ({
      ...state,
      email: "",
      firstName: "",
      lastName: "",
      businessName: "",
      businessEmail: "",
    }));
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{ onChange, onRouteChange, onTabChange, onReset, state }}
    >
      <div className="flex h-full w-full justify-center">
        <div className="flex h-full w-4/5 flex-col justify-evenly p-8 px-16 text-white md:w-1/2 primary-bg">
          <div className="flex items-center gap-4">
            <Image
              src="/icons/brandLogo.png"
              alt="Brand icon"
              width={50}
              height={50}
            />
            <h1 className="text-2xl font-bold">Xalari</h1>
          </div>
          <div>
            <p className="text-4xl font-semibold">
              Payroll <br />
              Management on the <br />
              blockchain!
            </p>
            <p className="mt-2 text-sm leading-6">
              Revolutionize Payroll Management with Blockchain Technology!
              Discover a secure, transparent, and efficient way to handle
              payroll, ensuring accuracy, trust, and simplicity for businesses
              of all sizes.
            </p>
          </div>
          <div className="self-center">
            <Image
              src="/images/calculator.png"
              alt="Calculator image"
              width={400}
              height={350}
            />
          </div>
        </div>
        <div className="h-full w-full bg-white text-black p-8 md:w-1/2">
          {renderPages()}
        </div>
      </div>
    </OnboardingContext.Provider>
  );
};

export default Onboarding;
