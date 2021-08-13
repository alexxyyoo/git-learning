let numberOfFlims = prompt('Сколько фильмов вы посмотрели?');

let personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movieName = prompt('Один из последних просмотренных фильмов?');
let movieRating = prompt('На сколько оцените его?');
personalMovieDB.movies.movieName = movieRating;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies.movieName);
console.log(personalMovieDB.movies)
