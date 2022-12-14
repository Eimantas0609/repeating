"use strict";
let numberOfFilms;

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		numberOfFilms = +prompt("How many movies you seen?", "");
		while (
			numberOfFilms == "" ||
			numberOfFilms == null ||
			isNaN(numberOfFilms)
		) {
			numberOfFilms = +prompt("How many movies you seen?", "");
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt("That at last seen movie?", "").trim(),
				b = prompt("What you rate it?", "");

			if (a != null && b != null && a != "" && b != "" && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log("done");
			} else {
				console.log("error");
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count < 10) {
			console.log("To many little!");
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			console.log("You is classic movie watcher!");
		} else if (personalMovieDB.count >= 30) {
			console.log("You is fan of movies!");
		} else {
			console.log("Erorr!");
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Your favorite genre number ${i}`);
			if (genre === "" || genre == null) {
				console.log("Data is not corect");
				i--;
			} else {
				personalMovieDB.genres[i - 1] = genre;
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Favorite genre ${i + 1} - is ${item}`);
		});
	},
};
