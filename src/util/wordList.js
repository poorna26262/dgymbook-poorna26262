export const getRandomWord = () => {
    const words = ["apple", "bread", "chair", "dance", "eagle"];
    return words[Math.floor(Math.random() * words.length)];
  };
  