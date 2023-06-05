/**
 * 入参是由Promise实例组成的数组
 * 返回值是个Promise
 * 全部成功 状态为resolved,并且返回值组成一个数组传给我回调
 * 但凡有一个失败 状态变为rejected 并将error返回给回调
 */

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [] // 存放结果
    let count = 0 // 记录有几个resolved
    promises.forEach((promise, index) => {
      promise.then((res) => {
        result[index] = res
        count++
        count === promises.length && resolve(result) // 判断是否完成
      }).catch((err) => {
        reject(err)
      })
    })
  })
}



// test1
let p1 = Promise.reject(1), p2 = Promise.resolve(2), p3 = Promise.resolve(3);

myPromiseAll([p1, p2, p3]).then((res) => {
  console.log(res, 'res')
}, (err) => {
  console.log(err, 'err')
})
// [1, 2, 3] res








// test2
// let p1 = Promise.reject(1),
//   p2 = Promise.resolve(2),
//   p3 = Promise.resolve(3);
// myPromiseAll([p1, p2, p3]).then((res) => {
//   console.log(res, 'res')
// }, (err) => {
//   console.log(err, 'err')
// })
// 1 "err"

