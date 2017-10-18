import React from 'react';

function UserStats(props){
  return(
    <div className="showStats">
      <h2>Guesses Made: {props.guessCount}</h2>
      <h2>{props.gameType} Highscore: {props.highScore}</h2>
      <button className="resetbtn" onClick={props.resetGame}>Reset</button>
    </div>
  );
}

export default UserStats;