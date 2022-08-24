// let numOne = 4;
// let numTwo = 3;
// let sum = numOne + numTwo;
// let diff = numOne - numTwo;
// let div = numOne / numTwo;
// let mult = numOne * numTwo;
// let remainder = numOne % numTwo;
// let powerOf = numOne ** numTwo;

// console.log(sum, diff, mult, div, remainder, powerOf);

// const PI = 3.14;
// let radius = 100;

// // Calculate area of a circle
// const areaOfCircle = PI * radius * radius;
// console.log(areaOfCircle);


// const gravity = 9.81;
// let mass = 72;

// // calculate weight of an object
// const weight = mass * gravity;
// console.log(weight);

// const boilingPoint = 100;
// const bodyTemp = 37;

// console.log(`The boiling point of water is ${boilingPoint} oC. \nHuman body temperature is ${bodyTemp} oC. \nThe gravity of earth is ${gravity} m / s2.`);

// // Example of Comparison Operators.
// console.log(3 > 2);
// console.log(3 >= 2);
// console.log(3 < 2);
// console.log(2 < 3);
// console.log(2 <= 3);
// console.log(3 == 2);
// console.log(3 != 2);
// console.log(3 == '3');
// console.log(3 === '3');
// console.log(3 !== '3');
// console.log(3 != 3);
// console.log(3 !== 3);
// console.log(0 == false);
// console.log(0 === false);
// console.log(0 == '');
// console.log(0 == ' ');
// console.log(0 === '');
// console.log(1 == true);
// console.log(1 === true);
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(NaN == NaN);
// console.log(NaN === NaN);
// console.log(typeof NaN);

// console.log('mango'.length == 'avocado'.length);
// console.log('mango'.length != 'avocado'.length);
// console.log('mango'.length < 'avocado'.length);
// console.log('milk'.length == 'meat'.length);
// console.log('milk'.length != 'meat'.length);
// console.log('tomato'.length == 'potato'.length);
// console.log('python'.length == 'dragon'.length);

// && ampersand operator example

// const check = 4 > 3 && 10 > 5;
// const check1 = 4 > 3 && 10 < 5;
// const check2 = 4 < 3 && 10 < 5;
// console.log(check, check1, check2);

// || pope operator example

// const check3 = 4 > 3 || 10 > 5;
// const check4 = 4 > 3 || 10 < 5;
// const check5 = 4 < 3 || 10 < 5;
// console.log(check3, check4, check5);

// Negation examples

// let check6 = 4 > 3;
// let check7 = !(4 > 3);
// let isLightOn = true;
// let isLightOff = !isLightOn;
// let isMarried = !false;

// console.log(check6, check7, isLightOn, isLightOff, isMarried);

// Increment operator
// 1. pre-increment
// let count = 5;
// console.log(++count);
// console.log(count);

// // 2. post-increment
// let count1 = 2;
// console.log(count1++);
// console.log(count1);

// let isRaining = true;
// isRaining
//     ? console.log('You need a rain coat')
//     : console.log('No need for a rain coat.');
// isRaining = false;

// isRaining
//     ? console.log('You need a rain coat.')
//     : console.log('No need for a rain coat');

// let number = prompt('Enter number', 'number goes here')
// console.log(number);

// Windown confirm() method;
// const agree = confirm('Are you sure you like to delete? ')
// console.log(agree)

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getSeconds());
// console.log(now.getTime());

// const allSeconds = Date.now();
// console.log(allSeconds)

// const now = new Date();
// const year = now.getFullYear();
// const month = now.getMonth();
// const date = now.getDate();
// const hour = now.getHours();
// const minutes = now.getMinutes();

// console.log(`${date}/${month}/${year} ${hour}:${minutes}`);

// Exercises: Level 1
// let firstName = 'Yusuf';
// let lastName = 'Dahud';
// let country = 'Nigeria';
// let city = 'Lagos';
// let age = 200;
// let isMarried = true;
// let year = 2022;

// console.log(typeof(firstName));
// console.log(typeof(lastName));
// console.log(typeof(country));
// console.log(typeof(city));
// console.log(typeof(age));
// console.log(typeof(isMarried));
// console.log(typeof(year));

// console.log('10' == 10);
// console.log(parseInt('9.8') == 10);

// console.log(3 > 2);
// console.log('10' == 10);
// console.log(20 >= 10);

// console.log(100 == 10);
// console.log();
// console.log('' !== 20);


// console.log(4 > 3);
// console.log(4 >= 3);
// console.log(4 < 3);
// console.log(4 <= 3);
// console.log(4 == 4);
// console.log(4 === 4);
// console.log(4 != 4);
// console.log(4 !== 4);
// console.log(4 != '4');
// console.log(4 == '4');
// console.log(4 === '4');
// console.log('python'.length !== 'jargon'.length);

// T, F, T, T, F, T, T,  F, T,T, F

// console.log(4 > 3 && 10 < 12);
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))

// const now = new Date();
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getMinutes());
// console.log(now.getTime());

// Exercises: Level 2
// Area of a triangle
// var base = prompt('Enter the base number'); 
// var heaight = prompt('Enter the height number');
// var area = 0.5 * base * heaight;
// alert(`The area of the triangle is ${area} m2`);

// Perimeter of a triangle
// var sideA = prompt('Enter side a');
// var sideB = prompt('Enter side b');
// var sideC = prompt('Enter side c');
// let perimeter = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);

// alert(`The perimeter of the triangle is ${perimeter}`)

// Area of  rectangle
// let length = prompt('Enter the length');
// let width = prompt('Enter the width');
// let area = parseFloat(length) * parseFloat(width);
// let perimeter = 2 * (parseFloat(length) + parseFloat(width));
// alert(`The area of the rectangle is: ${area}`);
// alert(`The area of the rectangle is: ${perimeter}`);

// Radius of a circle
// let radius = prompt('Enter your radius value ');
// const PI = 3.14;
// let area = parseFloat(PI) * parseFloat(radius) * parseFloat(radius);
// let circumference = 2 *  parseFloat(PI) * parseFloat(radius);
// alert(`The area of the circle is: ${area}`);
// alert(`The circumference of the circle is: ${circumference}`);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// var x = prompt("ENter the value of x");
// // var y = prompt("ENter the value of y");
// let m = 2;
// let c = -2
// let y = m * x + c; 
// alert(`The value of y is: ${y}`)

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 = 2;
// let y1 = 2;
// let x2 = 6;
// let y2 = 10;
// let m = (y2 - y1) / (x2 - x1);
// console.log(`The value of the slope is: ${m}`)

// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// var x = prompt('Enter the value of x');
// var y = (x * x) + (6 * x) + 9;
// alert(`The value of y is: ${y}`)

// Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hours = prompt('Enter the number of hours');
// let rate = prompt('Enter the rate per hour');
// let pay = hours * rate;
// alert(`Your weekly earning is: ${pay}`);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
// var name = prompt('Enter your name');
// if (name.length > 7) {
//     alert('your name is long')
// } 
// else {
//     alert('your name is short')
// };

// Compare your first name length and your family name length and you should get this output.
// let firstName = 'Asabeneh'
// let lastName = 'Yetayeh'
// if (firstName.length > lastName.length) {
//     console.log('Your first name, Asabeneh is longer than your family name, Yetayeh')
// } 
// else {
//     console.log('Nothing')
// }

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// var myAge = 250;
// var yourAge = 25;
// var age = myAge - yourAge;
// console.log(`I am ${age} older tha you.`);

// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let birthYear = prompt('Enter birth year: ');
// let currentYear = 2022;
// let age = currentYear - birthYear;
// if (age > 15) {
//     alert(`You are ${age}. You are old enough to drive`)
// } 
// else {
//     alert(`You are ${age}. You will be allowed to drive after 3 years.`)
// }

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let year = prompt('Enter the number of years you live');
// let now = new Date();
// let second = now.getTime();
// let live = second * year;
// alert(`You lived ${live} seconds.`)

// Create a human readable time format using the Date time object

// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let day = now.getDay();
// let hour = now.getHours();
// let min = now.getMinutes();

// console.log(`${year}-${month}-${day} ${hour}:${min}AM`);
// console.log(`${day}-${month}-${year} ${hour}:${min}AM`);
// console.log(`${day}/${month}/${year} ${hour}:${min}AM`);


// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
// YYY-MM-DD HH:mm eg. 20120-01-02 07:05

// let now = new Date();
// let year = now.getFullYear();
// let month = now.getMonth();
// let day = now.getDay();
// let hour = now.getHours();
// let min = now.getMinutes();

// console.log(`${year}-0${month}-0${day} 0${hour}:${min}AM`);



// Revision
// 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = 'Yusuf'
let lastName = 'Dahud'
let country = 'Nigeria'
let city = 'Lagos'
let age = ' 23'
let isMarried = true
let year = 2022

// console.log(typeof(firstName))
// console.log(typeof(lastName))
// console.log(typeof(country))
// console.log(typeof(city))
// console.log(typeof(age))
// console.log(typeof(isMarried))
// console.log(typeof(year))

// 2: Check if type of '10' is equal to 10
console.log(typeof('10'))
console.log(typeof(10))

// 3: Check if parseInt('9.8') is equal to 10
console.log(4 != '4')

// Level
// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let base = prompt("Enter the base")
// let height = prompt("Enter the height")

// let area = 0.5 * base * height

// alert(`The area of the triangle is ${area} m2`)


// 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
// let sideA = parseFloat(prompt('ENter side A'))
// let sideB = parseFloat(prompt("ENter side b"))
// let sideC = parseFloat(prompt("ENter side c"))

// let perimeter = sideA + sideB + sideC

// alert(`The perimeter of the triangle is ${perimeter}`)

// 6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let y1 = 2
// let x1 = 2
// let y2 = 10
// let x2 = 6

// let m2 = (y2 - y1) / (x2 - x1)
// console.log(m2)

// 8: Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = parseInt(prompt("Enter any number for x"))
// let y = (x**2) + (6 * x) + 9
// alert(`The value of y is: ${y}`)

// 9: If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = prompt("Enter your name")
// let nameLength = name.length
// if (nameLength > 7){
//     console.log(`${name} is long`)
// } else {
//     console.log(`${name} is short`)
// }

let myAge = 250
let yourAge = 25
console.log(`I am ${myAge - yourAge} older than you `)

// 13: Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let birth = parseInt(prompt("Enter your birth year"))
const now = new Date().getFullYear()
let letAge = now - birth
if (letAge >= 18){
    alert(`You are ${letAge}. You are old enough to drive`)
} else {
    alert(`You are ${letAge}. You will be allowed to drive after ${18 - letAge} years.`)
}

// 14; Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let years = parseInt(prompt("Enter number of years you live: "))

