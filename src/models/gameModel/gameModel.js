import Grid from '../grid/grid';
import ComputerGrid from '../computerGrid/computerGrid';

class GameModel {
  constructor(playerGrid = Grid, computerGrid = ComputerGrid) {
    this.playerGrid = new playerGrid();
    this.computerGrid = new computerGrid();
    this.shipsToPlace = [
      { msg: 'Place Aircraft Carrier (5 cells)', size: 5 },
      { msg: 'Place Battleship (4 cells)', size: 4 },
      { msg: 'Place Cruiser (3 Cells)', size: 3 },
      { msg: 'Place Submarine (3 cells)', size: 3 },
      { msg: 'Place Destroyer (2 cells)', size: 2 }
    ];
    this.messages = [];
    this.placedShips = [];
    this.shipSize = 0;
    this.setup();
    this.allShipsPlaced = false;
  }

  setup = () => {
    this.messages.push(this.shipsToPlace[0].msg);
    this.shipSize = this.shipsToPlace[0].size;
  };

  getPlayerGrid = () => {
    return this.playerGrid;
  };

  getComputerGrid = () => {
    return this.computerGrid;
  };

  getCurrentShipSize = () => {
    return this.getCurrentShipSize;
  };

  gameMessages = () => {
    return this.messages;
  };
}

export default GameModel;
