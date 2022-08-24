// Functions without parameter
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}
square();


function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    console.log(sum)
}

addTwoNumbers()

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
    let firstName = 'Yusuf'
    let lastNAme = 'Dahud'
    let space = ' '
    let fullName = firstName + space + lastNAme

    return fullName
}

console.log(printFullName())


function addTwoNumbers(){
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo

    return sum
}

console.log(addTwoNumbers())


// Function with a parameter
function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}

console.log(areaOfCircle(10))

function square(number){
    return number * number
}

console.log(square(10))

// Function with two parameters
function sumTwoNumbers(numOne, numTwo) {
    let sum = numOne + numTwo
    return sum
}

console.log(sumTwoNumbers(10, 20))