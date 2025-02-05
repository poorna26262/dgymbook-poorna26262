import React from "react";

const Message = ({ gameStatus, resetGame }) => {
  if (gameStatus === "won") {
    return <div className="message">You Win! <button onClick={resetGame}>New Game</button></div>;
  } else if (gameStatus === "lost") {
    return <div className="message">You Lose! <button onClick={resetGame}>New Game</button></div>;
  }

  return null;
};

export default Message;
