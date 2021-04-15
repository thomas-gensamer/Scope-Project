/***********************************************************************
Write a function `arrowMirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples.

Write this function using an arrow function!

Examples:

arrowMirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
arrowMirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

understanding
wants arrow function called arrowMirrorArray that takes in an array as a param
return a newArray with the original array mirrored
***********************************************************************/
/*
declare arrowMirrorArray with arr as argument
set variable of copy to arr.slice
set variable of words to copy.split
set variable rev to words.reverse
return arr.concat(rev)
*/

const arrowMirrorArray = arr => {
  let copy = arr.slice();
  let words = copy.reverse();

  return arr.concat(words);
}

// your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMirrorArray;
} catch (e) {
  return null;
}
