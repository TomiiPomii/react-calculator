import React, { useState } from "react";
import "../style/Calculator.css";
import { CalcButton } from "./CalcButton";

export const Calculator: React.FC = () => {
  const [term, setTerm] = useState("");

  const getInput = (letter: string) => {
    if (term.length == 13) return;
    const newTerm = term + letter;
    setTerm(newTerm);
  };

  return (
    <div className="outer">
      <div className="grid">
        <div className="row">
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="term"
            type="text"
            maxLength={3}
            readOnly={true}
          />
          <CalcButton display="/" sendInput={getInput} />
        </div>
        <div className="row">
          <CalcButton display="7" sendInput={getInput} />
          <CalcButton display="8" sendInput={getInput} />
          <CalcButton display="9" sendInput={getInput} />
          <CalcButton display="*" sendInput={getInput} />
        </div>
        <div className="row">
          <CalcButton display="4" sendInput={getInput} />
          <CalcButton display="5" sendInput={getInput} />
          <CalcButton display="6" sendInput={getInput} />
          <CalcButton display="+" sendInput={getInput} />
        </div>
        <div className="row">
          <CalcButton display="1" sendInput={getInput} />
          <CalcButton display="2" sendInput={getInput} />
          <CalcButton display="3" sendInput={getInput} />
          <CalcButton display="-" sendInput={getInput} />
        </div>
        <div className="row">
          <CalcButton display="0" sendInput={getInput} />
          <CalcButton display="." sendInput={getInput} />
          <CalcButton
            display="AC"
            sendInput={(e: string) => {
              setTerm("");
            }}
          />
          <CalcButton
            display="="
            sendInput={(e: string) => {
              setTerm(eval(term));
            }}
          />
        </div>
      </div>
    </div>
  );
};
