import React from 'react';

function ButtonController(props) {
  return (
    <section className="showHeader">
      <h1>Start Game</h1>
      <div className="showBtns">
      	<button onClick={props.standardStart}>Standard</button>
      	<button onClick={props.expertStart}>Expert</button>
      </div>
    </section>
  );
}

export default ButtonController;