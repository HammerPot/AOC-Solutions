const fs = require('fs');

const data = fs.readFileSync("input.txt", "utf8");

let ranges = data.split(",");
let total = 0;

// console.log(ranges)

for (i = 0; i < ranges.length; i++) {
	let bounds = ranges[i].split("-");
	for (p = 0; p < bounds.length; p++) bounds[p] = parseInt(bounds[p])

	for (j = bounds[0]; j <= bounds[1]; j++) {
		j = j.toString()
		let isDiff = false
		let numDone = false

		let kFactor = 1
		while (kFactor <= j.length/2) {

			let k = 0
			let l = 0 + kFactor
			let index = 0
			
			let nums = []
			while (k < j.length) {

				nums[index] = j.slice(k, l)
				k = l
				l = l + kFactor
				index++
			
			}

		

			let repeats = 0
			for (m = 0; m < nums.length-1; m++){
				// if ((nums[m] == "" || nums[m+1] == "" || nums[m] == undefined || nums[m+1] == undefined)) break;
				if (nums[m] != nums[m+1]){
					isDiff = true
					break;
				}
				repeats++
				if (repeats > 1) {
					isDiff = true
					break;
				}
			}

			if (isDiff == false) {
				total = total + parseInt(j)
				console.log(j)
				break;
			} else {
				kFactor++
				isDiff = false
			}
	

		}
	}
}

console.log("Total: " + total)
