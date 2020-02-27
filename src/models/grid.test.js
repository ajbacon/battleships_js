import Grid from './grid';
import { emptyGrid } from '../test-helper';

describe('Battleships', () => {
  var grid
  var expected;

  beforeEach(() => {
    grid = new Grid();
  });

  it('should initialise a 10x10 array of empty cell objects', () => {
    expected = emptyGrid()
    expect(grid.render()).toEqual(expected);
  });


  it('should place a ship of length 4 horizontally at position [0, 0]', () => {
    expected = emptyGrid()

    expected[0][0].value = "s"
    expected[0][1].value = "s"
    expected[0][2].value = "s"
    expected[0][3].value = "s"

    grid.placeShip([0,0], 4, 'H')

    expect(grid.render()).toEqual(expected);
  });

  it('should place a ship of length 4 horizontally at position [2, 3]', () => {
    expected = emptyGrid()

    expected[2][3].value = "s"
    expected[2][4].value = "s"
    expected[2][5].value = "s"
    expected[2][6].value = "s"

    grid.placeShip([2,3], 4, 'H')

    expect(grid.render()).toEqual(expected);
  });
});
