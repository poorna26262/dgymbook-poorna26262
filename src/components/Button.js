import React from "react";

// Button component that takes 'label' and 'onClick' props
const Button = ({ label, onClick, className }) => {
  return (
    <button onClick={onClick} className={`button ${className}`}>
      {label}
    </button>
  );
};

export default Button;
