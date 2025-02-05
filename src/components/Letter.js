import React from "react";

const Letter = ({ letter, feedback }) => {
  return <div className={`letter ${feedback}`}>{letter}</div>;
};

export default Letter;
