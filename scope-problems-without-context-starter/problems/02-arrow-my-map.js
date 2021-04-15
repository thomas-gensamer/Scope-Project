/***********************************************************************
Write a function using fat arrow syntax named `arrowMyMap` that accepts an array
and a callback as arguments. The function will return an array of new elements
obtained by calling the callback on each element of the array, passing in the
element. Assign the below function to a variable using the const keyword.

Do not use the built in Array#map - use Array#forEach for iteration.

Understnad
function using arrow syntax that takes in a array and callBack as args
set a an empty array
use forEach on the oringinal array
new elemtns are pushed into the empty array after they have placed into the callback
return newArray

Plan
decalre a const on a arrow func called arrowMyMap with array and cb as the args
set a var newArr to an empty arrray
use forEach on the array arg set the function parma to el
  place the element into the cb(el)
  newArr.push cb(el)
retrun newArr

Examples:
let result1 = arrowMyMap([100, 25, 81, 64], Math.sqrt);
console.log(result1);   // [ 10, 5, 9, 8 ]

const yell = el => el.toUpperCase() + '!'

let result2 = arrowMyMap(['run', 'Forrest'], yell);
console.log(result2);   // [ 'RUN!', 'FORREST!' ]

***********************************************************************/
// Plan
// decalre a const on a arrow func called arrowMyMap with array and cb as the args
// set a var newArr to an empty arrray
// use forEach on the array arg set the function parma to el
//   place the element into the cb(el)
//   newArr.push cb(el
// your code here!
const arrowMyMap = (arr , cb)=>{
  let newArr = [];
  arr.forEach(function(el){
    newArr.push(cb(el))
  })
  return newArr
}
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowMyMap;
} catch (e) {
  return null;
}
