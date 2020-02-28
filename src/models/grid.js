class Grid {
  constructor() {
    this.currentGrid = this.newGrid();
    this.allShips = [];
  }

  render = () => {
    return this.currentGrid;
  };

  placeShip = (location, length, direction) => {
    let vStart = location[0];
    let hStart = location[1];
    if (this.isLimitExceeded(hStart, length)) {
      return null;
    }
    let updatedCoords = this.updateGrid(vStart, hStart, length, direction, 's');
    let ship = { length: length, coords: updatedCoords, direction: direction };
    this.allShips.push(ship);
    return ship;
  };

  newGrid = () => {
    let emptyGrid = [];
    for (let i = 0; i < 10; i++) {
      let newRow = [];
      for (let j = 0; j < 10; j++) {
        newRow.push({ value: '-' });
      }
      emptyGrid.push(newRow);
    }
    return emptyGrid;
  };

  updateGrid = (vStart, hStart, length, direction, type) => {
    let updatedCoords = [];
    for (let i = 0; i < length; i++) {
      updatedCoords.push([vStart, hStart]);
      this.currentGrid[vStart][hStart].value = type;
      direction === 'H' ? hStart++ : vStart++;
    }
    return updatedCoords;
  };

  ships = () => {
    return this.allShips;
  };

  isLimitExceeded = (hStart, length) => {
    if (hStart + length - 1 > 9) {
      return true;
    }
  };
}

export default Grid;
