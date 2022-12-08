let result = "";
const lenght = 8;

for (let i = 1; i < lenght; i++) {
	for (let j = 0; j < i; j++) {
		result += "*";
	}
	result += "\n";
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}
	}
}

function firstTask() {
	for (let i = 5; i <= 10; i++) {
		console.log(i);
	}
	firstTask();
}

// Мlet i = 20;let i = 20;

function secondTask() {
	for (let i = 20; i >= 10; i--) {
		if (i === 13) break;
		console.log(i);
	}
}

secondTask();

// Место для третьей задачи
function thirdTask() {
	for (let i = 2; i <= 10; i++) {
		if (i % 2 === 0) {
			console.log(i);
		}
	}
}

thirdTask();

// Место для четвертой задачи

// Цикл, который нужно переписать:

//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
	let i = 2;

	while (i <= 16) {
		if (i % 2 === 0) {
			i++;
			continue;
		} else {
			console.log(i);
		}
		i++;
	}
}

fourthTask();

// Место для пятой задачи

function fifthTask() {
	const arrayOfNumbers = [];

	for (let i = 5; i < 11; i++) {
		arrayOfNumbers[i - 5] = i;
	}

	console.log(arrayOfNumbers);
	return arrayOfNumbers;
}

fifthTask();
