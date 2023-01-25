import React, { MouseEventHandler } from "react";

type ButtonProps = {
  text: string;
  customStyles?: string;
  onClick: MouseEventHandler;
};

const Button = ({ text, onClick, customStyles = "" }: ButtonProps) => {
  return (
    <button className="py-3 violet rounded-md " onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
