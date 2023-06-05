
function deepClone(obj) {
  // 需要返回的结果
  const copy = Array.isArray(obj) ? [] : {} // 判断结果类型

  for (let key in obj) {
    // 判断是否为自身上的属性 而不是原型上的
    if (obj.hasOwnProperty(key)) {
      copy[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }

  return copy
}

// test

const obj = { name: 'jack', birth: { year: '1997', month: '10' } }
// const arr = obj
// arr.name = 'abc'
// { name: 'abc', birth: { year: '1997', month: '10' } } // 修改了

const copy = deepClone(obj)
copy.name = 'hhhh' // 修改了
// console.log(obj); //{ name: 'jack', birth: { year: '1997', month: '10' } }

// console.log(copy); // { name: 'hhhh', birth: { year: '1997', month: '10' } }