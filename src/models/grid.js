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
    let ship = { length: length, coords: [], direction: direction };
    for (let i = 0; i < length; i++) {
      ship.coords.push([vStart, hStart]);
      this.currentGrid[vStart][hStart].value = 's';
      direction === 'H' ? hStart++ : vStart++;
    }
    this.allShips.push(ship);
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

  ships = () => {
    console.log(this.allShips);
    return this.allShips;
  };
}

export default Grid;
