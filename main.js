let numberOfFilms = '';

while(numberOfFilms.length == 0) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
}

/*for ( ; numberOfFilms.length < 1; ) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
}

do {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
} while (numberOfFilms.length < 1); */

if (+numberOfFilms < 10) {
    alert('Просмотрено довольно мало фильмов.');
} else if (+numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (+numberOfFilms >= 30){
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}

const personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    let a, b;
    do {
        a = prompt('Назвите один из последних просмотренных фильмов', '');
    } while (a.length == 0 || a.length > 50);
    
    do {
        b = prompt('На сколько вы бы оценили его?', '');
    } while (b.length == 0 || b.length > 50);
    personalMovieDB.movies[a] = b;
}

/*let i = 0;

while (i++ < 2) {
    let a = '', b = '';
    while (a.length == 0 || a.length > 50) {
        a = prompt('Назвите один из последних просмотренных фильмов', '');
    }

    while (b.length == 0 || b.length > 50) {
        b = prompt('На сколько вы бы оценили его?', '');
    }
    
    personalMovieDB.movies[a] = b;
}

i = 0;

do {
    let a = '', b = '';
    while (a.length == 0 || a.length > 50) {
        a = prompt('Назвите один из последних просмотренных фильмов', '');
    }

    while (b.length == 0 || b.length > 50) {
        b = prompt('На сколько вы бы оценили его?', '');
    }
    
    personalMovieDB.movies[a] = b;
} while (i++ < 2);*/

console.log(personalMovieDB);