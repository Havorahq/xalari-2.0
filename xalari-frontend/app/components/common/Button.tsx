import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  style?: string;
  onClick: () => void;
  primary?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  style,
  onClick,
  primary,
  disabled,
}) => {
  return (
    <button
      className={`${style} ${primary && "btn-primary"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
