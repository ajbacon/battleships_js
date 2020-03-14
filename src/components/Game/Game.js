import React from 'react';
import GridPlayer from '../GridPlayer/GridPlayer';
import GridComputer from '../GridComputer/GridComputer';
import GameModel from '../../models/gameModel/gameModel';
import Classes from './Game.module.css';

class Game extends React.Component {
  state = {
    gameModel: new GameModel()
  };

  render() {
    return (
      <div className={Classes.Game} data-test='component-game'>
        <div style={{ margin: 20 }}>
          <GridPlayer model={this.state.gameModel.getPlayerGrid()} />
        </div>
        <div style={{ margin: 20 }}>
          <GridComputer />
        </div>
      </div>
    );
  }
}

export default Game;
