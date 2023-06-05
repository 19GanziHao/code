

/**
 * 
 * @param {Array} arr 需扁平的数组
 */

const flatten = (arr) => {
  let res = [] // 结果

  arr.forEach(item => {
    if (Array.isArray(item)) { // 是数组
      res = res.concat(flatten(item))
    } else { // 不是数组 直接加入
      res.push(item)
    }
  })
  return res
}









console.log(flatten([1, [1, 2, [2, 4]], 3, 5]));  // [1, 1, 2, 2, 4, 3, 5]