const add = (num1, num2) => num1 + num2;
//const result = add(2, 4);
//console.log(result);
const getFullName = (first, last) => first + ' ' + last;
const fullName = getFullName('zayed', 'opu');
//console.log(fullName);
let number = (a, b) => a * b;
let result = number(12, 12);
//console.log(result);
//no parameter
let pie = () => 3.1416;
let value = pie();
//console.log(value);
//one parameter in arrow function
let doubleIt = (num1) => num1  + 12;
let resultIt = doubleIt(12);
//console.log(resultIt);
//arrow function with multiline
let doMath = (a, b, c) => {
    let firstSum = a +b;
    let secondMultiply = b *c;
    let thirdResult = secondMultiply / 2;
    return thirdResult;
};
let exactResult = doMath(12,15,16);
//console.log(exactResult);
//using Math.max(find max value)
let numbers = Math.max(12,15,76,34);
console.log(numbers);
