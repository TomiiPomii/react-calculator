import React from "react";
import "../style/CalcButton.css";

interface IProps {
  display: string;
  sendInput: Function;
}

export const CalcButton: React.FC<IProps> = ({ display, sendInput }) => {
  const sendText = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendInput(display);
  };

  return (
    <button className="CButton" onClick={(e) => sendText(e)}>
      {display}
    </button>
  );
};
