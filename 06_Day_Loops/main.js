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
const numbers = [1, 2, 3, 4, 5]
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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
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

// Use for loop to iterate from 0 to 100 and print only prime numbers

for (i = 2; i <= 100; i++) {
    if (100 % i === 0) {
        console.log(i)
    }
}















