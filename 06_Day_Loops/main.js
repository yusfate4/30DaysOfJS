// for loop
// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// for (let i = 5; i >= 0; i--) {
//     console.log(i)
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }
// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland'];
// const newArr = [];
// for (let i = 0; i< countries.length; i++){
//     newArr.push(countries[i].toUpperCase())
//     console.log(newArr)
// }

// Adding all elements in the array
/* const numbers = [1, 2, 3, 4, 5]
let sum = 10;
for (let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i]
}

console.log(sum)
*/

// Creating a new array based on the existing array
// const numbers = [1, 2, 3, 4, 5]
// const newArr = []
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
//     newArr.push( numbers[i] ** 2)
// }

// console.log(newArr);

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland'];
// const newArr = [];
// for (let i = 0; i < countries.length; i++){
//     newArr.push(countries[i].toUpperCase())
// }

// console.log(newArr)

// while loop
// let i = 0;
// while (i <= 5) {
//     console.log(i)
//     i++
// }

// do while loop
// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i <= 5)

// for of loop
const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//     console.log(num)
// }

// for (const num of numbers) {
//     console.log(num * num)
// }

// adding all the numbers in the array
// let sum = 0;
// for (const num of numbers) {
//     sum += num;
// }
// console.log(sum)

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// for (const tech of webTechs) {
//     console.log(tech.toUpperCase())
// }

// for (const tech of webTechs) {
//     console.log(tech[0])
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// const newArr = []
// for (const country of countries) {
//     newArr.push(country.toUpperCase())
// }
// console.log(newArr)

// break: Break is used to interrupt a loop.
// for (let i = 0; i <= 7; i++) {
//     if(i == 4) {
//         break
//     }
//     console.log(i)
// }

// The above code stops if 3 found in the iteration process.

// continue : We use the keyword continue to skip a certain iterations.
// for (let i = 0; i <= 5; i++) {
//     if (i == 3) {
//         continue
//     }
//     console.log(i)
// }

// Exercises: Level 1
// 1: Iterate 0 to 10 using for loop, do the same using while and do while loop
// for (i = 0; i<= 10; i++) {
//     console.log(i)
// }

// for loop
// let i = 0;
// while (i <= 10) {
//     console.log(i)
//     i++
// }

// do while loop
// let i = 0;
// do {
//     console.log(i)
//     i++
// }   while (i <= 10)

// 2: Iterate 10 to 0 using for loop, do the same using while and do while loop
// for (i = 10; i >= 0; i--){
//     console.log(i)
// }

// while loop
// let i = 10;
// while (i >= 0) {
//     console.log(i)
//     i--
// }

// 3: Iterate 0 to n using for loop
// let n = 10;
// for (i = 0; i <= n; i++) {
//     console.log(i)
// }

// 4: Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

//let num = 6;
// let arr = '';
// for (let i = 0; i <= num; i++) {
//     arr += '#'

//     console.log(arr)
// }

// let a = '';
// for (let i = 0; i <= 7; i++) {
//     a += '#'
//     console.log(a)
// }

// 5: Use loop to print the following pattern:
// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

// for (let i = 0; i<= 10; i++) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// 6: Using loop print the following pattern
// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000

// for (let i = -1; i <= 10; i++) {
//     if (i === -1) {
// console.log(`i    i^2    i^3`)
//     }
//     else   {
//          console.log(`${i}    ${i ** 2}     ${i ** 3}`)
//     }
// }

// 7. Use for loop to iterate from 0 to 100 and print only even numbers

// for(i = 0; i <= 100; i++){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }

// 8: Use for loop to iterate from 0 to 100 and print only odd number

// for (i = 0; i <= 100; i++){
//     if (i % 2) {
//         console.log(i)
//     }
// }

//9: Use for loop to iterate from 0 to 100 and print only prime numbers

// var total = 0;
// for (var num = 1; num < 11; num++){
//     total = total + num;
// }

// console.log("The total is: " + total)

// var fruits = ['mango', 'banana', 'apple']

// for (var i = 0; i<fruits.length; i++) {
//     console.log(fruits[i])
// }

// for (var num = 0; num <= 100; num++) {
//     var notPrime = false;
//     for (var i = 2; i < num; i++){
//         if (num % i === 0 && i !== num) {
//             notPrime = true;
//         }
//     }
//     if (notPrime === false) {
//         console.log(num)
//     }
// }

//10: Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// var sum = 0;
// for (i = 0; i <= 100; i++){
//     sum = sum + i;

// }
// console.log(`The sum of all numbers from 0 to 100 is ${sum}.`)

// 11: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// var sum = 0;
// var sum1 = 0;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   } else if (i % 2) {
//     sum1 += i;
//   }
// }
// console.log(
//   `The sum of all evens from 0 to 100 is ${sum}. And the sum of all odds from 0 to 100 is ${sum1}.`
// );

// 12: Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
/*
var sum = 0;
var sum1 = 0;
let arr = [];
for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sum += i;
  } else if (i % 2) {
    sum1 += i;
  }
}
arr.push(sum);
arr.push(sum1);
console.log(arr);
*/

// for loop that goes from top to bottom
// var total = 0;
// for (var num = 100; num >= 0; num--) {
//   total += num;
// }

// console.log(total)


// while loop
// var num = 0;

// while (num <= 10) {
//   console.log(num)
//   num++
// }

// var sum = 0;
// var num = 0;

// while (num < 10){
//   sum += num;
//   num++
// }
 

// var randomStuff = ['apple', 3.2414, 999, true, false, undefined, ['apple', 'ball', 'cat'],3, 2, "lastobject"]

// var x = randomStuff.length - 1;

// while (x < randomStuff.length) {
//   console.log(randomStuff[x])
//   x++
// }

// while (x >= 0) {
//     console.log(randomStuff[x])
//     x--
//   }
// 13: Develop a small script which generate array of 5 random numbers
// let arr = []
// for (num = 0; num <= 6; num++){
//   if ( num = Math.floor(Math.random() * 10) + 1)
//   num++
// }

// arr.push(num)
// console.log(`${arr}, ${arr}, ${arr}`)

// var arr = [];
// while(arr.length < 5){
//     var r = Math.floor(Math.random() * 100) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);

// 14: Develop a small script which generate array of 5 random numbers and the numbers must be unique

// 15. Develop a small script which generate a six characters random id:

// let array = "qawsedrjjfhhgjjejnnchhutitjuhhh QWERTYIIIJFKLSMNBNVNN##&*$$**@(($&$*($&&%&%**$(($(?><>ieje.".split("")
// // console.log(array)
// function generator (passwordLength) {
//   let password = ""
// for (i = 0; i < passwordLength; i++){
//   let randomnumber = Math.floor(Math.random() * array.length
//   )
//   password += array[randomnumber]
// }
// return password
// }
// console.log(generator(8))



// const number = [1, 2, 3, 4, 5]
// const newArr = []
// let sum = 0
// for (let i = 0; i< numbers.length; i++){
//   newArr.push(number[i] ** 2)
// }

// console.log(newArr)


// let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }


// let i = 0
// do {
//   console.log(i)
//   i++
// } while (i <= 5)

// Develop a small script which generate any number of characters random id:
  // fe3jo1gl124g
  // xkqci4utda1lmbelpkm03rba

// let num1 = Math.floor(Math.random() * 718)
// console.log(num1)

// let num2 = 

/*
// 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript'
console.log(challenge)
console.log(challenge.length)

// challenge =  challenge.toUpperCase()
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())


// challenge = challenge.substring(3)
// console.log(challenge)
// console.log(challenge.substring(0, 2))
// challenge = challenge.includes('Script')
// console.log(challenge)

// console.log(challenge.split(' '))
// console.log(challenge.split(''))

// let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' 
// console.log(companies.split(', '))
// challenge = challenge.replace('JavaScript','Python')
// console.log(challenge)

// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt(11))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

let word = 'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'))
console.log(word.lastIndexOf('because'))
console.log(word.search('because'))

*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];


// Exercise: Level 2
let arr1 = []
// No 4: Using the above countries array, create the following new array.
for (let i = 0; i < countries.length; i++){
  arr1.push(countries[i])
}  

// console.log(arr1)
 

// 5: Using the above countries array, create an array for countries length'
// console.log(countries[0].length)
/*let arr = []
for (let i = 0; i < countries.length; i++){
  arr.push(countries[i].length)
}*/
// console.log(arr)

// 6: Use the countries array to create the following array of arrays:
/*
let arr2 = []
let arr3 = []
let arr4 = []
for (let i = 0; i < countries.length; i++) {
  arr2.push(countries[i])
  arr3.push(countries[i].slice(0, 3))
  arr4.push(countries[i].length)

}
for (let i = 0; i < countries.length; i++) {
let newArr = arr2[i] + "', '" + arr3[i]  + "', '" + arr4[i] 

console.log(`['${newArr}'],`)
  
}
*/
// 7: In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.



// let index = countries.indexOf('land')  // 0
// console.log(countries.find('land'))
// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }

const myString = "hello world!"
if(myString.includes("hello")){
  // do something 
  console.log("hello")
}else{
  //also do something
}

if(countries.includes("land")) {
  console.log(countries.includes("land"))
} else {
  console.log(countries)
}

console.log(countries.includes('land'))

