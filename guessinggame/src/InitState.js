import React from 'react';

// what data is needed in game
const initState = {
  game: {
    gameType: {
      standard: 10,
      expert: 100
    },
    highScore: {
      standard: 0,
      expert: 0
    },
    gamesPlayed: 0,
    currentGame: {
      currentLevel: 'standard',
      guesses: 0,
      currentGuess: '',
      currentMessage: '',
      offerPlayAgain: false
    }
  }
};

export default initState;