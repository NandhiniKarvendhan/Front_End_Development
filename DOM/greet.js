function Greet(name) {
    if (name === undefined) {
      console.log("Hello there!");
    } else if (Array.isArray(name)) {
      console.log("Hello," + name.toString() + "!");
    } else if (name === name.toUpperCase()) {
      console.log("HELLO," + name + "!");
    } else {
      console.log("Hello," + name + "!");
    }
  }

  
  Greet("Elizabeth");
  Greet();
  Greet("JOSE");
  Greet(["Jose", "Pep"]);
  Greet(["Alex","Arsene","Jose","Zidane"]);


  module.exports = Greet;