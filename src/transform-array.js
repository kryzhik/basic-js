const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) == false) { throw new Error('\'arr\' parameter must be an instance of the Array!')};
  let result = Array.from(arr);
  
  if (typeof result[0] != 'number' || typeof result[result.length-1] == 'string') return result.filter(el=> typeof el == 'number');
  else {for (let i=0; i < result.length; i++) {
    if (result[i] == `--discard-next`) result[i+1] = '';
    if (result[i] == `--discard-prev`)result[i-1] = '';
    if (result[i] == `--double-next`) result[i] = result[i+1];
    if (result[i] == `--double-prev`) result[i] = result[i-1];
    console.log(result[i])
  }
}
  console.log(arr)
  return result.filter(el=> typeof el == 'number');
}
console.log(transform(['--discard-prev', 1, 2, 3]))
module.exports = {
  transform
};
