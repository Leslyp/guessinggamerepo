import React, { Component } from 'react';

class StartPage extends Component{
	render(){
		return(
			<div className="startpage">
				<h1>Start Game</h1>
				<section className="buttons">
				  <button >Standard</button>
			    <button >Expert</button>
				</section>
			</div>
		);
	}
}

export default StartPage;