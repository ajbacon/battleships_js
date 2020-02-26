class Grid {
  constructor() {
    this.currentGrid = this.newGrid()
  }

  render = () => {
    return this.currentGrid
  }

  placeShip = (location, length, direction) => {
    for(let i = 0; i < length; i ++) {
      this.currentGrid[0][i].value = 's'
    }
  }

  newGrid = () => {
    let emptyGrid = []
    for(let i = 0; i < 10; i++) {
      let newRow = []
      for(let j = 0; j < 10; j++) {
        newRow.push({ value: "-" })
      }
      emptyGrid.push(newRow)
    }
    return emptyGrid
  }
}

export default Grid;