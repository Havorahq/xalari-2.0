import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  style?: string;
  onClick: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick, primary }) => {
  return (
    <button className={`${style} ${primary && "btn-primary"}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
