import Grid from '../grid/grid';
import ComputerGrid from '../computerGrid/computerGrid';
import Game from './game';

jest.mock('../grid/grid');
jest.mock('../computerGrid/computerGrid');

describe('Game', () => {
  beforeEach(() => {
    Grid.mockClear();
    ComputerGrid.mockClear();
  });

  it('should create a new instance of Grid', () => {
    const game = new Game(Grid, ComputerGrid);
    console.log(game.getComputerGrid());
    console.log(game.getPlayerGrid());

    expect(Grid).toHaveBeenCalledTimes(1);
    expect(ComputerGrid).toHaveBeenCalledTimes(1);
  });
});
