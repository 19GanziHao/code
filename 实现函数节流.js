
/**
 * 函数节流 throttle
 * @param {*} fn // 需要执行的函数
 * @param {*} wait  // 等待的时间
 */

function throttle(fn, wait) {
  let timer = null
  return function (...args) {
    if (timer === null) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        clearTimeout(timer)
      }, wait)
    }
  }
}