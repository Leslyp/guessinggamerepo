import React, { Component } from 'react';
import ButtonController from './ButtonController';

class StandardInput extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <section className="standardAnswer">
        <label for="guessStandardAnswer">Guess a number between 1-10:</label>
        <input type="text" id="guessStandardAnswer" name="guessStandardAnswer"/>
        <label for="submitStandardAnswerBtn"></label>
        <input type="submit" id="submitStandardAnswerBtn" name="submitStandardAnswerBtn"/>
      </section>
    );
  }
}

export default StandardInput;