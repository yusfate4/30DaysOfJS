// Conditional statements.
// let num = 3;
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// }

// let isRaining = true;
// if (isRaining) {
//     console.log(`Remeber to take your rain coat`)
// } 


// let num = 3;
// if (num > 0) {
//     console.log(`${num} is a positive number`)
// } else {
//     console.log(`${num} is a negative number`)
// }


// let num1 = -3;
// if (num > 0) {
//     console.log(`${num1} is a positive number`)
// } else {
//     console.log(`${num1} is a negative number`)
// }

// if else if else
// let a = 0;
// if (a > 0) {
//     console.log(`${a} is a positive number`)
// } else if (a < 0) {
//     console.log(`${a} is a negative number`)
// } else if (a == 0) {
//     console.log(`${a} is a zero`)
// } else {
//     console.log(`${a} is not a number`)
// }
// // if else if else
// let weather = 'sunny';
// if (weather === 'rainny') {
//     console.log('It might be cold, you need a jacket')
// } else if (weather === 'sunny') {
//     console.log('Go out freely')
// } else {
//     console.log('No need for rain coat.')
// }


// Switch: The switch statement starts with a switch keyword followed by a parenthesis and code block. Inside the code block we will have different cases.
/* let weather = 'rainy';
switch (weather) {
    case 'rainy':
        console.log('You need a rain coat')
        break
    case 'cloudy':
        console.log('It might be cold, you need a jacket.')
        break
    case 'sunny':
        console.log('Go out freely.')
        break
    default:
        console.log('No need for rain coat.')
}

let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLocaleLowerCase()

switch (day) {
    case 'monday':
        console.log('Today is Monday')
        break
    case 'tuesday':
        console.log('Today is Tueday')
        break
    case 'wednesday':
        console.log('Today is Wednesday')
        break
    case 'thursday':
        console.log('Today is Thursday')
        break
    case 'friday':
        console.log('Today is Friday')
        break
    case 'saturdayday':
        console.log('Today is Saturday')
        break
    case 'sunday':
        console.log('Today is Sunday')
        break
    default:
        console.log('It is not a week day.')
}
*/


/* 
let num = prompt('ENter number');
switch (true) {
    case num > 0:
    console.log('Number is positive');
    break;
    case num == 0:
    console.log('Number is zero');
    break;
    case num < 0:
    console.log('Number is negative');
    break;
    default:
        console.log('Entered value was not a number');

}
*/

// Ternary operators
// let isRaining = false
// isRaining 
//     ? console.log('You need a rain coat.')
//     : console.log('No need for a rain coat.')

// Exercises: Level 1
// let user = prompt('Enter your age.');
// userAge = 18;
// newAge = userAge - user
// if (user > 18)
// {
//     console.log('You are old enough enough to drive.')
// } 
// else {
//     console.log(`You are left with ${newAge} years to drive.`)
// }
    
// Exercise 2:
// let myAge = 18;
// let yourAge = 30;
// let age = prompt('Enter your age: ')
// if (myAge == yourAge) {

//     console.log(`You are ${} years older than me.`)
// } else {
//     console.log('Error')
// }

// Exercise 3
// let a = 4;
// let b = 3;
// if (a > b) {
//     console.log('a is greater than b')
// }
// else {
//     console.log('a is less than b')
// }

// let isAgreater = false;
// isAgreater
//     ? console.log('a is greater than b')
//     : console.log('a is less than b')

// Exercise 4.
// let num = prompt('Enter a number: ')
// if (num % 2) {
//     console.log(`${num} is an even number`)
// }
// else {
//     console.log(`${num} is an odd number`)
// }

// Exercises: Level 2
let x = prompt('Enter your grade ')
if (x >= 80  <= 100){
    console.log('A')
} 
else if(70 >= x <= 89) {
    console.log('B')
}
else if(x >= 60 <= 69){
    console.log('C')
} 
else if (x >= 50 <= 59) {
    console.log('D')
}
else if (x >= 0 <= 49) {
    console.log('F')
}
else {
    console.log()
}