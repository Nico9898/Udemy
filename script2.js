const numberOfFilms = +prompt("How many films did u watch already?","");

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const questionFirst = prompt("One of the latests watched movies?",""),
  questionSecond = prompt("What is the grade?",""),
  questionThird = prompt("One of the latests watched movies?",""),
  questionFourth = prompt("What is the grade?",'');

  personalMovieDb.movies[questionFirst]= questionSecond;
  personalMovieDb.movies[questionThird]=questionFourth;

  console.log(personalMovieDb);
