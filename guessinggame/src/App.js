// When the page loads, display a header that says Start Game and underneath that have two buttons. 
// One button should read Standard and the other should read Expert. 
// If the user clicks Standard, randomly generate a number between 1 and 10 for the user to guess. 
// Expert should be between 1 and 100. 
// Once either of these buttons is clicked, the game starts.
// GAME STARTS HERE
// There should be an input for the user to guess a number and submit.
// There should be a place that shows how many guesses they have made.
// Once the user guesses, tell them whether their guess was too high or too low. 
// Once the user wins, display a message telling them that they have won and how many guesses it took. 
// Keep track of the least number of tries it takes the user to win. This is the "High Score". If the user beats their high score, congratulate them.
// Keep separate track of the high score for the standard and expert levels.
// Have a reset button if the user gets tired of trying.

import React, { Component } from 'react';
import UserStats from './UserStats';
// import GameContainer from './GameContainer';
import InitState from './InitState';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.changeGameType = this.changeGameType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCurrentInput = this.updateCurrentInput.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.state = InitState;
  }

  // function that assigns gametype,
  // and max number for math random method
  changeGameType(type, max){
    let stateCopy = Object.assign({}, this.state);
    let randomNumber = Math.floor(Math.random() * max) + 1;
    const gameType = this.state.gameType;
    const targetNumber = this.state.targetNumber;
    const maxNum = this.state.maxNum;
    stateCopy.targetNumber = randomNumber;
    stateCopy.gameType = type;
    stateCopy.maxNum = max;
    this.setState(
      stateCopy
    );
  }

  // function that checks if input matches target number,
  // and tracks high score
  handleSubmit(event){
    // COPY OF STATE - STATECOPY
    let stateCopy = Object.assign({}, this.state);
    let currentInput = stateCopy.currentInput;
    let targetNum = stateCopy.targetNumber;
    let highScore = stateCopy.highScore;
    // update number of guesses each guess
    stateCopy.guessCount++;

    console.log("tar: ", targetNum);

    // if user guesses target number congratulate them
    if(currentInput == targetNum) {
      alert("WINNER");

      // if hs is not set, then set it
      if(highScore == 0) {
        highScore = stateCopy.guessCount; 
      } else if(highScore > stateCopy.guessCount){ // if hs is greater than current # of guesses, update it
        highScore = stateCopy.guessCount; 
        alert("You beat your high score!");
      } else if(highScore < stateCopy.guessCount){ // if hs is less than current # of guesses, keep old hs
        highScore = highScore; 
      } 

      stateCopy.maxNum = 0;
      stateCopy.targetNumber = 0;
      stateCopy.guessCount = 0;
      stateCopy.guessType = 0;
      stateCopy.highScore = highScore;

    } else if(currentInput <= targetNum){
      alert("Too low, guess again"); 
    } else if(currentInput >= targetNum){
      alert("Too high, guess again"); 
    } 

    // reset current comment 
    stateCopy.currentInput = "";
    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  // when user is typing comment,
  // display it in input box 
  // and set it = to currentComment
  updateCurrentInput(event){
   let userGuess = event.target.value;
   this.setState({
     currentInput: userGuess,
   });
  }

  resetGame(){
    this.setState({
      gameType: "",
      currentInput: '',
      maxNum: 0,
      targetNumber: 0,
      guessCount: 0,
      highScore: 0,
    })
  }

  render(){
    return (
      <div className="App">
        <div className="startpage">
          <h1>Start Game</h1>
          <section className="buttons">
            <button className="gameTypeBtn" onClick={()=>{this.changeGameType("Standard", 10)}}>Standard</button>
            <button className="gameTypeBtn" onClick={()=>{this.changeGameType("Expert", 100)}}>Expert</button>
          </section>
        </div>
        <div className="gamecontainer">
          <section className="inputcontainer">
            <label htmlFor="userguess">Guess a number from 1-{this.state.maxNum}:
            <input type="text" id="userguess" name="userguess" value={this.state.currentInput} onChange={this.updateCurrentInput} /></label>
            <button className="submitbtn" onClick={this.handleSubmit}>Submit</button>
          </section>
        </div>
        <div className="UserStats">
          <UserStats 
            guessCount={this.state.guessCount}
            highScore={this.state.highScore}
            gameType={this.state.gameType}
            resetGame={this.resetGame}
          />
        </div>
      </div>
    );
  }

}

export default App;
