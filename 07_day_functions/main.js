// Functions without parameter
/*
function square() {
  let num = 2;
  let sq = num * num;
  //   console.log(sq);
}
square();

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  //   console.log(sum);
}

addTwoNumbers();

// function printFullName() {
//     let firstName = 'Yusuf'
//     let lastNAme = 'Dahud'
//     let space = ' '
//     let fullName = firstName + space + lastNAme

//     console.log(fullName)
// }

// printFullName()

// Function returning value
function printFullName() {
  let firstName = "Yusuf";
  let lastNAme = "Dahud";
  let space = " ";
  let fullName = firstName + space + lastNAme;

  return fullName;
}

// console.log(printFullName());

function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  return sum;
}

// console.log(addTwoNumbers());

// Function with a parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

// console.log(areaOfCircle(10));

function square(number) {
  return number * number;
}

// console.log(square(10));

// Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}

// console.log(sumTwoNumbers(10, 20));

function printFullNames(firstName, lastNAme) {
  return `${firstName} ${lastNAme}`;
}

// console.log(printFullNames("Dahud", "Yusuf"));

// Function with many parameters
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5, 9, 0];
console.log(sumArrayValues(numbers));

const areaOfCircle1 = (radius) => {
  let area = Math.PI * radius * radius;
  return area;
};

console.log(areaOfCircle1(10));

// Function with unlimited number of parameters
function sumAllNums() {
  console.log(arguments);
}

sumAllNums(1, 2, 3, 4, 5);

// function declaration
function sumALlNum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumALlNum(1, 2, 3, 4));
console.log(sumALlNum(10, 20, 30, 40));
console.log(sumALlNum(15, 20, 35, 45));

// Unlimited number of parameters in arrow function
const sumAllNums1 = (...args) => {
  let sum = 0;
  for (const element of args) {
    sum += element;
  }
  return sum;
};

console.log(sumAllNums1(1, 2, 3, 4));
console.log(sumAllNums1(10, 20, 30, 40, 50));
console.log(sumAllNums1(15, 20, 30, 25, 10, 33, 40));

// Anonymous Function
const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

// Expression Function
const square1 = function (n) {
  return n * n;
};

console.log(square1(3));

// Self Invoking Functions
(function (n) {
  console.log(n * n);
})(5);

let squaredNum = (function (n) {
  return n * n;
})(10);

console.log(squaredNum);

// Arrow Function
const square2 = (n) => {
  return n * n;
};
console.log(square2(2));

const square3 = (n) => n * n;
console.log(square3(4));

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};

const countries = ["Finland", "Sweden", "Norway", "Denmark", "Iceland"];
console.log(changeToUpperCase(countries));

const printFullName1 = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

console.log(printFullName1("Yusuf", "Dahud"));

const printFullName2 = (firstName, lastName) => `${firstName} ${lastName}`;
console.log(printFullName1("Yusuf", "Dahud"));

function greetings(name = "Yusuf") {
  let message = `${name}, welcome to 30 days of javascript`;
  return message;
}

console.log(greetings());
console.log(greetings("Dahud"));


function generateFullName (firstName = 'Dahud', lastName = 'Yusuf') {
    let message = `${firstName} ${lastName}, welcome to 30 days of javascript`
    return message
}

console.log(generateFullName())
console.log(generateFullName('Ishola', 'Tunji'))


const calculateAge = (birthYear, currentYear = 2022) =>  currentYear - birthYear

console.log('Age: ', calculateAge(1958))

// calculate the bmi
function calculateBmi (weight, height) {
    let bmi = weight / (height ** 2)
    return bmi
}

console.log('Bmi: ', calculateBmi(100, 2))

// weight of object
const weightOfObject = (mass, gravity = 9.81) => mass * gravity + 'N'
    


console.log('Weight of an object in Newton: ', weightOfObject(100))
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))

*/

// Exercise
// Exercises: Level 1
// 1.
function fullNames() {
  console.log("Yusuf");
}
fullNames();

// 2.
const fullName = (firstName, secondName) => firstName + " " + secondName;
// console.log(fullName('Dahud', 'Yusuf'))

function fullNames(firstName, secondName) {
  let names = firstName + " " + secondName;
  return names;
}

// console.log(fullNames('Agbaje', 'Abiola'))

// 3.
function addNumbers(firstNum, secondNum) {
  sum = firstNum + secondNum;
  return sum;
}
console.log(addNumbers(5, 9));

//4.
function areaOfRectangle(length, width) {
  area = length * width;
  return area;
}
console.log(areaOfRectangle(4, 5));

// 5.
function perimeterOfRectangle(length, width) {
  perimeter = 2 * (length + width);
  return perimeter;
}
console.log(perimeterOfRectangle(2, 9));

// 6.
function volumeOfRectPrism(length, width, height) {
  volume = length * width * height;
  return volume;
}
console.log(volumeOfRectPrism(2, 3, 9));

// 7.
function areaOfCircle(pie, radius, radius) {
  area = pie * radius * radius;
  return area;
}
console.log(areaOfCircle(3.142, 5, 5));

// 8.
function circumOfCircle(pie, radius) {
  circumference = 2 * pie * radius;
  return circumference;
}
console.log(circumOfCircle(3.142, 5));

// 9.
function density(mass, volume) {
  den = mass / volume;
  return den;
}

console.log(density(50, 5));

// 10.
function speed(distance, time) {
  speedOfObject = distance / time;
  return speedOfObject;
}

console.log(speed(200, 10));

// 11.
const weight = (mass, gravity) => mass * gravity;
console.log(weight(30, 10));

// 12.
function convertCelsiusToFahrenheit(celsius) {
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
// console.log(convertCelsiusToFahrenheit(10));

// 13.
function BMI(weight, height) {
  bmi = weight / (height * height);
  return bmi;
}
// console.log(BMI(70, 2.5));

// 14.
function checkSeason(month) {
  return (season = "Winter"), "Spring", "Summer";
}

// console.log(checkSeason("Winter", "Spring", "Summer", "Autumn"));

// 15.
function findMax() {}

// JavaScript.info
// Local variable
function showMessage() {
  let message = "Hello, I'm JavaScript";

  alert(message);
}

// showMessage();
// alert(message);

// Outer variables
let userName = "Yusuf";

function showMessage() {
  let message = "Hello, " + userName;
  console.log(message);
}

showMessage();

function showMessages(from, text) {
  from = '*' + from + '*'
  console.log(from + ': ' + text)
}
let from = 'Yusuf'
showMessages(from, 'hello')
console.log(from)