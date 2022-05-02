const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor(arr) {
    this.arr = arr;
    this.depth = 0;
  }
  calculateDepth(arr) {
    if(Array.isArray(arr)){
      ++this.depth;
      for(let i=0;i<arr.length;i++){
          if(Array.isArray(arr[i])) {
              arr = arr.flat()
              this.calculateDepth(arr)  
          }
      }
      
    }return this.depth;
  }
}
let arr = new DepthCalculator();
console.log(arr.calculateDepth([[[]]]))
module.exports = {
  DepthCalculator
};
