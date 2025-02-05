import React from "react";
import GuessRow from "./GuessRow";

const GameBoard = ({ guesses }) => {
  return (
    <div className="game-board">
      {Array.from({ length: 6 }).map((_, index) => (
        <GuessRow key={index} guess={guesses[index]} />
      ))}
    </div>
  );
};

export default GameBoard;
