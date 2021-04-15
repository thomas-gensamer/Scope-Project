/***********************************************************************
Write a function named `arrowRestSum` that accepts all incoming parameters
and sums them. Assign the below function to a variable using the const keyword.

**Hint**: Use rest parameter syntax!

Examples:
arrowRestSum(3,5,6); // => 14
arrowRestSum(1, 2, 3, 4, 5, 6, 7, 8, 9); // => 14
arrowRestSum(0); // => 0

understand
write an arrow function that take params of ...num
interate through num array using .reduce
return iterated el summed together
***********************************************************************/
// plan
// declare arrow func named arrowRestSum that takes in ...num
// set sum = to 0
// set num.reduce thats take (accum, el)
    // set sum = acuum + el
// return sum

const arrowRestSum = (...num) => {
  let sum = 0;
  num.reduce(function (accum, el) {
    sum = accum + el;
    return sum;
  })
return sum;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowRestSum;
} catch (e) {
  return undefined;
}
