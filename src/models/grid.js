class Grid {
  constructor() {
    this.currentGrid = this.newGrid()
  }

  render = () => {
    return this.currentGrid
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