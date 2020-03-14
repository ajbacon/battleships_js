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

    expect(game).toBeInstanceOf(Game);
    expect(Grid).toHaveBeenCalledTimes(1);
    expect(ComputerGrid).toHaveBeenCalledTimes(1);
  });

  describe('.getPlayerGrid', () => {
    it('should return the playerGrid when called', () => {
      const game = new Game(Grid, ComputerGrid);
      expect(game.getPlayerGrid()).toBeInstanceOf(Grid);
    });
  });

  describe('.getComputerGrid', () => {
    it('should return the playerGrid when called', () => {
      const game = new Game(Grid, ComputerGrid);
      expect(game.getComputerGrid()).toBeInstanceOf(ComputerGrid);
    });
  });
});
