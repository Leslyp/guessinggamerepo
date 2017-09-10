import React, { Component } from 'react';

class GameContainer extends Component{
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateCurrentInput = this.updateCurrentInput.bind(this);
		this.state = {
			currentInput: "",
		}
	}

  updateCurrentInput(event){
	  const userguess = event.target.value;
	  this.setState({
	    currentInput: userguess,
	  });
  }

  handleSubmit(event){
	  // COPY OF STATE - STATECOPY
	  let stateCopy = Object.assign({}, this.state);

	  // reset current comment 
	  stateCopy.currentInput = "";
	  // UPDATE STATE WITH STATECOPY
	  this.setState(stateCopy);
  }

	render(){
		return(
			<div className="gamecontainer">
				<section className="inputcontainer">
					<label htmlFor="userguess">Guess a number from 1-{this.props.maxNum}:
					<input type="text" id="userguess" name="userguess" value={this.state.currentInput} onChange={this.updateCurrentInput} /></label>
					<button className="submitbtn" onClick={this.handleSubmit}>Submit</button>
				</section>
			</div>
		);
	}
}

export default GameContainer;