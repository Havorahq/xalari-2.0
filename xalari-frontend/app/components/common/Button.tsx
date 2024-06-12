import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  style?: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, style, onClick }) => {
  return (
    <button className={style || "btn-primary"} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
