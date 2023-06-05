const _instanceof = (target, fn) => {
  // 如果target为基本数据类型直接返回false
  if (typeof target !== 'object' && typeof target !== 'function' || typeof target === null) {
    return false;
  }
  let proto = target.__proto__;

  while (true) {
    // 如果proto为空 则代表没有找到
    if (!proto) return false;
    if (proto === fn.prototype) return true;
    proto = proto.__proto__;
  }  
}
function A() { }
const a = new A();
console.log(_instanceof(a, A)); // true