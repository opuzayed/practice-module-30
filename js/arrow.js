const add = (num1, num2) => num1 + num2;
//const result = add(2, 4);
//console.log(result);
const getFullName = (first, last) => first + " " + last;
const fullName = getFullName("zayed", "opu");
//console.log(fullName);
let number = (a, b) => a * b;
let result = number(12, 12);
//console.log(result);
//no parameter
let pie = () => 3.1416;
let value = pie();
//console.log(value);
//one parameter in arrow function
let doubleIt = (num1) => num1 + 12;
let resultIt = doubleIt(12);
//console.log(resultIt);
//arrow function with multiline
let doMath = (a, b, c) => {
  let firstSum = a + b;
  let secondMultiply = b * c;
  let thirdResult = secondMultiply / 2;
  return thirdResult;
};
let exactResult = doMath(12, 15, 16);
//console.log(exactResult);
//using Math.max(find max value)
let numbers = Math.max(12, 15, 76, 34);
//console.log(numbers);

//-------spread-operator(use ...)
let largest = [12, 15, 17, 29];
let largestValue = Math.max(...largest);
//console.log(largestValue);
//console.log(...largest);
//-----------make a new array using existing array by spread operator(...)----
let largest1 = [...largest];
largest.push(341);
largest1.push(231);
let largest2 = [23, 45, 45, ...largest, 23, 34];
//console.log(largest);
//console.log(largest1);
//console.log(largest2);

//-----object(destructuring)------
let fish = {
  name : 'hilsha',
  address : 'chandpur',
  color : 'silver',
  phone : '01681310294'
};
//object property name and variable name same than access object property value.called destructuring.
//left side use {variable name} = object
let {name, address, color} = fish;
//console.log(name, address, color);

//-------------array destructuring-------------
let [first, second, third] = [12, 13, 15, 16];
//console.log(first,second,third);

//------------array-string-destructurig-------------
let nayoks = ['opu','tipu','rony'];
let [firsts, seconds, thirds]= nayoks;
//console.log(firsts);
//---------function-destruturing----------
function getNames()
{
  return ['halim','dalim'];
}
const numberss=[10,20,30,40,50,60,70 ];
const bigNumber = Math.max(...numberss);
//console.log(bigNumber);
// milestone -6-module-30-practice-problem
/*Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */
let multifly = (a,b,c) => a*b*c
let results = multifly(2,2,2);
console.log(results);

