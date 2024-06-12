import React, { useContext } from "react";
import { OnboardingContext } from "../../(onboarding)/page";
import Button from "../common/Button";

const Onboard: React.FC = () => {
  const context = useContext(OnboardingContext);

  if (!context) {
    return null; // Or handle the case where context is undefined
  }

  const { onChange, onRouteChange, state } = context;
  const { firstName, lastName, businessName, businessEmail, email, activeTab } = state;

  return (
    <div className="m-8 p-8 h-full flex flex-col justify-evenly overflow-y-scroll">
      <div className="flex flex-col items-center">
        <h1>Sign Up👋🏼</h1>
      </div>

      <div className="my-4 w-full">
        <div className="my-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            placeholder="Enter your first name"
            onChange={onChange}
            className="input"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            placeholder="Enter your last name"
            onChange={onChange}
            className="input"
            required
          />
        </div>
        <div className="my-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
            className="input"
            required
          />
        </div>
        {activeTab === "business" && (
          <>
            <div className="my-2">
              <label htmlFor="businessName">Business Name</label>
              <input
                type="text"
                name="businessName"
                value={businessName}
                placeholder="Enter your business name"
                onChange={onChange}
                className="input"
                required
              />
            </div>
            <div className="my-2">
              <label htmlFor="businessEmail">Business Email</label>
              <input
                type="email"
                name="businessEmail"
                value={businessEmail}
                placeholder="Enter your business email"
                onChange={onChange}
                className="input"
                required
              />
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center">
        <Button onClick={() => onRouteChange("signin")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Onboard;
