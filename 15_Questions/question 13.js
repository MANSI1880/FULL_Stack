const movies = [
  { title: "The Grand Adventure", rating: 4 },
  { title: "Starlight", rating: 5 },
  { title: "City Lights", rating: 5 },
];

const firstFiveStarMovie = movies.find((movie) => movie.rating === 5);

if (firstFiveStarMovie) {
  console.log(firstFiveStarMovie.title);
} else {
  console.log("No 5-star movie found.");
}
