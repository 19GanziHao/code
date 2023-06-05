/**
 * 函数防抖
 * @param {*} fn // 需要执行的函数
 * @param {*} wait  // 等待的时间
 */

function debounce(fn, wait) {
  let timer = null
  return function (...args) {
    // 清除
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, wait)
  }
}