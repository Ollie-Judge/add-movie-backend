const Movie = require("./utils");
const yargs = require("yargs");

console.log(yargs.argv);

const App = (argvArr) => {
  if (argvArr[2] === "add") {
    const movieObj = new Movie(argvArr[3], argvArr[4]);
    movieObj.add();
  } else if (argvArr[2] === "addMulti") {
    const movie1 = new Movie(argvArr[3], argvArr[4]);
    const movie2 = new Movie(argvArr[5], argvArr[6]);
    movie1.add();
    movie2.add();
  }
};

/* app(process.argv); */
