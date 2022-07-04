
// Random Number Generator
/*
let randomNum = Math.random();
let numBtnZeroAndTen = randomNum * 11;
console.log(numBtnZeroAndTen);

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)

console.log(`The sum of 2 and 3 is 5`)              // statically writing the data
let a = 2
let b = 3
console.log(`The sum of ${a} and ${b} is ${a + b}`)

*/

// Strings
/*
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

alert(paragraph)

*/

// Escape Sequences in Strings:
/*
console.log('I hope everyone is enjoying the 30 days of JavaScript challenge. \nDO you ?');
console.log('Days\topics\tExercise\nMonths\tYears\tCentury')
console.log('Day 1\t3\t5');
console.log('Day 2\t3\t5');
console.log('Day 3\t3\t5');
console.log('Day 4\t3\t5');
console.log('This is a backslash symbol (\\)');
console.log('In every programming language it starts with \"Hello, World!\"');
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020');
*/

// Template Literals (Template Strings)
// Example 1
/*
console.log(`The sum of 2 and 3 is 5`);
console.log('The sum of 2 and 3 is 5');
let a = 2;
let b = 3;
console.log(`The sum of ${a} and ${b} is ${a + b}`);
// Example 2
let firstName = `Dahud`;
let lastName = `Yusuf`;
let country = `Nigeria`;
let city = `Lagos`;
let language = `JavaScript`;
let job = `freelancer`;
let age = `25`;
let fullNmae = firstName + ' ' + lastName;

let personInfoTwo = `I am ${fullNmae}. I am ${age}. I live in ${country}`;
let personInfoThree = `I am ${fullNmae}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
let fname = firstName + ' ' + lastName;
console.log('I am ' + fname, "I live in " + city + "I am " + age + " years old.") 
*/
// let a = 2;
// let b = 3;
// console.log(`${a} is greater than ${b}: ${a < b}`);

// String methods
// 1. length: The string length method returns the number of characters in a string included empty space.
// let js = 'JavaScript';
// console.log(js.length);
// let firstName = 'YusufDahudIshoal';
// console.log(firstName.length);


// 2. Accessing characters in a string
// let string = "JavaScript";
// let firstLetter = string[0];

// console.log(firstLetter);

// let secondLetter = string[1];
// let thirdLetter = string[2];
// let lastLetter = string[9];

// console.log(lastLetter);

// let lastIndex = string.length - 3;
// console.log(lastIndex)
// console.log(string[lastIndex]);

// 3. toUpperCase(): this method changes the string to uppercase letters.
// let string = "Javascript";
// console.log(string.toLocaleUpperCase());

// let firstName = "Dahud";
// console.log(firstName.toUpperCase());

// let country = 'Nigeria';
// console.log(country.toUpperCase());

// 4. toLowerCase(): this method changes the string to lowercase letters.
// let string = "Javascript";
// console.log(string.toLocaleLowerCase());

// let firstName = "Dahud";
// console.log(firstName.toLowerCase());

// let country = 'Nigeria';
// console.log(country.toLowerCase());

// 5. substr(): It takes two arguments, the starting index and number of characters to slice.
// let string = 'Javascript';
// console.log(string.substr(4,6));

// let country = 'Nigeria';
// console.log(country.substr(0, 5));

// 6. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// let string = 'JavaScript';

// console.log(string.substring(0,4));
// console.log(string.substring(4, 10));
// console.log(string.substring(4));

// let country = 'Finland';

// console.log(country.substring(0, 3));
// console.log(country.substring(3, 7));
// console.log(country.substring(3));

// 7. split(): The split method splits a string at a specified place.
/*
let string = '30 Days Of JavaScript';

console.log(string.split());    // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = "Dahud";

console.log(firstName.split());
console.log(firstName.split(""));

let countries = 'FInland, Sweden, Norway, Denmark, and Iceland';

console.log(countries.split(','));
console.log(countries.split(', '));
*/

// 8. trim(): Removes trailing space in the beginning or the end of a string.
/*let string = '      30 Days of JavaScript       ';

console.log(string);
console.log(string.trim(' '))

let firstName = '   Yusuf   ';

console.log(firstName);
console.log(firstName.trim(''))
*/

// 9. includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
// let string = "30 Days of JavaScript";

// console.log(string.includes('Days'));
// console.log(string.includes('days'));
// console.log(string.includes('Script'));
// console.log(string.includes('script'));
// console.log(string.includes('Java'));
// console.log(string.includes('java'));

// let country = 'Finland';

// console.log(country.includes('fin'));
// console.log(country.includes('Fin'));
// console.log(country.includes('land'));
// console.log(country.includes('Land'));

// 10. replace():takes as a parameter the old substring and a new substring.
// let string = '30 Days of JavaScript';
// console.log(string.replace('JavaScript', 'Python'));

// let country = 'Finland';
// console.log(country.replace('Fin', 'Noman'));

// 11. charAt(): charAt(): Takes index and it returns the value at that index
// let string = '30 Days of JavaScript';
// console.log(string.charAt(0));

// let lastIndex = string.length - 1;
// console.log(string.charAt(lastIndex));

// 12. charCodeAt():Takes index and it returns char code (ASCII number) of the value at that index
// let string = '30 Days of JavaScript';
// console.log(string.charCodeAt(3));

// let lastIndex = string.length - 1;
// console.log(string.charCodeAt(lastIndex));

// 13. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// let string = '30 Days of JavaScript';

// console.log(string.indexOf('D'));
// console.log(string.indexOf('Days'));
// console.log(string.indexOf('days'));
// console.log(string.indexOf('a'));
// console.log(string.indexOf('JavaScript'));
// console.log(string.indexOf('Script'));
// console.log(string.indexOf('script'));

// 14. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// let string = 'I fuad love JavaScript. If you do not love JavaScript what else can you love.';

// console.log(string.lastIndexOf('love'));
// console.log(string.lastIndexOf('you'));
// console.log(string.lastIndexOf('JavaScript'));
// console.log(string.lastIndexOf('jjj'));

// 15. concat(): it takes many substrings and joins them.
// let string = '30';
// console.log(string.concat("Days", "Of", "JavaScript"))

// 16. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// let string = 'Love is the best to win in this world';

// console.log(string.startsWith('Love'));
// console.log(string.startsWith('love'));
// console.log(string.startsWith('world'));

// 17. endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// let string = 'Love is the best to win in this world';

// console.log(string.endsWith('Love'));
// console.log(string.endsWith('world'));

// 18. search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
// let string = 'I love JavaScript. If you do not love JavaScript what else do you love?.';

// console.log(string.search('love'));
// console.log(string.search('JavaScript/gi'));
// console.log(string.search(/javascript/gi));

// 19. match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// let string = 'love';
// let patternOne = /love/;
// let patternTwo = /love/gi;

// 20. repeat():it takes a number as argument and it returns the repeated version of the string.
// let string = 'love';
// console.log(string.repeat(30));
// convert string to a number
// let num = '10';
// let numInt = parseInt(num);
// console.log(numInt);

// let num = '10';
// let numInt = Number(num);
// console.log(numInt);

// let num = '10';
// let numInt = +num;
// console.log(numInt);

// Exercise: Level 1
// var challenge = '30 Days Of JavaScript';
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substr(3));
// console.log(challenge.substring(3));
// console.log(challenge.slice(0, 3));
// console.log(challenge.includes('Script'));
// console.log(challenge.split());
// console.log(challenge.split(' '));
// let social = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(social.split(', '));
// console.log(challenge.replace('JavaScript', 'Python'));
// console.log(challenge.charAt(15));
// console.log(challenge.charCodeAt(11));
// console.log(challenge.indexOf('a'));
// console.log(challenge.lastIndexOf('a'));
// let new_world = 'You cannot end a sentence with because because because is a conjunction';
// console.log(new_world.indexOf('because'));
// console.log(new_world.lastIndexOf('because'));
// console.log(new_world.search('because'));
// console.log(challenge.trim(' '));
// console.log(challenge.startsWith('30'));
// console.log(challenge.endsWith('JavaScript'));
// console.log(challenge.match('a'));
// console.log(challenge.concat("30 Days of", "javascript"));
// console.log(challenge.repeat(2));

// Exercise: Level 2
// console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.');
// console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"');

// console.log(typeof('10') == '10');
// console.log(parseFloat('9.8') == '10');

// var string = 'jargon, python'
// console.log(string.search('on'))

// let number = Math.random() * 101;
// number = num.Math.floor()var string = 'jargon, python'
// console.log(string.search('on'))
// console.log(Math.floor(number));

// let newNum = (Math.random() * 51) + 50;
// console.log(Math.floor(newNum));

// let newNumNew = (Math.random() * 256) ;
// console.log(Math.floor(newNumNew));

// var string = "JavaScript";
// console.log(string.ramdom(2))

// const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
// const string = "abcdefghijklmnopqrstuvwxyz";

// // random item from Array
// console.log(array[Math.floor(Math.random() * array.length)]);

// // random Char from String
// console.log(string[Math.floor(Math.random() * string.length)]);

// console.log('1\t1\t1\t1\t1');
// console.log('2\t1\t2\t4\t8');
// console.log('3\t1\t3\t9\t27');
// console.log('4\t1\t4\t16\t64');
// console.log('5\t1\t5\t25\t125');

// let phrase = 'You cannot end a sentence with because because because is a conjunction';
// console.log(phrase.substr(0,30))

// Exercises: Level 3
let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
console.log(string.length);

let newString = 'You cannot end a sentence with because because because is a conjunction';
console.log(newString.match('because'));

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
console.log(sentence.replace(sentence))

