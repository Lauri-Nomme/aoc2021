var fs = require('fs')

let input = fs.readFileSync('input.txt').toString().split("\n");
let increases = (acc, curr) => {c = parseInt(curr); return [c, acc[1] + (c > acc[0])];};
let one = input.map(e => parseInt(e)).reduce(increases, [999, 0]);

let windows3 = (e, i, a) => i + 2 < a.length ? e + a[i + 1] + a[i + 2] : 0;
let two = input.map(e => parseInt(e)).map(windows3).reduce(increases, [999, 0])

console.log(one);
console.log(two);

