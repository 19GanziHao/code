
/**
 * 使用正则
 * @param {String} str 需处理的字符串 
 * @returns 处理完成的字符串
 */
function myTrim1(str) {
  return str.replace(/^\s+|\s+$/g, '')
}



/**
 * 不适用正则
 * @param {String} str 需处理的字符串
 * @returns 处理完成的字符串
 */
function myTrim2(str) {
  let start = 0, end = str.length - 1

  while (str.charAt(start) === ' ' && start < end) start++
  while (str.charAt(end) === ' ' && start < end) end--

  console.log(start, end)
  return str.slice(start, end + 1)

}

let str = "   Hello, World!   ";
let trimmedStr = myTrim1(str);

console.log(trimmedStr); // 输出: "Hello, World!"