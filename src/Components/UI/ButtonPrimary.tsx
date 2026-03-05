import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

const ButtonPrimary: React.FC<Props> = ({ children, onClick, type = "button" }) => {
  return (
    <button className="btn-primary" onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default ButtonPrimary;