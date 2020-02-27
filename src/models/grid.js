class Grid {
  constructor() {
    this.currentGrid = this.newGrid();
  }

  render = () => {
    return this.currentGrid;
  };

  placeShip = (location, length, direction) => {
    let vStart = location[0];
    let hStart = location[1];
    for (let i = 0; i < length; i++) {
      this.currentGrid[vStart][hStart].value = 's';
      direction === 'H' ? hStart++ : vStart++;
    }
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
    return [
      {
        length: 4,
        coords: [
          [2, 3],
          [2, 4],
          [2, 5],
          [2, 6]
        ]
      }
    ];
  };
}

export default Grid;
