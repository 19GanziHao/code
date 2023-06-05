const mySetInterval = function (fn, time) {
  setTimeout(() => {
    fn.call(this)
    mySetInterval(fn, time)
  }, time)
} 

// test
mySetInterval(() => {
  console.log(1);
}, 1000)