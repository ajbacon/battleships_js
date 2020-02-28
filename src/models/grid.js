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
    if (!this.isValidPlacement(vStart, hStart, length, direction)) {
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

  isValidPlacement = (vStart, hStart, length, direction) => {
    if (this.exceedGridLimit(vStart, hStart, length, direction)) return false;
    if (this.shipIntersect(vStart, hStart, length, direction)) return false;
    return true;
  };

  exceedGridLimit = (vStart, hStart, length, direction) => {
    let endCoord;
    if (direction === 'V') {
      endCoord = vStart + length - 1;
    } else {
      endCoord = hStart + length - 1;
    }
    return endCoord > 9 ? true : false;
  };

  shipIntersect = (vStart, hStart, length, direction) => {
    let shipIntersect = false;
    for (let i = 0; i < length; i++) {
      if (this.currentGrid[vStart][hStart].value === 's') {
        shipIntersect = true;
      }
      direction === 'H' ? hStart++ : vStart++;
    }
    return shipIntersect;
  };
}

export default Grid;
