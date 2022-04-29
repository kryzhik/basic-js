const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let result = {};
  let count = 0;
  let count2 = 0;
  for (let item of domains) {
    arr.push(item.split('.'));
  }
  let b = arr.sort((a,b)=> b.length - a.length);
  for (let item of domains) {
    if (item.includes('.'+ b[0][b[0].length-1])) count++;
    if (item.includes('.'+ b[0][b[0].length-2])) count2++;
  }
  
  result['.'+ b[0][b[0].length-1]] = count;
  result['.'+ b[0][b[0].length-2]] = count2;

  console.log(result);
}
getDNSStats(['epam.com', 'info.epam.com']);
module.exports = {
  getDNSStats
};
