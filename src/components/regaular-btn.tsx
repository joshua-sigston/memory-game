import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const RegularBtn = ({ children, handleClick }: Props) => {
  return (
    <button className="btn btn--text" onClick={handleClick}>
      {children}
    </button>
  );
};

export default RegularBtn;
