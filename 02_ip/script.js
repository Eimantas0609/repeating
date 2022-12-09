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
			if (k === 2) {
				continue first;
			}
			console.log(`Third level: ${k}`);
		}
	}
}

// function firstTask() {
// 	for (let i = 5; i <= 10; i++) {
// 		console.log(i);
// 	}
// 	firstTask();
// }

// function secondTask() {
// 	for (let i = 20; i >= 10; i--) {
// 		if (i === 13) {
// 			break;
// 		}
// 		console.log(i);
// 	}
// }

// secondTask();

// // Место для третьей задачи
// function thirdTask() {
// 	for (let i = 2; i <= 10; i++) {
// 		if (i % 2 === 0) {
// 			console.log(i);
// 		}
// 	}
// }

// thirdTask();

// // Место для четвертой задачи

// // Цикл, который нужно переписать:

// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }
// // }

// function fourthTask() {
// 	let i = 2;

// 	while (i <= 16) {
// 		if (i % 2 === 0) {
// 			i++;
// 			continue;
// 		} else {
// 			console.log(i);
// 		}
// 		i++;
// 	}
// }

// fourthTask();

// // Место для пятой задачи

// function fifthTask() {
// 	const arrayOfNumbers = [];

// 	for (let i = 5; i < 11; i++) {
// 		arrayOfNumbers[i - 5] = i;
// 	}

// 	console.log(arrayOfNumbers);
// 	return arrayOfNumbers;
// }

// fifthTask();

function firstTask() {
	const arr = [3, 5, 8, 16, 20, 23, 50];
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result[i] = arr[i];
	}

	console.log(result);
	return result;
}

firstTask();

function secondTask() {
	const data = [5, 10, "Shopping", 20, "Homework"];

	for (let i = 0; i < data.length; i++) {
		if (typeof data[i] === "number") {
			data[i] = data[i] * 2;
		} else if (typeof data[i] === "string") {
			data[i] = `${data[i]} - done`;
		}
	}

	console.log(data);
	return data;
}

secondTask();

function thirdTask() {
	const data = [5, 10, "Shopping", 20, "Homework"];
	const result = [];

	for (let i = 1; i <= data.length; i++) {
		result[i - 1] = data[data.length - i];
	}

	console.log(result);
	return result;
}

thirdTask();

const lines = 5;
let resultat = "";

for (let i = 0; i <= lines; i++) {
	for (let j = 0; j < lines - i; j++) {
		resultat += " ";
	}
	for (let j = 0; j < 2 * i + 1; j++) {
		resultat += "*";
	}
	resultat += "\n";
}

console.log(resultat);
