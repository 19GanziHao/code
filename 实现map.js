/**
 * map中的execu接收三个参数 item index arr
 * 返回一个新数组
 * @param {Array} execu 
 */

Array.prototype._map = function (execu) {
  // 返回的数组
  const result = [];
  this.forEach((item, index, arr) => {
    result[index] = execu(item, index, arr);
  })
  return result;
}


const a = new Array(2).fill(2);
console.log(a._map((item) => item * 2)) // [4, 4]