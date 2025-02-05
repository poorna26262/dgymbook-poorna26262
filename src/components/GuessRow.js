import React from "react";
import Letter from "./Letter";

const GuessRow = ({ guess }) => {
  if (!guess) {
    return (
      <div className="guess-row">
        {Array.from({ length: 5 }).map((_, i) => (
          <Letter key={i} letter="" />
        ))}
      </div>
    );
  }

  return (
    <div className="guess-row">
      {guess.guess.split("").map((letter, index) => (
        <Letter key={index} letter={letter} feedback={guess.feedback[index]} />
      ))}
    </div>
  );
};

export default GuessRow;
