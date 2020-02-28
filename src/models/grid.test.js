import Grid from './grid';
import { emptyGrid } from '../test-helper';

describe('Battleships', () => {
  var grid;
  var expected;

  beforeEach(() => {
    grid = new Grid();
  });

  it('should initialise a 10x10 array of empty cell objects', () => {
    expected = emptyGrid();
    expect(grid.render()).toEqual(expected);
  });

  it('should place a ship of length 4 horizontally at position [0, 0]', () => {
    expected = emptyGrid();

    expected[0][0].value = 's';
    expected[0][1].value = 's';
    expected[0][2].value = 's';
    expected[0][3].value = 's';

    grid.placeShip([0, 0], 4, 'H');

    expect(grid.render()).toEqual(expected);
  });

  it('should place a ship of length 4 horizontally at position [2, 3]', () => {
    expected = emptyGrid();

    expected[2][3].value = 's';
    expected[2][4].value = 's';
    expected[2][5].value = 's';
    expected[2][6].value = 's';

    grid.placeShip([2, 3], 4, 'H');

    expect(grid.render()).toEqual(expected);
  });

  it('should place a ship of length 4 vertically at position [2, 3]', () => {
    expected = emptyGrid();

    expected[2][3].value = 's';
    expected[3][3].value = 's';
    expected[4][3].value = 's';
    expected[5][3].value = 's';

    grid.placeShip([2, 3], 4, 'V');

    expect(grid.render()).toEqual(expected);
  });

  it('should store a ship as an object', () => {
    expected = {
      length: 4,
      coords: [
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6]
      ],
      direction: 'H'
    };
    expect(grid.placeShip([2, 3], 4, 'H')).toEqual(expected);
  });

  it('should store multiple ship objects', () => {
    let expected1;
    let expected2;

    grid.placeShip([2, 3], 4, 'H');
    grid.placeShip([0, 0], 3, 'V');

    expected1 = {
      length: 4,
      coords: [
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6]
      ],
      direction: 'H'
    };

    expected2 = {
      length: 3,
      coords: [
        [0, 0],
        [1, 0],
        [2, 0]
      ],
      direction: 'V'
    };

    expect(grid.ships()).toEqual([expected1, expected2]);
  });

  it('should not place a ship that exceeds the horizontal limit', () => {
    let expected1;
    expected1 = {
      length: 4,
      coords: [
        [2, 6],
        [2, 7],
        [2, 8],
        [2, 9]
      ],
      direction: 'H'
    };
    expect(grid.placeShip([2, 6], 4, 'H')).toEqual(expected1);
    expect(grid.placeShip([3, 7], 4, 'H')).toEqual(null);
  });

  it('should not place a ship that exceeds the vertical limit', () => {
    let expected1;
    expected1 = {
      length: 4,
      coords: [
        [6, 2],
        [7, 2],
        [8, 2],
        [9, 2]
      ],
      direction: 'V'
    };
    expect(grid.placeShip([6, 2], 4, 'V')).toEqual(expected1);
    expect(grid.placeShip([7, 3], 4, 'V')).toEqual(null);
  });

  it('should not place a ship that intersects with another ship', () => {
    let expected1;
    expected1 = {
      length: 4,
      coords: [
        [2, 6],
        [2, 7],
        [2, 8],
        [2, 9]
      ],
      direction: 'H'
    };
    expect(grid.placeShip([2, 6], 4, 'H')).toEqual(expected1);
    expect(grid.placeShip([1, 7], 4, 'V')).toEqual(null);
  });

  it('should place multiple ships and reject placement of others', () => {
    grid.placeShip([0, 0], 4, 'H');
    grid.placeShip([0, 0], 3, 'V');
    grid.placeShip([5, 3], 3, 'V');
    grid.placeShip([6, 2], 4, 'H');
    grid.placeShip([2, 2], 2, 'H');

    expected = emptyGrid();

    expected[0][0].value = 's';
    expected[0][1].value = 's';
    expected[0][2].value = 's';
    expected[0][3].value = 's';

    expected[5][3].value = 's';
    expected[6][3].value = 's';
    expected[7][3].value = 's';

    expected[2][2].value = 's';
    expected[2][3].value = 's';

    expect(grid.render()).toEqual(expected);
  });
});
