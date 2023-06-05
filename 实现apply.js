Function.prototype.myApply = function (context, args) {
  //  把调用myApply的函数保存起来
  context.fn = this
  
  // 判断是否有参数
  if (!args) {
    return context.fn()
  } else {
    return context.fn(...args)
  }
}


// test
let obj = {
  name: 'jack'
}
function test(arg1, arg2, arg3) {
  console.log(this.name)   // jack
  console.log(arg1, arg2, arg3);  // 1 2 3
}
test.myApply(obj, [1, 2, 3]);