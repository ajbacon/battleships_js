class Grid {
  constructor(gridSize = 10) {
    // gridSize converted to 0 index
    this.gridSize = gridSize;
    this.currentGrid = this.newGrid();
    this.allShips = [];
  }

  render = () => {
    return this.currentGrid;
  };

  receiveFire = coord => {
    let cell = this.currentGrid[coord[0]][coord[1]];
    if (cell.value === 'x' || cell.value === 'o') {
      return false;
    }
    // check if grid already played
    // apply an X or a 0 for a hit or a miss
  };

  placeShip = (location, length, direction) => {
    let vStart = location[0];
    let hStart = location[1];
    if (!this.isValidPlacement(vStart, hStart, length, direction)) {
      return null;
    }
    let updatedCoords = this.updateGrid(vStart, hStart, length, direction, 's');
    let initialHits = Array(updatedCoords.length).fill(false);
    let ship = {
      length: length,
      coords: updatedCoords,
      direction: direction,
      hits: initialHits
    };
    this.allShips.push(ship);
    return ship;
  };

  newGrid = () => {
    let emptyGrid = [];
    for (let i = 0; i < this.gridSize; i++) {
      let newRow = [];
      for (let j = 0; j < this.gridSize; j++) {
        newRow.push({ value: '-', shipId: null });
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
      this.currentGrid[vStart][hStart].shipID = this.allShips.length;
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
    return endCoord > this.gridSize - 1 ? true : false;
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
