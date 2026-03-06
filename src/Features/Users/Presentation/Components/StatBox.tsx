import React from "react";

interface Props {
  title: string;
  value: string | number;
}

const StatBox: React.FC<Props> = ({ title, value }) => {
  return (
    <div className="glass stat-box">
      <h4>{title}</h4>
      <div className="stats-number">{value}</div>
    </div>
  );
};

export default StatBox;