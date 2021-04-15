/***********************************************************************
Write a function using fat arrow syntax, `arrowGetFullName(person)` that takes in
a person object and returns a string containing their full name.

Assign the below function to a variable using the const keyword. Using the const
keyword will allow any value assigned to that variable protection from being
reassigned within that scope.

Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
arrowGetFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
arrowGetFullName(p2); // => 'Charlie Brown'

// write a function in fat arrow syntax that take in an object as the argument
// return a string containing their full name
// use const to assign the variable

plan
declare arrow function with object as the arg
declare const that will destructure the objects first name and last name
return fname + " " + lname
***********************************************************************/

let arrowGetFullName = person => {
  const {firstName: fname, lastName: lname} = person;
  return fname + " " + lname;
}

let p1 = {firstName: 'John', lastName: 'Doe'};
console.log(arrowGetFullName(p1)); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
console.log(arrowGetFullName(p2)); // => 'Charlie Brown'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = arrowGetFullName;
} catch (e) {
  return null;
}
