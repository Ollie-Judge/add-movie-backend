const Movie = require("./utils");
const yargs = require("yargs");

console.log(yargs.argv);

const App = (yargsOb) => {
  try {
    if (yargsObj.add) {
      const movieObj = new Movie(yargsObj.title, yargsObj.actor);
      movieObj.add();
      console.log(movie1.list());
    } else if (yargsObj.addMulti) {
      const movie1 = new Movie(yargsObj.title1, yargsObj.actor1);
      const movie2 = new Movie(yargsObj.title2, yargsObj.actor2);
      movie1.add();
      movie2.add();
      console.log(movie1.list());
    } else {
      console.log("try something else");
    }
  } catch (error) {
    console.log("Error");
  }
};

app(yargs.argv);
