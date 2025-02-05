import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import Message from "./components/Message";
import Button from "./components/Button"; // Import Button component
import "./styles/App.css";
import { getRandomWord } from "./utils/wordList";

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [attemptsRemaining, setAttemptsRemaining] = useState(6);
  const [gameStatus, setGameStatus] = useState("ongoing"); // "won", "lost", "ongoing"
  
  const handleGuess = (guess) => {
    if (attemptsRemaining > 0 && gameStatus === "ongoing") {
      const feedback = getFeedback(guess, wordToGuess);
      setGuesses([...guesses, { guess, feedback }]);
      setAttemptsRemaining(attemptsRemaining - 1);
      if (guess === wordToGuess) {
        setGameStatus("won");
      } else if (attemptsRemaining === 1) {
        setGameStatus("lost");
      }
    }
  };

  const resetGame = () => {
    setWordToGuess(getRandomWord());
    setGuesses([]);
    setAttemptsRemaining(6);
    setGameStatus("ongoing");
  };

  return (
    <div className="app-container">
      <h1>Wordle</h1>
      <GameBoard guesses={guesses} />
      <Message gameStatus={gameStatus} resetGame={resetGame} />
      <input
        type="text"
        maxLength="5"
        onKeyUp={(e) => {
          if (e.key === "Enter" && e.target.value.length === 5) {
            handleGuess(e.target.value.toLowerCase());
            e.target.value = "";
          }
        }}
        disabled={gameStatus !== "ongoing"}
      />
      <Button label="New Game" onClick={resetGame} className="reset-button" /> {/* Use Button component here */}
    </div>
  );
};

export default App;
