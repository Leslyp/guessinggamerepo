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
  // and max number for math random calculator
  changeGameType(type, max){
    let stateCopy = Object.assign({}, this.state);
    let randomNumber =  Math.floor(Math.random() * (max + 1)); 
    const gameType = this.state.gameType;
    const targetNumber = this.state.targetNumber;
    const maxNum = this.state.maxNum;
    stateCopy.targetNumber = randomNumber;
    stateCopy.gameType = type;
    stateCopy.maxNum = max;
    console.log("rando: ",randomNumber); 
    this.setState(
      stateCopy
    );
  }

  handleSubmit(event){
    // COPY OF STATE - STATECOPY
    let stateCopy = Object.assign({}, this.state);
    let currentInput = stateCopy.currentInput;
    let guess = currentInput;
    let targetNum = stateCopy.targetNumber;
    let standardHigh = stateCopy.standardHigh;
    let expertHigh = stateCopy.expertHigh;
    stateCopy.guessCount++;

    // if user guesses target num congrat. them
    if(guess == targetNum) {
      alert("WINNER"); 
    } else if(guess <= targetNum){
      alert("Too low, guess again"); 
    } else if(guess >= targetNum){
      alert("Too high, guess again"); 
    } 

    // reset current comment 
    stateCopy.currentInput = "";
    // UPDATE STATE WITH STATECOPY
    this.setState(stateCopy);
  }

  updateCurrentInput(event){
   const userGuess = event.target.value;

   this.setState({
     currentInput: userGuess,
   });
  }

  resetGame(){
    console.log("reset");
    this.setState({
      currentInput: '',
      gameType: "",
      maxNum: 0,
      targetNumber: 0,
      guessCount: 0,
      currentMessage: '',
      gamesPlayed: 0,
      standardHigh: 0,
      expertHigh: 0,
    })
  }

  render(){
    return (
      <div className="App">
        <div className="startpage">
          <h1>Start Game</h1>
          <section className="buttons">
            <button onClick={()=>{this.changeGameType("standard", 10)}}>Standard</button>
            <button onClick={()=>{this.changeGameType("expert", 100)}}>Expert</button>
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
            resetGame={this.resetGame}
          />
        </div>
      </div>
    );
  }

}

export default App;
