import React, { Component } from 'react';

class StartPage extends Component{
	constructor(){
		super();
		this.changeGameType = this.changeGameType.bind(this);
		this.state = {
			gameType: "standard",
		}
	}

  changeGameType(type){
  	const gameType = this.state.gameType;
	  let stateCopy = Object.assign({}, this.state); 
	  stateCopy.gameType = type;
	  this.setState(
	    stateCopy,
	  );
	  console.log(type);
  }

	render(){
		return(
			<div className="startpage">
				<h1>Start Game</h1>
				<section className="buttons">
				  <button onClick={()=>{this.changeGameType("standard")}}>Standard</button>
			    <button onClick={()=>{this.changeGameType("expert")}}>Expert</button>
				</section>
			</div>
		);
	}
}

export default StartPage;