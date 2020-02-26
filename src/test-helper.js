export const emptyGrid = () => {
  let emptyGrid = []
  for(let i = 0; i < 10; i++) {
    let newRow = []
    for(let j = 0; j < 10; j++) {
      newRow.push({ value: "-" })
    }
    emptyGrid.push(newRow)
  }

  return emptyGrid

  // return Array(10).fill(Array(10).fill({value: "-", shipId: null}));
}