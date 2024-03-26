import React from 'react';

function Player(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Runs: {props.runs}</p>
      <p>Wickets: {props.wickets}</p>
    </div>
  );
}

export default Player;