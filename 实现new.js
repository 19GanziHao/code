const _new = function (construtor) {
  // 创建一个空对象
  const obj = {};
  // 原型链挂载
  obj.__proto__ = construtor.prototype;

  // 将obj复制给构造体中的this，并且返回结果
  const res = construtor.call(obj);

  // 如果返回对象不为一个对象则直接返回刚才创建的对象
  return typeof res === 'object' && res !== null ? res : obj;
}

function Person() {
  this.name = '小明'

}

const p = _new(Person);
console.log(p);