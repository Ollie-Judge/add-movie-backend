const Movie = require("./utils");
const input = process.argv;

if (input[2] === "add") {
  const movieObj = new Movie(input[3], input[4]);
  const movieObj2 = new Movie(input[5], input[6]);
  const movieObj3 = new Movie(input[7], input[8]);
  movieObj.add();
  movieObj2.add();
  movieObj3.add();
}
