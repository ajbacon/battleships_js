class Battleships {
  constructor() {
    this.currentGrid = Array(10).fill(Array(10).fill({ value: '-', shipId: null }))
  }

  render = () => {
    return this.currentGrid
  }

}

export default Battleships;