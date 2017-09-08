import React, { Component } from 'react'

function InputContainer(prpos){
	return(
		<section className="inputcontainer">
      <p id="inputanswer"><span>Guess a number between 1-10:</span></p>
      // ternary operator to toggle btw answer 
      {!props.showAnswer && (
	      	<div>
	      		<input type="text" placeholder="Guess" />
	      		<button id="answerbtn">Submit</button>
	      	</div>
	      ) : (
	      		<div id="answerBox">
				      <p id="answer"></p>
				    </div>
	      	)
      }
    </section>
	); 
}


export default InputContainer;
