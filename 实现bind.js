/**
 * 
 * @param {*} context 需要改变的this指向那个对象
 * @param {*} args 传递的参数
 */

Function.prototype.myBind = function (context, ...args) {
  // 因为是箭头函数 所以此时的this就是调用myBind函数的那个函数
  return (...newArgs) => this.apply(context, [...args, ...newArgs])
}



// test
const test = {
  name: "fy",
  showName: function (last) {
    console.log(this.name + " is " + last);
  },
};
test.showName("handsome"); // fy is handsome
test.showName.bind({ name: "Mr.fy" })("handsome"); // Mr.fy is handsome
test.showName.myBind({ name: "Mr.fy" })("handsome"); // Mr.fy is [object Object]

