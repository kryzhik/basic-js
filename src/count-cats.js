const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


function countCats() {
  let arr = [...arguments];
  if (typeof (arr[0]) != 'object') return false;
  if (arr.length === 0) return false;
  let num = 0;
  for (let item of arr[0]) {
    for (let i=0; i<item.length; i++) {
      if (item[i] === '^^') num++;
    }
  }
  
  return num;
}


module.exports = {
  countCats
};
