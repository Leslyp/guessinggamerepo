import React from 'react';

// what data is needed in game
const initState = {
  game: {
    // gameType: {
    //   standard: 10,
    //   expert: 100
    // },
    // highScore: {
    //   standard: 0,
    //   expert: 0
    // },
    // gamesPlayed: 0,
    // currentGame: {
    //   currentLevel: 'standard',
    //   guesses: 0,
    //   currentGuess: '',
    //   currentMessage: '',
    //   offerPlayAgain: false
    // }

    // gameType: {
    //   standardGame: {
    //     currentLevel: 'standard',
    //     max: 10,
    //     guesses: 0,
    //     currentGuess: '',
    //     currentMessage: '',
    //     gamesPlayed: 0,
    //     offerPlayAgain: false,
    //     highScore: 0,
    //   },
    //    expertGame: {
    //     currentLevel: 'expert',
    //     max: 100,
    //     guesses: 0,
    //     currentGuess: '',
    //     currentMessage: '',
    //     gamesPlayed: 0,
    //     offerPlayAgain: false,
    //     highScore: 0,
    //   } 
    //}


    // gameType: 'standard',
    max: 10,
    guesses: 0,
    currentGuess: '',
    currentMessage: '',
    gamesPlayed: 0,
    offerPlayAgain: false,
    highScore: 0,
  }
};

export default initState;