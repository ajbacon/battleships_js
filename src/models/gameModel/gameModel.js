import Grid from '../grid/grid';
import ComputerGrid from '../computerGrid/computerGrid';

class GameModel {
  constructor(playerGrid = Grid, computerGrid = ComputerGrid) {
    this.playerGrid = new playerGrid();
    this.computerGrid = new computerGrid();
  }

  getPlayerGrid = () => {
    return this.playerGrid;
  };

  getComputerGrid = () => {
    return this.computerGrid;
  };
}

export default GameModel;
