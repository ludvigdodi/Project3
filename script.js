/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    alert('Вы киноман');
} else{
    alert('ERROR!!!!!!!');
}

let i = 0; //счетчик
let lastMovie;

// for(i = 0; i < 2; i++){
//     do {
//         lastMovie = prompt("Один из последних просмотренных фильмов?", '');
//     } while (lastMovie.length < 1 || lastMovie.length > 50);

//     let movieRank = prompt("На сколько оцените его?", '');
//     personalMovieDB.movies[lastMovie] = movieRank;   
// }
   
// while (i < 2) {
//     do {
//         lastMovie = prompt("Один из последних просмотренных фильмов?", '');
//     } while (lastMovie.length < 1 || lastMovie.length > 50);

//     let movieRank = prompt("На сколько оцените его?", '');
//     personalMovieDB.movies[lastMovie] = movieRank;
//     i++;
// }

do {
    do {
        lastMovie = prompt("Один из последних просмотренных фильмов?", '');
        } while (lastMovie.length < 1 || lastMovie.length > 50);

        let movieRank = +prompt("На сколько оцените его?", '');
        personalMovieDB.movies[lastMovie] = movieRank;
        i++;
} while (i < 2);

//...................teacher solution......................//
        // for (let i = 0; i < 2; i++) {
        //     const a = prompt('Один из последних просмотренных фильмов?', ''),
        //           b = prompt('На сколько оцените его?', '');

        //     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        //         personalMovieDB.movies[a] = b;
        //         console.log('done');
        //     } else {
        //         console.log('error');
        //         i--;
        //     }
        // }

        // if (personalMovieDB.count < 10) {
        //     console.log("Просмотрено довольно мало фильмов");
        // } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        //     console.log("Вы классический зритель");
        // } else if (personalMovieDB.count >= 30) {
        //     console.log("Вы киноман");
        // } else {
        //     console.log("Произошла ошибка");
        // }


console.log(personalMovieDB);