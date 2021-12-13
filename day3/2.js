var fs = require('fs');

let input = fs.readFileSync('example.txt').toString().trim().split("\n");
let gamma = (acc, curr) => {
	let elems = curr.split('');
	for (i = 0; i < elems.length; ++i) {
		acc[i] += (elems[i] == '1') ? 1 : -1;
	}
	return acc;
};
let gammaRaw = input.reduce(gamma, Array('00000'.length).fill(0, 0));
console.log(gammaRaw);
let gammaStr = gammaRaw.map(e => e < 0 ? '0' : '1');
let epsilonStr = gammaStr.map(e => e == 0 ? '1' : '0');

let commonPrefixLen = (lhs, rhs) => {
	let i = 0;
	while (i < Math.min(lhs.length, rhs.length) && lhs[i] == rhs[i]) {
		++i;
	}
	return i;
}

let res = input.reduce((acc, curr) => {
	let prefixLenG = commonPrefixLen(curr, gammaStr);
	if (prefixLenG > acc.g[0]) {
		acc.g = [prefixLenG, gammaStr];
	}

	let prefixLenE = commonPrefixLen(curr, epsilonStr);
	if (prefixLenE > acc.e[0]) {
		acc.e = [prefixLenE, epsilonStr];
	}
	return acc;	
}, {g: [0, []], e: [0, []]});
console.log(res);

let gg = res.g[1].reduce((acc, curr) => acc * 2 + parseInt(curr), 0);
let ee = res.e[1].reduce((acc, curr) => acc * 2 + parseInt(curr), 0);

console.log(gg, ee, gg * ee);
