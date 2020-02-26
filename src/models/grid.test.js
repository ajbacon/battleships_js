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


  // it('should place a ship of length 4 horizontally', () => {
  //   expected = emptyGrid()

  //   expected[0][0].value = "s"

  //   console.log(expected)

  //   expect(grid.render()).toEqual(expected);
  // });
});
