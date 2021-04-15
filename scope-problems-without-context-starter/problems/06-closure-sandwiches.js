/***********************************************************************
Let's practice writing closures by creating a function named `sandwichMaker()`.
This function will return another function that will accept a string to add
to the sandwich order (which will start off with a default "tomato" ingredient),
separating each incoming ingredient with "and".

Understand
wants a func called sandWhichMaker with no params
want to return another func that will accept a string to add to the sandwhich order
everytime a string is added with a and at the end of it

Plan
declare a  arrow func sandWhichMaker that has no params
let order = 'one Sandwhich with totato and '
place an anonymous function  taht takes in a string as the params
  return the order + string + ' ' + 'and'

Look below to see how this function is invoked:

let sandwich = sandwichMaker(); // => returns a function
sandwich("spinach") // => "One sandwich with tomato and spinach"
sandwich("jelly") // => "One sandwich with tomato and spinach and jelly"
sandwich("bread") // => "One sandwich with tomato and spinach and jelly and bread"

Another Sandwich:
let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"

***********************************************************************/
/*
Plan
declare a  arrow func sandWhichMaker that has no params
let order = 'one Sandwhich with totato and '
place an anonymous function  taht takes in a string as the params
  return the order + string + ' ' + 'and'

*/
// your code here!
sandwichMaker = () =>{
  let order = 'One sandwich with tomato';
  function sand ( string){
    return order += ' and '+ string

  }
  return sand
}

let sandwich = sandwichMaker(); // => returns a function
console.log(sandwich("spinach") )// => "One sandwich with tomato and spinach"
console.log(sandwich("jelly")) // => "One sandwich with tomato and spinach and jelly"
console.log(sandwich("bread")) // => "One sandwich with tomato and spinach and jelly and bread"

let sandwich2 = sandwichMaker(); // => returns a function
sandwich2("pb") // => "One sandwich with tomato and pb"
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sandwichMaker;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
