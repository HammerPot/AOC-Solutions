import fs from 'fs';

function RotCounter2(pos, num, dir, i){

	let rot = 0
	let mod = pos % 100

	while (num != 0) {
		if (dir == "L") {
			mod--
			num--
		} else if (dir == "R") {
			mod++
			num--
		}

		if (mod % 100 == 0 || mod % 100 == -0) {
			rot++
		}
	}

	return rot
	
}

const input = fs.readFile('input.txt', 'utf8', (err, data) => {
	if (err) throw err;

	let pos = 50
	let rotCount = 0
	let pass = 0
	let lines = data.split("\n");

	for (let i = 0; i < lines.length; i++) {

		let num = parseInt(lines[i].slice(1))
		let dir = lines[i].slice(0,1)
		let zeros = 0

		if (dir == "R") {

			zeros = RotCounter2(pos, num, dir, i)
			pos += num
		}

		if (dir == "L") {
			zeros = RotCounter2(pos, num, dir, i)
			pos -= num
		}

		let mod = pos % 100

		if (mod == 0) {
			pass++
		}

		rotCount += zeros
	}

	console.log("Password:  " + pass)
	console.log("K Password: " + rotCount)
});

