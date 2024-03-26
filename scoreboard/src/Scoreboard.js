import React from 'react';
import Player from './Player';
class Scoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { name: 'Player 1', runs: 0, wickets: 0 },
        { name: 'Player 2', runs: 0, wickets: 0 },
        { name: 'Player 3', runs: 0, wickets: 0 },
        { name: 'Player 4', runs: 0, wickets: 0 },
        { name: 'Player 5', runs: 0, wickets: 0 }
      ]
    };
  }

  // Function to update the runs and wickets for a player
  updatePlayerScore = (index, runs, wickets) => {
    this.setState(prevState => {
      const players = [...prevState.players];
      players[index] = { ...players[index], runs: players[index].runs + runs, wickets: players[index].wickets + wickets };
      return { players };
    });
  }
  // Function to update all players' scores after every 6 balls
  updateScores = () => {
    this.setState(prevState => {
      const players = [...prevState.players];
      players.forEach(player => {
        player.runs += Math.floor(Math.random() * 10);
        player.wickets += Math.floor(Math.random() * 2);
      });
      return { players };
    });
  }

  render() {
    return (
      <div>
        {this.state.players.map((player, index) => (
          <Player key={index} name={player.name} runs={player.runs} wickets={player.wickets} updatePlayerScore={this.updatePlayerScore} index={index} />
        ))}
        <button onClick={() => this.updateScores()}>Update Scores</button>
      </div>
    );
  }
}

export default Scoreboard;