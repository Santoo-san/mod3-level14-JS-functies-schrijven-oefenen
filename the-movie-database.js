console.log("Daar gaan we weer");

const IMDB = {
  title: "The Movie",
  duration: 90,
  stars: ["Puff", "Jackie", "Living Sneezes"],
};

const movieInfo = function (movie) {
  console.log(movie.title + " lasts for " + movie.duration + " minutes");
  console.log("Stars: " + movie.stars.join(","));
};

movieInfo(IMDB);
