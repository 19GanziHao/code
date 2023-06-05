function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(resolve, reject)
    })  
  })
}

let p1 = new Promise((res) => {
  setTimeout(() => {
    res(1)
  }, 4000)
})
let p2 = new Promise((res) => {
  setTimeout(() => {
    res(2)
  }, 5000)
})

let p3 = new Promise((res) => {
  setTimeout(() => {
    res(3)
  }, 7000)
})




myPromiseRace([p1, p2, p3]).then((res) => {
  console.log(res, 'res')
}, (err) => {
  console.log(err, 'err')
})