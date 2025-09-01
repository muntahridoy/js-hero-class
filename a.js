// var name = "Ridoy";
// const age = "27";
// let country = "bangladesh";

// console.log(age);
// console.log(country);
// console.log(name);

// const a = 4 - "hello";
// console.log(a); //NaN

// const b = 4 / 0;
// console.log(b); //Infinity

// console.log(100 >= 10);

// console.log(10 != '10'); // not typeof check just number check
// console.log(10 !== '10'); // typeof check just number too check

// if (3 < 10) {
//   console.log("i have a smaller value");
// }

// var biriyaniPrice = 250;

// if (biriyaniPrice < 300) {
//   console.log("mama give me some biriyani");
// }

// var weight = 20;
// if (weight < 20) {
//  console.log("I will carry");

// } else {
//  console.log("I will not");

// }

// const number = 7;
// if (number < 1) {
//   console.log("Choto ekta number paisy");
// }
// console.log("Something new is cooking");

// const num = 0;
// while (num < ) {
//   console.log("loooping", num);
// }
// let num = 0;
// while (num < 5) {
//  console.log("loooping", num);
//  // num = num + 1;
//  // num += 1;
//  num++;
// }

// let num = 1;
// while (num < 10) {
//   console.log(num);
//   num++;
// }

// for (let num = 0; num <= 5; num++) {
//   console.log(num);
// }
// for (let num = 0; num <= 5; num = num + 2) {
//   console.log(num);
// }

// for (let num = 10; num >= 0; num--) {
//   console.log(num);
// }
// for (let i = 0; i < 20; i++)
//   if (i % 2 === 1) {
//     console.log(i);
//   }

// for (let i = 0; i <= 30; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 0; i < 150; i++) {
//   console.log(i);
//   if (i >= 5) {
//     break;
//   }
// }
// console.log("Here is");

// let i = 54;
// while (i > 25) {
//   if (i < 50) {
//     break;
//   }
//   console.log(i);
//   i--;
// }

// let n = 0;
// while (n < 15) {
//   n++;
//   if (n % 5 !== 0) {
//     continue;
//   }
//   console.log(n);
// }

// do while loop
// let n = 0;
// do {
//  console.log(n);
//  n++;

// }
// while (n < 5)
// array

// const numbers = [
//   1, 3, 45, 46, 58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 45, 46,
//   58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 45,
//   46, 58, 94, 45, 46, 58, 94, 45, 46, 58, 94, 9, 88,
// ];
// console.log(numbers.length);

// pop
// const friends = ["balam", "sdgfd", "sfdsegf", "rtgfsx", "sfgye", "aaaallhs"];
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.unshift("gumailam");
// console.log(friends);

// const friends = ["balam", "sdgfd", "sfdsegf", "rtgfsx", "sfgye", "aaaallhs"];
// const nums = [];
// const food = "ros o gools a";
// const age = 12;
// console.log(Array.isArray(friends));
// console.log(Array.isArray(nums));
// console.log(Array.isArray(food));
// console.log(Array.isArray(age));

// introduce jabascript builting function
// const country = "Bangladesh";
// const division = "Newkhale";
// const district = `B-Baria`;
// const boolean = true;
// const asdsd = "12";
// const number = 84;
// const thana = new String("Demra");

// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof district);
// console.log(typeof boolean);
// console.log(typeof asdsd);
// console.log(typeof asdsasd);
// console.log(typeof thana);

// const numbers = [54, 98, 78, 21, 65];

// const school = "RAJ UK Uttara Model School";
// // console.log(school);

// const subject = "Chemistry";
// const book = "ChemIsTry";

// if (subject.toLowerCase() === book.toLowerCase()) {
//   console.log("I am reading book");
// } else {
//   console.log("I am entertainment");
// }

// const drink = "  water";
// const liquid = "water  ";

// if (drink.trim() === liquid.trim()) {
//   console.log("pani er opor nam life");
// } else {
//   console.log("somudre pani ase kintu khaite pari na");
// }

// split
// const friendsStr = "Rahim,karim,dhahim,cahim,sahim";
// const friends = friendsStr.split(",");
// console.log(friends);

// concat
// const first = "Abid";
// const last = "Nabid";

// // const fullName = first + last;
// const fullName = first + " " + last;
// // console.log(fullName);

// const fullName2 = first.concat(" ").concat(last);
// console.log(fullName2);

// const sentence = 'I am learning Web Dev.';
// // const result = ".yodiR ma I"

// let reverse = '';
// for (const letter of sentence) {
//   // console.log(letter);
//   reverse = letter + reverse;
// }
// console.log(reverse);
// let rev = '';
// for (let i = 0; i < sentence.length; i++) {
//   // console.log(i);
//   // console.log(sentence[i]);
//   const letter = sentence[i];
//   rev = letter + rev;
// }
// console.log(rev);

// // shortcut
// const reversed = sentence.split('').reverse().join('');
// console.log(reversed);

// const college = {
//   name: 'vnx',
//   class: ['11', '12', '13'],
//   events: ['science fair', 'sports fair', '21 Feb'],
//   unique: {
//     color: 'blue',
//     result: {
//       gpa: 5,
//       merit: 'top',
//     },
//   },
// };
// college.unique.result.merit = 'top top top most';
// console.log(college['unique'].result.merit);
// college.events[1] = 'maria kibti';
// console.log(college.events[1]);

// const mobile = {
//   brand: 'samsung',
//   price: 25000,
//   color: 'black',
//   camera: '12mp',
//   isNew: true,
// };

//for of : array
//for in : object
// for (const prop in mobile) {
//   console.log(prop);
//   console.log(mobile[prop]);
// }
// const keys = Object.keys(mobile);
// console.log(keys);

// for (const key of keys) {
//   console.log(key, ':', mobile[key]);
// }

// const pen = { brand: 'econo', price: 10, color: 'black' };
// const pencil = new Object();
// console.log(pencil);

// const rubber = Object.create({});
// console.log(rubber);

//using new

// primitive for javascript
// const price = 600; // number
// const name = 'triple h angle rikishi'; // string
// const isPoor = false; // boolean

// // non-primitive for javascript
// const friends = ['austin', 'rock', 'taker'];
// const student = {
//   name: 'kodom ali',
//   age: 22,
//   movies: ['king', 'dhakar mastan'],
//   address: 'kola bagan',
// };

// condition
// if (price > 1000) {
//   console.log('too expensive not for me');
// } else if (price > 500) {
//   console.log('ok i can buy it');
// } else {
//   console.log('within budget');
// }

// // loop +
// let pushUp = 0;
// while (pushUp < 10) {
//   console.log('push up', pushUp);
//   // pushUp = pushUp + 1;
//   // pushUp += 1;
//   pushUp++;
// }

// // loop -
// let pushUp = 0;
// while (pushUp > -10) {
//   console.log('push up', pushUp);
//   // pushUp = pushUp + 1;
//   // pushUp += 1;
//   pushUp--;
// };

// const fruits = ['apple', 'orange', 'grape', 'banana', 'mango'];
// // console.log(fruits[2]);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
//   console.log(fruits[i]);
// }

// const numbers = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// let k = 0;
// while (k < numbers.length) {
//   console.log(numbers[k]);
//   k++;
// }

// const ages = [1, 5, 100, 15, 8, 2, 28];
// // console.log(ages);
// ages.sort();
// console.log(ages);

// // ascending
// const sorted_ages = ages.sort(function (a, b) {
//   return a - b;
// });
// console.log(sorted_ages);

// // descending
// const sorted_ages_desc = ages.sort(function (a, b) {
//   return b - a;
// });
// console.log(sorted_ages_desc);

// const number = [1, 2, 43, 54, 4];
// const players = [{}, {}, {}];
// const employees = [
//   {
//     name: 'underTaker',
//     designation: 'american bad ass',
//     status: '60000',
//     attack: 'head stunn',
//   },
//   {
//     name: 'stoneCold Steve Austin',
//     designation: 'bear',
//     status: '50000',
//     attack: 'Stunner',
//   },
//   {
//     name: 'Rock',
//     designation:
//       "electrifying man",
//     status: '40000',
//     attack: 'Electry fy mood',
//   },
//   {
//     name: 'Triple H',
//     designation: 'king of kings',
//     status: '30000',
//     attack: 'neck stun',
//   },
// ];
// // console.log(employees[2].status);
// // console.log(employees[2].designation);

// // for (const employee of employees) {
// //   console.log(employee.attack, employee.designation);
// // }

// // employees[0].name = 'kurt'

// for (const emp of employees) {
//   const person = emp;
//   const personInfo = person.name + ': ' + person.status;
//   console.log(personInfo);
// }

// this is too

// for (const { name, status } of employees) {
//   // Using template literals for cleaner string formatting
//   console.log(`${name}: ${status}`);
// }

// .............................................
// new

// const numbers = [1, 2, 5, 6, 8];
// const tournament_runs = [[], [], []];
// const exam_marks = [
//   [98, 87, 45, 12, 63],
//   [88, 77, 66, 55, 44],
//   [11, 22, 33, 44, 55],
//   [10, 20, 30, 40, 50],
// ];
// // console.log(numbers[2]);
// // console.log(exam_marks[1][2]);

// const first_class_marks = exam_marks[0];
// console.log(first_class_marks[0]);
// // console.log(exam_marks[3][4]);

// exam_marks[0][1] = 600;
// exam_marks[1].pop();
// exam_marks[1].push(5000);

// // console.log(exam_marks);
// for (const marks of exam_marks) {
//   console.log(marks);
// }

// .............................................
// copy.js part (Module:18_7) 2d dimensional array Matrix

// primitive
// let price = 25;
// let comp_price = price;

// price = 12;
// comp_price = 20;

// console.log(price);
// console.log(comp_price);

// second Method

// non- primitive]
// const products = [25, 25, 25];
// const comp_products = [];

// // const comp_products = products;

// for (const product of products) {
//   comp_products.push(product);
// }
// comp_products[0] = 15;
// products[1] = 55;

// console.log(products);
// console.log(comp_products);

// Third method

// const numbers = [1, 2, 3, 4];
// const new_numbers = Array.from(numbers);
// const new_numbers = [].concat(numbers);
// // const new_numbers = [...numbers];
// // numbers.push(18);
// new_numbers.push(18);

// console.log(numbers);
// console.log(new_numbers);

// shallow copy vs deep copy

// function.js 19-1 part

// const number = 45;

// // function declare
// function fanOffKor() {
//   console.log('bosa theke ute dara');
//   console.log('walk towards the switch');
//   console.log('click the switch to off the fan');
// }

// // call the fuction
// fanOffKor();

// function brushTeeth() {
//   console.log('pick up the brush');
//   console.log('add paste');
//   console.log('2 min gos egose fena felo');
// }
// brushTeeth();

// parameter .js

// function vattkhao() {
//   console.log('hand wash kore aso');
//   console.log('boso');
//   console.log('palte e khabar dabar nao');
//   console.log('gopat gopat kore khao ');
// }
// vattkhao();
// 3 --> 3 * 3 = 9
// 4 --> 4 * 4 = 16
// 5 --> 5 * 5 = 25
// 11 --> 11 * 11 = 121

// function square(number) {
//   console.log('value of number parameter', number);
//   const borgo = number * number;
//   console.log('square of ther given is: ', borgo);
// }

// square(4);
// console.log('--------------');
// square(12);
// console.log('--------------');
// square(5);
// console.log('--------------');
// square(99);

// // second method
// function add(num1, num2) {
//   const sum = num1 + num2;
//   console.log(sum);
// }
// add(5, 71);
// add(65, 31);

// // third method
// function addAll(a, b, c, d, e) {
//   const total = a + b + c + d + e;
//   console.log(a, b, c, d, e);

//   console.log(total);
// }
// addAll(19, 88, 35, 45, 58);

// argument.js class

// function doubleIt(number) {
//   const doubled = number * 2;
//   console.log(number, doubled);
// }

// console.log('I will call the function');

// // সরাসরি নম্বর দিতে পার
// doubleIt(15);
// console.log('-----------------');
// doubleIt(88);
// console.log('-----------------');
// doubleIt(887);

// // সরাসরি ভেরিয়াবলো দিতে পার
// const number = 55;
// doubleIt(number);
// const money = 112;
// doubleIt(money);
// const price = 551;
// doubleIt(price);

// // second method

// function difference(num1, num2) {
//   const diff = num1 - num2;
//   console.log(num1, num2, 'difference is: ', diff);
// }

// const fatherAge = 40;
// const myAge = 10;
// difference(fatherAge, myAge);

// // return.js class
// function tenTimes(number) {
//   const result = number * 10;
//   return result;
// }
// // function cutHalf(number) {
// //   const half = number / 2;
// //   return half;
// // }

// tenTimes(5);

// const result = tenTimes(5);
// console.log('output', result);
// const bigNumber = tenTimes(99);
// console.log('output', bigNumber);

// .............................................
// // recap.js class
// function add(price1, price2) {
//   const total = price1 + price2;
//   return total;
// }
// const bill = add(5, 80);
// // console.log(bill);

// function add2(price1, price2) {
//   return price1 + price2;
// }
// const bill2 = add2(5, 800);
// console.log(bill, bill2);

// // second method

// function doMath(num1, num2) {
//   const sum = num1 + num2;
//   const diff = num1 - num2;
//   const multiply = sum * diff;
//   const result = multiply / 2;
//   return result;
// }
// const result = doMath(10, 5);
// console.log(result);

// // conditional_return.js class

// // third method (one class)
// function isEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // console.log(isEven(5));
// // console.log(isEven(110));

// function isOdd(number) {
//   if (number % 2 === 1) {
//     return true;
//   }
//   return false;
// }

// console.log(isOdd(10));
// console.log(isOdd(7));

// .............................................
// various-params.js class

/**
 * for a given string tell me whether it has even number of characters or not
 *
 */

// function evenSizedString(str) {
//   const size = str.length;
//   console.log(str, size);
//   if (size % 2 === 0) {
//     console.log('even size');
//     return true;
//   } else {
//     console.log('odd size');
//     return false;
//   }
// }
// // evenSizedString('Dhaka');
// // evenSizedString('faka');

// // second method

// function doubleOrTriple(number, doDouble) {
//   if (doDouble === true) {
//     const result = number * 2;
//     return result;
//   } else {
//     const result = number * 3;
//     return result;
//   }
// }
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// function numberOfElementrs(numbers) {
//   const len = numbers.length;
//   return len;
// }
// numberOfElementrs([12, 45, 78, 98, 12, 45]);

// function getAge(person) {
//   const age = person.age;
//   return age;
// }

// .............................................
// // array.operation.js
// /**
//  * Objective: write a function to give the sum, of all numbers in a array
//  * step-1: declare a function
//  * step-2: call check whether the function is called properly
//  * step-3: set a parameter(s)
//  * srep-4: pass the parameter(s), check whether parameter is passed in a propper format
//  * setp-5: do the function task (step by step)
//  */

// function sumOfNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     console.log(number);
//     sum = sum + number;
//   }
//   return sum;
// }
// const numbs = [54, 62, 12, 6];
// const sum = sumOfNumbers(numbs);
// console.log('Sum of numbers is', sum);

// .............................................

// // even-only.js class
// /**
//  * craete fuynction that will return only the =even nuymbers
//  * return the sum of evnn numbers
//  *
//  */

// function evenNumbersOnly(numbers) {
//   const evens = [];
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       // console.log(number);
//       evens.push(number);
//     }
//   }
//   return evens;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evens = evenNumbersOnly(numbers);
// console.log('Even Number:', evens);
// // second method এবার আমি যোগফল চাই !
// function sumOfEvenNumbers(numbers) {
//   let sum = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       // console.log(number);
//       sum = sum + number;
//     }
//   }
//   return sum;
// }

// const sum = sumOfEvenNumbers(numbers);
// console.log('Sum of even numbers:', sum);

// // module 20-2
// // convert.js class
// // 12 inch 1 feet
// function inchToFeet(inch) {
//   const feet = inch / 12;
//   return feet;
// }
// // not ignore
// function inchToFeet2(inch) {
//   const feetFraction = inch / 12;
//   const feetNumber = parseInt(feetFraction);
//   const inchRemaining = inch % 12;
//   const result = feetNumber + ' fit ' + inchRemaining + ' inch';
//   return result;
// }
// const shuvoHeight = inchToFeet(75);
// // console.log(shuvoHeight);
// const shuvoHeight2 = inchToFeet2(75);
// // console.log(shuvoHeight2);

// // second method

// // Mile → Kilometer
// function mileToKilometer(mile) {
//   const kilo = mile * 1.60934;
//   return kilo;
// }

// // Kilometer → Mile
// function kilometeToMiles(kilo) {
//   const mile = kilo * 0.621371;
//   return mile;
// }

// const distanceInMiles = 5; // 5 miles
// const distanceInKilometers = 8; // 8 km
// // Convert mile → kilometer
// const milesToKm = mileToKilometer(distanceInMiles);
// // Convert kilometer → mile
// const kmToMiles = kilometeToMiles(distanceInKilometers);

// console.log(distanceInMiles + ' mile = ' + milesToKm.toFixed(2) + ' km');
// console.log(distanceInKilometers + ' km = ' + kmToMiles.toFixed(2) + ' mile');

// .............................................
// // leap-yaer.js class

// /**
//  * Simple Logic
//  * year will be a leap year if the year is divisible by 4
//  *
//  */
// function isLeapYear(year) {
//   if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const isLipi = isLeapYear(2043);
// console.log(isLipi);
// /**
//  * 1. those year that is not divisible by 100 and  if the year is divisible by 4: then it will be a  leap year
//  * 2. if the year is divisible by 400, than it is a leap year
//  * 3. else it is not a leap year
//  *
//  */

// function isLeapYear2(year) {
//   if (year % 100 !== 0 && year % 4 === 0) {
//     return true;
//   } else if (year % 100 === 0 && year % 400 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const isLeap = isLeapYear2(2100);
// const isLeap2 = isLeapYear2(2400);
// const isLeap3 = isLeapYear2(1900);
// const isLeap4 = isLeapYear2(2052);
// console.log(isLeap, isLeap2, isLeap3, isLeap4);

// .............................................

// // odd.average.js class
// /**
//  * function takes an array as parameter
//  * give me average of the odd numbers in the array
//  */
// /**
//  * 1. put odd numbers in an array
//  */

// function oddAverage(numbers) {
//   const odds = [];
//   for (const number of numbers) {
//     if (number % 2 === 1) {
//       // console.log(number);
//       odds.push(number);
//     }
//   }
//   // odds is the array that contains only the odd numbers
//   // console.log(odds);
//   let sum = 0;
//   for (const number of odds) {
//     sum = sum + number;
//   }
//   const count = odds.length;
//   console.log(sum, count);
//   const avg = sum / count;
//   return avg;
// }

// const numbers = [42, 13, 58, 65, 81, 96, 7];
// const avg = oddAverage(numbers);
// console.log('Average of odd numbers:', avg);

// // no-duplicate.js class
// /**
//  * array has some duplicate elements
//  */

// const biriyanikhor = [
//   'abul',
//   'babul',
//   'cabul',
//   'abul',
//   'babul',
//   'dabul',
//   'kabul',
//   'cabul',
// ];

// const numbers = [1, 61, 5, 5, 81, 7, 5, 81, 61];

// function noDuplicate(array) {
//   const unique = [];
//   for (const item of array) {
//     // if the unique array does not already have this item, push it( some complexe )
//     if (unique.includes(item) === false) {
//       unique.push(item);
//     }
//   }
//   return unique;
// }
// const uniqueArray1 = noDuplicate(biriyanikhor);
// const uniqueArray2 = noDuplicate(numbers);
// console.log(uniqueArray1);
// console.log(uniqueArray2);

// .............................................

// math.js class

// const Math = {
//   min: function min(num1, num2) {
//     return num2;
//   },
// };
// console.log(Math.max);

// const min = Math.min(45, 21, 65, 99, 126, 5, -99);
// // console.log(min);
// const max = Math.max(45, 21, 65, 99, 126, 5, -99);
// console.log(max);

// console.log(Math.PI);
// console.log(Math.abs(5 - 10));
// console.log(Math.round(2.25));
// console.log(Math.round(2.85));
// console.log(Math.floor(2.8545325));
// console.log(Math.ceil(2.2545643));
// console.log(Math.trunc(2.25345643));

// console.log(Math.random());
// console.log(Math.random() * 10);
// const rand = Math.round(Math.random() * 10);
// console.log(rand);

// .............................................

// // date.js class

// const today = new Date();
// const date = new Date('2062-10-19');
// console.log(date.getMonth());
// console.log(date.getDay());

// const specificDate = new Date(2091, 0, 26);
// console.log(specificDate);
// specificDate.setMonth(10);
// console.log(specificDate.toLocaleString('en-GB'));

// // unix epoc

// ..............................................
// // swap.js class

// let a = 5;
// let b = 7;

// // console.log(a, b);
// // a = b;
// // b = a;

// const temp = a;
// a = b;
// b = temp;

// // console.log(a, b);

// let x = 5;
// let y = 7;

// // console.log(x, y);

// [x, y] = [y, x];
// console.log(x, y);

// ...............................................
// // milestone  module :21 max.js class

// const disha = 56;
// const salman = 79;
// if (disha > salman) {
//   console.log('Disha will get the strawberry');
// } else {
//   console.log('Salman will eat the strawberry');
// }

// // inside a function
// function getMax(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// const max1 = getMax(96, 79);
// const max2 = getMax(66, 89);
// const ultimateMax = getMax(max1, max2);
// console.log('max is:', ultimateMax);

// // max3.js class
// const jim = 256;
// const tim = 89;
// const kim = 678;

// if (jim > tim && jim > kim) {
//   console.log('Jim is the ultimate boss');
// } else if (tim > jim && tim > kim) {
//   console.log('Tim is the boss');
// } else {
//   console.log('Kim is the kardashians boss');
// }

// function maxOfThree(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else {
//     return num3;
//   }
// }
// const max = maxOfThree(986, 7859, 8258);
// console.log('max is:', max);

// // min.js class
// const min = Math.min(jim, tim, kim);
// console.log('min is:', min);

// const maxof = Math.max(12, 55, 66, 77);
// console.log('max is:', maxof);

// ................................................

// // tallest.js class
// const heights = [65, 66, 72, 78, 60];

// function getMax(numbers) {
//   let max = numbers[0];
//   for (const num of numbers) {
//     if (num > max) {
//       max = num;
//     }
//     // console.log(num);
//   }
//   return max;
// }

// const max = getMax(heights);
// console.log('max value is', max);

// // smallest number

// function getMin(numbers) {
//   let min = numbers[0];
//   for (const num of numbers) {
//     if (num < min) {
//       min = num;
//     }
//     // console.log(num);
//   }
//   return min;
// }

// const min = getMin(heights);
// console.log('min value is', min);

// ................................................
// wood.js class

// /**
//  *
//  * chair  3 cft
//  * table  10 cft
//  * bed 50 cft
//  */

// function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
//   const perChairWood = 3;
//   const perTableWood = 10;
//   const perBedWood = 50;
//   const chairTotalWood = chairQuantity * perChairWood;
//   const tableTotalWood = tableQuantity * perTableWood;
//   const bedTotalWood = bedQuantity * perBedWood;

//   const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
//   return totalWood;
// }

// const wood = woodQuantity(30, 5, 9);
// console.log('total wood required:', wood);

// /**
//  *
//  * shirt price 500
//  * pant price 300
//  * shoe price 900
//  */

// function shopping(shirtQuantity, pantQuantity, shoeQuantity) {
//   const perShirtPrice = 500;
//   const perPantPrice = 300;
//   const perShoePrice = 900;

//   const shirtTotalPrice = shirtQuantity * perShirtPrice;
//   const pantTotalPrice = pantQuantity * perPantPrice;
//   const shoeTotalPrice = shoeQuantity * perShoePrice;

//   const totalPrice = shirtTotalPrice + pantTotalPrice + shoeTotalPrice;
//   return totalPrice;
// }

// const price = shopping(10, 5, 2);
// console.log('total price:', price);

// ...................................................

// // min.js class
// const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];

// function getMin(numbers) {
//   let min = numbers[0];
//   for (const num of numbers) {
//     // console.log(num);

//     if (num < min) {
//       min = num;
//     }
//   }
//   return min;
// }

// const cheap = getMin(prices);
// console.log('cheap price is:', cheap);

// ................................................

// // cheapest.js class

// const phones = [
//   { name: 'htc', price: 27000, color: 'black', camera: '12mp', isNew: true },
//   { name: 'xiaomi', price: 22000, color: 'black', camera: '12mp', isNew: true },
//   { name: 'oppo', price: 19000, color: 'black', camera: '12mp', isNew: true },
//   { name: 'walton', price: 12000, color: 'black', camera: '12mp', isNew: true },
//   { name: 'nokia', price: 15000, color: 'black', camera: '12mp', isNew: true },
//   { name: 'realme', price: 23000, color: 'black', camera: '12mp', isNew: true },
// ];

// function getCheapestPhone(phones) {
//   let min = phones[0];
//   for (const phone of phones) {
//     // console.log(phone);
//     if (phone.price < min.price) {
//       // object detect korar joono price lagaise
//       min = phone;
//     }
//   }
//   return min;
// }
// const cheap = getCheapestPhone(phones);
// console.log('cheapest phone is:', cheap);

// ................................................

// // total.js class

// // 1 portion

// const products = [
//   { name: 'jaket', price: 3000, quantity: 7 },
//   { name: 't-shirt', price: 1200, quantity: 15 },
//   { name: 'shirt', price: 1000, quantity: 10 },
//   { name: 'pant', price: 1500, quantity: 8 },
// ];

// function getShoppingTotal(products) {
//   let total = 0;
//   for (const product of products) {
//     total = total + product.price;
//   }
//   return total;
// }

// const total = getShoppingTotal(products);
// console.log('Total price is:', total);

// // 2 portion
// const products2 = [
//   { name: 'jaket', price: 3000, quantity: 7 },
//   { name: 't-shirt', price: 1200, quantity: 15 },
//   { name: 'shirt', price: 1000, quantity: 10 },
//   { name: 'pant', price: 1500, quantity: 8 },
// ];

// function getTotalPrice(products) {
//   let total = 0;
//   for (const product of products) {
//     const productTotal = product.price * product.quantity;
//     total = total + productTotal;
//   }
//   return total;
// }

// const totalPrice = getTotalPrice(products);
// console.log('Total price is:', totalPrice);

// ......................................................

// discount.js class
/**
 * upto 100---> 100
 * more than 101-200--->90
 * more than 200--->70
 *
 *
 */

// function discountedPrice(quantity) {
//   if (quantity <= 100) {
//     const total = quantity * 100;
//     return total;
//   } else if (quantity <= 200) {
//     const total = qauantity * 90;
//     return total;
//   } else {
//     const total = quantity * 70;
//     return total;
//   }
// }

// const total = discountedPrice(201);
// console.log(total);

// ................................................

// // layyar-discount.js class

// /**
//  *
//  * first 100 --> 100
//  * 101 to 200 --> 90
//  * above 200 --> 70
//  *
//  */

// function layeredDiscountedTotal(quantity) {
//   const first100Price = 100;
//   const second100Price = 90;
//   const above200Price = 70;

//   if (quantity <= 100) {
//     const total = quantity * first100Price;
//     return total;
//   } else if (quantity <= 200) {
//     const first100Total = 100 * first100Price;
//     const remainingQuantity = quantity - 100;
//     const remainingTotal = remainingQuantity * second100Price;
//     const total = first100Total + remainingTotal;
//     return total;
//   } else {
//     const first100Total = 100 * first100Price;
//     const second100Total = 100 * second100Price;
//     const remainingQuantity = quantity - 200;
//     const remainingTotal = remainingQuantity * above200Price;
//     const total = first100Total + second100Total + remainingTotal;
//     return total;
//   }
// }

// const price = layeredDiscountedTotal(70);
// console.log(price);

// ................................................
// // calculator.js class

// function add(num1, num2) {
//   const sum = num1 + num2;
//   return sum;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }

// function multiply(num1, num2) {
//   return num1 * num2;
// }

// function divide(num1, num2) {
//   return num1 / num2;
// }
// function calculator(a, b, operation) {
//   if (operation === 'add') {
//     const result = add(a, b);
//     return result;
//   } else if (operation === 'subtract') {
//     const result = subtract(a, b);
//     return result;
//   } else if (operation === 'multiply') {
//     return multiply(a, b);
//   } else if (operation === 'divide') {
//     return divide(a, b);
//   } else {
//     return "Only 'add', 'subtract', 'multiply', 'divide' are allowed.";
//   }
// }

// const result = calculator(5, 7, 'divide');
// console.log(result);

// .....................................................

// // validation.js class

// // 1 method

// function multiply(num1, num2) {
//   if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//     return 'please provide a number';
//   }
//   const mult = num1 * num2;
//   return mult;
// }
// const result = multiply(5, 'seven');
// // console.log(result)

// // 2 method

// function fullName(first, second) {
//   if (typeof first !== 'string') {
//     return 'First name should be a string';
//   } else if (typeof second !== 'string') {
//     return 'Second name should be a string';
//   }
//   const full = first + ' ' + second;
//   return full;
// }

// const full = fullName('Akmal');
// // console.log(full);

// // 3 method

// function getPrice(product) {
//   if (typeof product !== 'object') {
//     return 'please provide an object';
//   }
//   const price = product.price;
//   return price;
// }
// // const price = getPrice({ //   name: 'leptop', //   price: 35000, //   color: 'black', //   camera: '12mp', //   isNew: true, // });

// const price = getPrice(5);
// // console.log(price);

// // 4 method

// function getSecond(numbers) {
//   if (Array.isArray(numbers) !== false) {
//     return 'please provide an array';
//   }
//   const second = numbers[1];
//   return second;
// }

// // const second = getSecond(['akil']);
// const second = getSecond('akil');

// // const second = getSecond(['7']);
// // const second = getSecond('7');

// // const second = getSecond([7]);
// // const second = getSecond(7);

// console.log(second);

// // extra class no title but focus object.js class

// const nayok = {
//   name: 'Akmal',
//   id: 12345,
//   address: 'Dhaka',
//   isSingle: true,
//   friends: ['Alia', 'Bipu', 'Capu'],
//   movies: [
//     { name: 'no.1', year: 2015 },
//     { name: 'no.2', year: 2018 },
//   ],
//   act: function () {
//     console.log('active like Undertaker American Bad Ass');
//   },
//   car: {
//     brand: 'tesla',
//     price: 5000000,
//     made: 2025,
//     manufacturer: {
//       name: 'tesla',
//       ceo: 'elon mask',
//       contry: 'USA',
//     },
//   },
// };
// // console.log(student.car);
// console.log(nayok.act);

// nayok.act();

//go to link job: https://codixel.tech/

// const date = '25.06.2025';
// console.log(date);

// .......................................................
// array.js class

// const products = [
//   { name: 'phone', price: 12000 },
//   { name: 'laptop', price: 82000 },
// ];

// products[0];
// products[1];

// const products = [15, 56, 87]
// const products = {
//   0: 15,
//   1: 56,
//   2: 87,
// };

// ...................................................
// arguments.js class
// function add(num1, num2) {
//   console.log(num1, num2);
//   console.log(arguments[6]);
// }
// add(12, 13, 14, 15, 16);

// .......................................................
// // matched.js class

// const numbers = [45, 65, 23, 98, 19];
// // 1 method
// // for (let i = 0; i < numbers.length; i++) {
// //   const number = numbers[i];
// //   console.log(number);
// // }

// // 2 method
// for (const number of numbers) {
//   console.log(number);
// }

// same way test You failed
// const dates = ['25-06-2025'];

// for (const date of dates) {
//   console.log(date);
// }

// const products = [
//   { id: 1, name: 'dell laptop', price: 12000 },
//   { id: 2, name: 'hp laptop', price: 15000 },
//   { id: 8, name: 'xiaomi phone', price: 22000 },
//   { id: 4, name: 'mac laptop', price: 170000 },
//   { id: 6, name: 'acer laptop', price: 19000 },
//   { id: 7, name: 'samsung phone', price: 25000 },
//   { id: 3, name: 'lenovo laptop', price: 10000 },
//   { id: 9, name: 'oppo phone', price: 19000 },
//   { id: 5, name: 'asus laptop', price: 18000 },
// ];

// // for (const product of products) {
// //   console.log(product);
// // }

// function matchedProducts(products, search) {
//   const matched = [];
//   for (const product of products) {
//     if (product.name.toLowerCase().includes(search.toLowerCase())) {
//       matched.push(product);
//     }
//   }
//   return matched;
// }
// const result = matchedProducts(products, 'phone');
// console.log(result);

// ...............................................................
// Milestone-5 module 24-1

// console.log('25-february-2025');

// Must Research
// string number boolean
// variable
// condition
// array
// loop
// object
// function

// const dates = ['25-06-2025'];

// for (const date of dates) {
//   // console.log(date);/*  */
// }

// const dateOf = { date: '25-06-2025' };
// dateOf.date;

// ..........................................
// delete file github
// ..........................................
// delete file github
// ..........................................
// delete file github
// ..........................................
// delete file github
// ..........................................
// delete file github
