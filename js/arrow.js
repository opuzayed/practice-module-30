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
//console.log(results);

//---multiline-use-backtick(`)
let rsult = `i am web developer.
i love to code.
i love to eat biriyani.
`
//console.log(rsult);
//------------arrowfunction using default parameter
let adds = (a, b=0) => a + b;
let rasult = adds(3);
//console.log(rasult);
/* Write an arrow function where it will do the following:
 
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result 
*/

 /* let friendsName = ['tipu','faijul','molla','sazzed'];
let friends = friend => {
  let evenFriend = []; 
for(let i=0; i < friend.length; i++)
{
  let takeFriend =friend[i];
  //console.log(takeFriend);

  if(takeFriend.length % 2 != 0){
    evenFriend.push(takeFriend);
  }
}
return evenFriend;
}; 
  let arrayresult = friends(friendsName);
  console.log(arrayresult); */
 

/*Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements */

/* let arrNumbers = [2,2,2,2];
let arrowNumbers = arrnum => {
  let sum=0;
  for(let i=0;i<arrnum.length;i++)
  {
    let takeNumber = arrnum[i] * arrnum[i];
    sum = sum + takeNumber;
  }
   //sum = sum + takeNumber;
  let average = sum/4;
  return average;
}
let totalAverage = arrowNumbers(arrNumbers);
console.log(totalAverage);  */

//Write an arrow function where it will do the following:
/* a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result */
/* let array1 = [1,2,3,4];
let array2 = [5,6,7,8];
let takeArray = (arr1, arr2) => {
  let newArray = [...arr1, ...arr2];
  let arrMax = Math.max(...newArray);
  return arrMax;
}
let allresult = takeArray(array1,array2);
console.log(allresult); */

//-----------milestone-6-module-31- start------------
let users = [{name : 'abul', id : 1, job : 'developer'}];
console.log(users[0].id);
//another----
let data = {
  count : 300,
  data : [
    {id : 1, name : 'mofiz', job : 'programmer'},
    {id : 2, name : 'opu', job : 'developer'}
  ],

};
//console.log(data . data[1].name);

//?-optional-chaining(kono value te data na thakle ? use korle shta r samne jabe na)

let arNumbers = [2,3,4,5];
let newNumbers = [];
for(let number of arNumbers)
{
  let Numbers = number * 2;
  newNumbers.push(Numbers);
}
console.log(newNumbers);

 


