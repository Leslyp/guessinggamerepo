import React from 'react';

// what data is needed in game
const initState = {
  game: {
    gameType: "standard",
    targetNumber: 0,
    guesses: 0,
    currentGuess: '',
    currentMessage: '',
    gamesPlayed: 0,
    offerPlayAgain: false,
    highScore: {
      standard: 0,
      expert: 0,
    }
  }
};

export default initState;