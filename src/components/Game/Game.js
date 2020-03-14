import React from 'react';
import GridPlayer from '../GridPlayer/GridPlayer';
import GridComputer from '../GridComputer/GridComputer';
import GameModel from '../../models/gameModel/gameModel';
import Classes from './Game.module.css';

class Game extends React.Component {
  state = {
    gameModel: new GameModel(),
    orientation: 'H',
    shipLength: '4'
  };

  handlePlayerCellClick = coord => {
    console.log(coord);
    const updatedModel = this.state.gameModel;
    updatedModel
      .getPlayerGrid()
      .placeShip(coord, this.state.shipLength, this.state.orientation);
    this.setState({
      model: updatedModel
    });
  };

  render() {
    return (
      <div className={Classes.Game} data-test='component-game'>
        <div style={{ margin: 20 }}>
          <GridPlayer
            model={this.state.gameModel.getPlayerGrid()}
            onClick={this.handlePlayerCellClick}
          />
        </div>
        <div style={{ margin: 20 }}>
          <GridComputer />
        </div>
      </div>
    );
  }
}

export default Game;
