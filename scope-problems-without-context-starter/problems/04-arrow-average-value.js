/***********************************************************************
Write a function using fat arrow syntax, `arrowAvgValue(array)` that takes in an
array of numbers and returns the average number. Assign the below function to a
variable using the const keyword.

Examples:

arrowAvgValue([10, 20]); // => 15
arrowAvgValue([2, 3, 7]); // => 4
arrowAvgValue([100, 60, 64]); // => 74.66666666666667
***********************************************************************/
/*
Understand
declare a with const func in arrow syntax called arrowAvgvalue and takes in an array as the parameter
wants to return the average of the total sum of the array

Plan
const arrowAvgValue with arr as the params
let sum  = declare arr.reduce with acum ,  ele
  acum + el
  return acum

return sum / arr.length
*/
const arrowAvgValue = arr =>{
  let sum = arr.reduce(function( acum , el){
      return acum + el;
      //return acum
  })
console.log(sum)
  return sum/ arr.length
}
// your code here!
console.log(arrowAvgValue([10, 20]))
console.log(arrowAvgValue([2, 3, 7]))
console.log(arrowAvgValue([100, 60, 64]))



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowAvgValue;
} catch (e) {
  return undefined;
}
