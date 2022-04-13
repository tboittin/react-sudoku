import { NUMBERS, SQUARE } from 'typings'

interface IInput {
  square: SQUARE
  value: NUMBERS
}

/**
 * A function to check if the value is already being used in the square
 * @param grid A 3x3 sudoku square and a value to check
 * @returns true if the value is already included in the square
 */

function isInSquare({ square, value }: IInput): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
