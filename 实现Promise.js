/**
 * 三种状态
 */
const PENDING = Symbol()
const REJECTED = Symbol()
const FULLFILLED = Symbol()


// 主要实现
function myPromise(fn) {
  this.status = PENDING
  this.value = ''

  // 成功
  const resolve = (val) => {
    this.status = FULLFILLED
    this.value = val  
  }
  // 失败
  const reject = (error) => {
    this.status = REJECTED
    this.value = error
  }

  this.then = (onFullFill, onReject) => {
    if (this.status === FULLFILLED) {
      onFullFill(this.value)
    } else {
      onReject(this.value)
    }
  }

  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }

}




// test
let p = new myPromise((resolve, reject) => {
  resolve('hello');
})
p.then(res => {
  console.log(res);  // hello
})