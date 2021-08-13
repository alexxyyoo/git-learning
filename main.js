const numberOfFlims = prompt('Сколько фильмов вы посмотрели?');

const personalMovieDB = {
    count: numberOfFlims,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieName = prompt('Один из последних просмотренных фильмов?');
const movieRating = prompt('На сколько оцените его?');
personalMovieDB.movies.movieName = movieRating;

console.log(personalMovieDB.count);
console.log(personalMovieDB.movies.movieName);
console.log(personalMovieDB.movies);
