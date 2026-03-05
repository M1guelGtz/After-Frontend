import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className = "" }) => {
  return <div className={`glass ${className}`}>{children}</div>;
};

export default Card;