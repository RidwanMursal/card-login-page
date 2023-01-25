import React, { ReactNode } from "react";

type FormProps = {
  children: ReactNode;
};

const Form = ({ children }: FormProps) => {
  return (
    <div className="grid grid-cols-1 gap-y-6 w-[400px] translate-x-[0%]">
      {children}
    </div>
  );
};

export default Form;
