/**
 * filter接收的参数与map一致
 * 为true留下 反之
 * 返回新数组
 */

Array.prototype._filter = function (execu) {
  const res = [];
  this.forEach((item, index, arr) => {
    // 返回boolean
    if (execu(item, index, arr)) {
      res.push(item)
    }
  });
  return res;
}

const b = [1, 3, 4, 5, 6, 2, 20];
console.log(b._filter(item => item > 5));