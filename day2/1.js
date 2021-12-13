var fs = require('fs');

let input = fs.readFileSync('input.txt').toString().split("\n");
let move = (acc, curr) => {
	let [dir, amount] = curr.split(' ');
	amount = parseInt(amount);
	switch (dir) {
		case 'forward': return [acc[0] + amount, acc[1]];
		case 'up': return [acc[0], acc[1] - amount];
		case 'down': return [acc[0], acc[1] + amount];
		default: return acc;
	}
};
let pos = input.reduce(move, [0, 0]);
console.log(pos);
