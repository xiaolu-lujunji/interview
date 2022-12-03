// 第一题
var a = 10
;(function () {
  var a
  console.log(window.a)
  console.log(a)
  a = 20
  console.log(a)
})()

var b = {
  a,
  c: b,
}
