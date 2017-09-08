import React, { Component } from 'react';
import ButtonController from './ButtonController';


class ExpertInput extends Component {
  constructor(){
    super();
  }
  render() {
    return(
      <section className="expertAnswer">
        <label htmlFor="guessExpertAnswer">Guess a number between 1-100:
          <input type="text" id="guessExpertAnswer" name="guessExpertAnswer"/>
        </label>
        <label for="submitExpertAnswerBtn">
          <input type="submit" id="submitExpertAnswerBtn" name="submitExpertAnswerBtn"/>
        </label>
      </section>
    );
  }
}

export default ExpertInput;