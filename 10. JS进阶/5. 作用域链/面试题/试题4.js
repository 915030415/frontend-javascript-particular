// function A() {
//   for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, 1000);
//   }
// }

// A();

// console.log(i);

// 10 10 ..... 报错defined;

for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  })(i);
}

// 0 1 2
