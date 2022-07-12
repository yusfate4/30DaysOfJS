// How to create an empty array
// 1. Using Array constructor
/* 
const arr = Array();
console.log(arr);

// 2. Using square brackets([])
const arr1 = [];
console.log(arr1);

// How to create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon']; // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'];
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'];
const countries = ['Finland', 'Nigeria', 'Sweden', 'Norway', 'Iceland'];

console.log('Numbers:', numbers);
console.log('Number of numbers:', numbers.length);

console.log('Fruits:', fruits);
console.log('Number of fruits:', fruits.length);

console.log('Vegetables:', vegetables);
console.log('Number of vegetables:', vegetables.length);

console.log('Animal Products:', animalProducts);
console.log('Number of animal products:', animalProducts.length);

console.log('Web Techs:', webTechs);
console.log('Number of webTechs:', webTechs.length);

console.log('Countries:', countries);
console.log('Number of countries:', countries.length);
*/

// const arr = [
//     'Dahud',
//     250,
//     true,
//     { country: 'Nigeria', city: 'Lagos' },
//     { skills: ['HTML', 'CSS', 'JS', 'Python', 'React']}
// ]

// console.log(arr);

// Creating an array using split
/*
let js = 'javaScript';
const charsInJavaScript = js.split('');

console.log(charsInJavaScript);

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies = companiesString.split(',');

console.log(companies)


let companiesString1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const companies1 = companiesString1.split(', ');

console.log(companies1)

let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ');
console.log(words);


// Accessing an array using index
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let firstFruit = fruits[0];

console.log(firstFruit);

secondFruit = fruits[1];
console.log(secondFruit);

let lastFruit = fruits[3];
console.log(lastFruit);

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex]
console.log(lastFruit);

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];

console.log(numbers.length);
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[5]);

let lastIndex1 = numbers.length - 1;
console.log(numbers[lastIndex1]);


const webTechs1 = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MangoDB'
]

console.log(webTechs1);
console.log(webTechs1.length);
console.log(webTechs1[0]);
console.log(webTechs1[6]);

let lastIndex2 = webTechs1.length - 1;
console.log(webTechs1[lastIndex2]);

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

console.log(countries)
console.log(countries[0])
console.log(countries[10])

let lastIndex3 = countries.length - 1;
console.log(countries[lastIndex3]);

const shoppingCart = [
    'Milk',
    'Mango',
    'Tomato',
    'Potato',
    'Avocado',
    'Meat',
    'Eggs',
    'Sugar'
]

console.log(shoppingCart);
console.log(shoppingCart[0]);
console.log(shoppingCart[7]);

let lastIndex4 = shoppingCart.length - 1;
console.log(shoppingCart[lastIndex4]);

// Modifying array element;
const numbers1 = [1, 2, 3, 4, 5];
numbers1[0] = 10;
numbers1[1] = 20;

console.log(numbers1);

const countries1 = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

countries[0] = 'Afghanistan';
let lastIndex5 = countries.length - 1
countries[lastIndex5] = 'Korea';

console.log(countries);

// Array constructors
const arr = Array();
console.log(arr);

const eightEmptyValues = Array(81);
console.log(eightEmptyValues);

*/

// Creating a static values with fill
/*
const arr = Array();
console.log(arr);

const eightXvalues = Array(10).fill('Boy');
console.log(eightXvalues);

const eight0values = Array(10).fill('0');
console.log(eight0values);

const eight4values = Array(4).fill('4');
console.log(eight4values);
*/

// Concatenating array using concat

/*const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);

console.log(thirdList);

const fruits = ['banana', 'orange', 'mango', 'lemon'];
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'];
const fruitsAndVegetables = fruits.concat(vegetables);

console.log(fruitsAndVegetables);

// Getting array length

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
*/

// Getting index an element in arr array
// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.indexOf(5));
// console.log(numbers.indexOf(0));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(6));


// let us check if a banana exist in the array
/*
const fruits = ['banana', 'orange', 'mango', 'lemon'];
let index = fruits.indexOf('banana');
console.log(index);

if (index === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}

index === -1 ? console.log('This fruit does not exist in the array'): console.log('This fruit does exist in the array');

// let us check if an avocado exist in the array
let indexOfAvocado = fruits.indexOf('avocado');
if (indexOfAvocado === -1) {
    console.log('This fruit does not exist in the array')
} else {
    console.log('This fruit does exist in the array')
}

// Getting last index of an element in array.
const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbers.lastIndexOf(2));
console.log(numbers.lastIndexOf(0));
console.log(numbers.lastIndexOf(1));
console.log(numbers.lastIndexOf(4));
console.log(numbers.lastIndexOf(6));
*/

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(5));
// console.log(numbers.includes(0));
// console.log(numbers.includes(1));
// console.log(numbers.includes(6));

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MangoDB'
// ]

// console.log(webTechs.includes('Node'));
// console.log(webTechs.includes('C'));

// Checking array: Array.isArray: To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers));

// const number = 100;
// console.log(Array.isArray(number));

// Converting array to string
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString())

// const names = ['Dahud', 'Yusuf', 'Ishola', "Olatunji"]
// console.log(names.toString());

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join());

// const names = ['Dahud', 'Yusuf', 'Ishola', "Olatunji"]

// console.log(names.join());
// console.log(names.join(''));
// console.log(names.join(' '));
// console.log(names.join(', '));
// console.log(names.join(' # '));

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MangoDB'
// ]

// console.log(webTechs.join());
// console.log(webTechs.join(' # '));

// slice array elements
// const numbers = [1.2,3,4,5]

// console.log(numbers.slice());
// console.log(numbers.slice(0));
// console.log(numbers.slice(0, numbers.length));
// console.log(numbers.slice(1,3));

// // splice method in array
// const numbers = [1, 2, 3, 4, 5] 
// numbers.splice();
// console.log(numbers)

// const number = [1, 2, 3, 4, 5]
// number.splice(0,1)
// console.log(number);

// const number1 = [1, 2, 3, 4, 5, 6]
// number1.splice(3, 3, 7, 8, 9)
// console.log(number1.splice(3, 3, 7, 8, 9));

// Adding item to an array using push
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item');
// console.log(arr);

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6);
// console.log(numbers)

// numbers.pop();
// console.log(numbers);

// let fruits = ['banana', 'mango', 'lemon']
// fruits.push('apple');
// console.log(fruits);

// fruits.push('lime')
// console.log(fruits);

// Removing the end element using pop
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop()
// console.log(numbers);

// Removing an element from the beginning using Shift method
// const numbers = [1, 2, 3, 4, 5]
// numbers.shift();
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift(0)
// console.log(numbers)


// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse()
// console.log(numbers)

// numbers.reverse();
// console.log(numbers);

// sorting elements in array
// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MangoDB'
// ]

// webTechs.sort()
// console.log(webTechs)

// webTechs.reverse()
// console.log(webTechs)

const firstNums = [1, 2, 3]
const secondsNums = [1, 4, 9]

const arrayOfArray = [[1, 2, 3], [1, 2, 3]]
console.log(arrayOfArray[0])

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MangoDB']
const fullStack = [frontEnd, backEnd]

console.log(fullStack);
console.log(fullStack.length);
console.log(fullStack[0]);
console.log(fullStack[1]);
