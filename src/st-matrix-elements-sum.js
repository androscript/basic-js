import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let last = matrix.length - 1;
  let res = 0;
  for (let j = last; j >= 0; j--) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (j == 0) {
        res = res + matrix[j][i];        
      } else if (matrix[j - 1][i] != 0) {
          res = res + matrix[j][i]; 
        }
    } 
  }
  return res;
}
