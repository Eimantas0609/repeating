"use strict";
let numberOfFilms;
function start() {
	numberOfFilms = +prompt("How many movies you seen?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("How many movies you seen?", "");
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt("That at last seen movie?", ""),
			b = prompt("What you rate it?", "");

		if (a != null && b != null && a != "" && b != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}

rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("To many little!");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("You is classic movie watcher!");
	} else if (personalMovieDB.count >= 30) {
		console.log("You is fan of movies!");
	} else {
		console.log("Erorr!");
	}
}

detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

showMyDB();

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);
	}
}

writeYourGenres();
