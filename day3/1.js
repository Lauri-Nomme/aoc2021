var fs = require('fs');

let input = fs.readFileSync('input.txt').toString().trim().split("\n");
let gamma = (acc, curr) => {
	let elems = curr.split('');
	for (i = 0; i < elems.length; ++i) {
		acc[i] += (elems[i] == '1') ? 1 : -1;
	}
	return acc;
};
let gammaRaw = input.reduce(gamma, Array('000001000101'.length).fill(0, 0));
let gammaBin = gammaRaw.map(e => e < 0 ? 0 : 1);
let gammaDec = gammaBin.reduce((acc, curr) => acc * 2 + curr, 0);
let epsilonBin = gammaBin.map(e => e == 0 ? 1 : 0);
let epsilonDec = epsilonBin.reduce((acc, curr) => acc * 2 + curr, 0);
console.log(gammaDec, epsilonDec, gammaDec * epsilonDec);
