import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}

/**
 * A function to check if the value is already being used in the current grid column
 * @param input Object with 9x9 Sudoku Grid, row index and value
 * @returns true if the value is already being used in the current grid column
 */
function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true
  }
  return false
}

export default isInCol
