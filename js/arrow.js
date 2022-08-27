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
  name: "hilsha",
  address: "chandpur",
  color: "silver",
  phone: "01681310294",
};
//object property name and variable name same than access object property value.called destructuring.
//left side use {variable name} = object
let { name, address, color } = fish;
//console.log(name, address, color);

//-------------array destructuring-------------
let [first, second, third] = [12, 13, 15, 16];
//console.log(first,second,third);

//------------array-string-destructurig-------------
let nayoks = ["opu", "tipu", "rony"];
let [firsts, seconds, thirds] = nayoks;
//console.log(firsts);
//---------function-destruturing----------
function getNames() {
  return ["halim", "dalim"];
}
const numberss = [10, 20, 30, 40, 50, 60, 70];
const bigNumber = Math.max(...numberss);
//console.log(bigNumber);
// milestone -6-module-30-practice-problem
/*Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */
let multifly = (a, b, c) => a * b * c;
let results = multifly(2, 2, 2);
//console.log(results);

//---multiline-use-backtick(`)
let rsult = `i am web developer.
i love to code.
i love to eat biriyani.
`;
//console.log(rsult);
//------------arrowfunction using default parameter
let adds = (a, b = 0) => a + b;
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
let users = [{ name: "abul", id: 1, job: "developer" }];
console.log(users[0].id);
//another----
let data = {
  count: 300,
  data: [
    { id: 1, name: "mofiz", job: "programmer" },
    { id: 2, name: "opu", job: "developer" },
  ],
};
//console.log(data . data[1].name);

//?-optional-chaining(kono value te data na thakle ? use korle shta r samne jabe na)
let arNumbers = [2, 3, 4, 5];
function arrNumbers(numbers) {
  let newNumbers = [];
  for (let number of arNumbers) {
    let Numbers = doublesIt(number);
    newNumbers.push(Numbers);
  }
  return newNumbers;
}
let doublesIt = (num) => num * 2;
let makeDouble = arNumbers.map(doublesIt);
let multiNumbers = arrNumbers(arNumbers);
//console.log(multiNumbers);
//console.log(makeDouble);

/* function multiflyByTwo(number)
{
  return number * 2;
} */
//--------------------map use in array----------------
let fiveTimes = [2, 4, 6, 8].map((x) => x * 5);
console.log(fiveTimes);
//use map array element divide by 2 then result
let arraNumbers = [2, 4, 6, 7];
let divideByTwo = arraNumbers.map((n) => n / 2);
console.log(divideByTwo);
//----------use map and get first character in array element--------
let boys = ["opu", "tipu", "rony", "sazzed"];
let firstLetter = boys.map((boy) => boy[0]);
console.log(firstLetter);
//---------------array length using map----------------
let baloks = ["opu", "tipu", "rony", "sazzed"];
let boyLength = baloks.map((balok) => balok.length);
console.log(boyLength);
//find specific name from product list
let products = [
  { id: 1, name: "laptop", price: 12780 },
  { id: 2, name: "mobile", price: 33400 },
  { id: 3, name: "radio", price: 14000 },
  { id: 4, name: "Walton", price: 16000 },
];
let items = products.map((product) => product.name);
console.log(items);
//-------use foreach(no return-thats why no variable)------------
let balikas = ["opu", "tipus", "rony", "sazzed"];
balikas.forEach((balika) => console.log(balika));
let prods = [
  { id: 1, name: "laptop", price: 12780 },
  { id: 2, name: "mobiles", price: 33400 },
  { id: 3, name: "radio", price: 14000 },
  { id: 4, name: "Walton", price: 16000 },
];
prods.forEach((prod) => console.log(prod));

//--------------------------use filter for condition--------
let filterNumbs = [10, 20, 30, 40];
let takeBig = filterNumbs.filter((num) => num > 20);
console.log(takeBig);

//-------------use filter take even number from array----------
let filtNumber = [10, 30, 45, 56, 67];
let evenNumber = filtNumber.filter((enumber) => enumber % 2 == 0);
console.log(evenNumber);
//-------------use filter take condition match product from array------
let pro = [
  { id: 1, name: "laptop", price: 12780 },
  { id: 2, name: "mobiles", price: 33400 },
  { id: 3, name: "radio", price: 14000 },
  { id: 4, name: "Walton", price: 16000 },
];
let matchProd = pro.filter((prod) => prod.price > 20000);
console.log(matchProd);

//-------------use (find) return only matching first value----------
let findNumbers = [12, 16, 15, 20, 34, 25];
let findNum = findNumbers.find((num) => num % 5 == 0);
console.log(findNum);
//output : 15.

//-----------------use (reduce) structure:(accumulator function, initial value) again accumulator function has two parameter----------------
let reduNumber = [1, 2, 3, 4, 5];
let total = reduNumber.reduce((previous, current) => previous + current, 0);
console.log(total);

//--------------use .notation see specific value-------------------
let student = {
  name: "opu",
  age: 23,
  class: "ten",
  marks: {
    bangla: 490,
    math: 56,
    english: 20,
  },
};
let singleMark = student.marks.math;
console.log(singleMark);

//use---[]-----for specific value----------
let english = student["marks"]["english"];
console.log(english);
//property name assign a variable
let subjectName = "bangla";
let subjectMark = student.marks[subjectName];
console.log(subjectMark);

//--------------class--------------
/* class Instructor{
  name;
  address;
  //name set korar jonno constructor dite hoi-eta keyword
  constructor(name, address)
  {
    this.name = name;
    this.address = address;
  }
  designation = 'web course instructor';
  team = 'web team';
  //method
  startSupportSession(time)
  {
    console.log(`start support session at ${time}`);
  }
  //method
  creatQuiz(module)
  {
    console.log(`please create quiz for module ${module}`);
  }
}
let opu = new Instructor('opu','uttara');
console.log(opu);
opu.startSupportSession('4 pm');
opu.creatQuiz(30);
const dipu = new Instructor('dipu','lakshmipur');
console.log(dipu); */

//------------class---------
//---------------------COMMON CLASS-----------
//parent
class TeamMember {
  name;
  address;
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}
//(extends) use korle common class er property gula access pabe but name pabe na
class Instructor extends TeamMember {
  //name set korar jonno constructor dite hoi-eta keyword

  constructor(name, address) {
    super(name, address); //parent er constructor k call krte super dite hoi
  }
  designation = "web course instructor";
  team = "web team";
  //method
  startSupportSession(time) {
    console.log(`start support session at ${time}`);
  }
  //method
  creatQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
  provideFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Developer extends TeamMember {
  tech;
  //name set korar jonno constructor dite hoi-eta keyword
  constructor(name, address, tech) {
    super(name, address);
    this.tech = tech;
  }
  designation = "web course instructor";
  team = "web team";
  //method
  developFeature(feature) {
    console.log(`please develop ${feature}`);
  }
  //method
  release(version) {
    console.log(`please create quiz for module ${version}`);
  }
}
const alia = new Developer("alia", "india", "react");
alia.provideFeedback();
console.log(alia);

class Jobplacement extends TeamMember {
  designation = "job placement commanos";
  team = "job placement";
  region;
  //name set korar jonno constructor dite hoi-eta keyword
  constructor(name, address, region) {
    super(name, address);
    this.region = region;
  }

  //method
  provideResume(feature) {
    console.log(`please develop ${feature}`);
  }
  //method
  prepareStudent(version) {
    console.log(`please create quiz for module ${version}`);
  }
}
const popy = new Jobplacement("popy", "dhaka", "australlia");
popy.provideFeedback();
console.log(popy);
//-------------
//--------------milestone-6-module-32-start( Intro to JSON, JSON Structure, parse, stringify)
let user = { id: 1, name: "opu", class: "hons", age: 23 };
let stringified = JSON.stringify(user);
console.log(stringified);
//-------------STRUCTURE 0F (FETCH)--------------
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
//--------------fetch-using- function------------
function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
//----------another fetch example with json------
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function displayUsers(userData) {
  console.log(userData);
}
//------------continue feth example------------
/* fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data =>loadUser2(data)) */

function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUser2(data));
}
function displayUser2(userData)
{
  for(let user of userData)
console.log(user.name);
}
