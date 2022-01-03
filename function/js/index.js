// inbuild function
// userdefined

// function college() {
//         console.log('hello c')
// }

// function userName(name,age = 0) {
//     console.log(name)
// }
//
// userName('abc');

// function num(...n) {
//     let a = 0;
//     for (let b = 0; b < n.length; b++) {
//         a += n[b]
//     }
//     console.log(a)
// }
//
// num(1, 2, 3, 4, 5, 6, 7)

// function sum_sub(x, y) {
//     let sum = x + y;
//     let sub = x - y;
//     return [sum, sub]
//
// }
//
// let a = sum_sub(20, 10);
// console.log(a[0]);
// console.log(a[1]);

// let a = function () {
//     return "hello";
// }
//
// console.log(a())

// let a = (x, y) => {
//     return x + y
// }
//
// console.log(a(20, 20))


// function demo() {
//     return "i am demo";
// }
//
// function test() {
//     console.log(demo())
// }
//
// test();

// function fc(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n * fc(n - 1)
//     }
// }
//
// console.log(fc(5))

// document.querySelector('#demo').addEventListener('click', function () {
//     alert('test');
//
// });


// function* num() {
//     yield 20
//     yield 30
//     yield 40
//
// }


// let obj = num();

// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())
// console.log(obj.next())

// console.log(num().next())
// console.log(num().next())
// console.log(num().next())
// console.log(num().next())
// console.log(num().next())

//
// console.log(typeof num().next())

// import connection from './db.js';
//
// console.log(connection())