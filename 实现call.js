/**
 * 
 * @param {*} context 需要改变的this指向那个对象 
 * @param {*} args 传递的参数
 */


Function.prototype.myCall = function (context, ...args) {
  context.fn = this

  if (!args.length) return context.fn()

  return context.fn(...args)
}


// test
let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
test.myCall(obj, 1, 2, 3);