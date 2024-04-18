/* 

Today only install the terminal, zsh and etc. 

Nothing special for today

*/

// console.log(`Hello World`);

// const animals = [
//   "Hen",
//   "elephant",
//   "llama",
//   "leopard",
//   "ostrich",
//   "Whale",
//   "octopus",
//   "rabbit",
//   "lion",
//   "dog",
// ];

// // Create the secretMessage array below
// const secretMessage = animals.map((animal) => animal[0]);

// // console.log(secretMessage.join(" + "));
// console.log(secretMessage);

// const bigNumbers = [100, 200, 300, 400, 500];

// // Create the smallNumbers array below
// const smallNumbers = bigNumbers.map((num) => num / 100);

// console.log(smallNumbers);

// const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// // Something is missing in the method call below

// // console.log(
// //   words.some((word) => {
// //     return word.length < 6;
// //   })
// // );

// // Use filter to create a new array

// // Make sure to uncomment the code below and fix the incorrect code before running it

// // console.log(interestingWords.every((word) => { } ));

// function isSumBigger(number1, number2, total) {
//   const numberSum = number1 + number2;

//   if (numberSum > total) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // Should return true
// console.log("isSumBigger(1, 3, 2) returns: " + isSumBigger(1, 3, 2));

// // Should return false
// console.log("isSumBigger(1, 3, 5) returns: " + isSumBigger(1, 3, 5));

// function capitalizeASingleWord(word) {
//   if (!word.match(" ")) {
//     return null;
//   }

//   let firstLetter = word.charAt(0);
//   const restOfWord = word.slice(1);

//   firstLetter = firstLetter.toUpperCase();

//   return firstLetter + restOfWord;
// }

// // Should return "Hey"
// console.log(
//   "capitalizeASingleWord('hey') returns: " + capitalizeASingleWord("hey")
// );

// // Should return null
// console.log(
//   "capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord("hey ho")
// );

// const reverseArray = (arr) => {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// };

// const sentence = ["sense.", "make", "all", "will", "This"];

// console.log(reverseArray(sentence));

// const numbers = [5, 3, 9, 30];

// const smallestPowerOfTwo = (arr) => {
//   let results = [];
//   console.log(results);
//   // The 'outer' for loop:
//   for (let i = 0; i < arr.length; i++) {
//     number = arr[i];
//     console.log(number);
//     // The 'inner' while loop:
//     // We needed to create a new variable!
//     let j = 1;
//     while (j < number) {
//       j = j * 2;
//     }
//     results.push(j);
//     console.log(results);
//   }
//   return results;
// };

// console.log(smallestPowerOfTwo(numbers));

// const veggies = ["broccoli", "spinach", "cauliflower", "broccoflower"];

// const politelyDecline = (veg) => {
//   console.log("No " + veg + " please. I will have pizza with extra cheese.");
// };

// // Checkpoint 1 solutions:
// const declineEverything = (arr) => {
//   arr.forEach(politelyDecline);
// };

// /*
// // As a function declaration:
// function declineEverything(arr) {
//       arr.forEach(politelyDecline)
// }
// */

// // Checkpoint 2 solutions:
// // Using an anonymous function and string interpolation:
// const acceptEverything = (arr) => {
//   arr.forEach((e) => {
//     console.log(`Ok, I guess I will eat some ${e}.`);
//   });
// };

// politelyDecline(veggies);

// /*
// // Using a named function and string concatenation:
// const grudginglyAccept = veg => {
//       console.log('Ok, I guess I will eat some ' + veg + '.');
// }
// const acceptEverything = arr => {
//       arr.forEach(grudginglyAccept)
// }

// // Using a loop:
// const acceptEverything = arr => {
//  for(let i = 0; i<arr.length; i++){
//     console.log(`Ok, I guess I will eat some ${arr[i]}.`)
//  }
// }
// */

// const numbers = [2, 7, 9, 171, 52, 33, 14];

// const toSquare = (num) => num * num;

// const squareNums = (arr) => arr.map(toSquare);

// console.log(numbers);

// console.log(squareNums(numbers));

// console.log(`this is a running correctly`);

// /*
// // Using an anonymous function:
// const squareNums = arr => arr.map(e => e * e)

// // As a function declaration plus using our named function:
// function squareNums(arr) {
//     return arr.map(toSquare)
// }
// */

/*
// As a function declaration AND using a loop:
function shoutGreetings(arr) {
  let shoutArray = []
  for(let i = 0; i<arr.length; i++){
    shoutArray.push(arr[i].toUpperCase() + '!')
  }
  return shoutArray
}
*/
// const greetings = ["hello", "hi", "heya", "oi", "hey", "yo"];

// const shoutGreetings = (arr) => arr.map((word) => word.toUpperCase() + "!");

// console.log(shoutGreetings(greetings));

// const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

// // const sortYears = (arr) => arr.sort((x, y) => y - x);

// // As a function declaration AND using a named function:
// function sortYears(arr) {
//   const checkYears = (year1, year2) => year2 - year1;
//   return arr.sort(checkYears);
// }

// console.log(sortYears(years));

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((word) => word.length > 6);

// console.log(result);
// // Expected output: Array ["exuberant", "destruction", "present"]

// const justCoolStuff = (firstArray, secondArray) =>
//   firstArray.filter((item) => secondArray.includes(item));

// /*
// // As a function declaration AND using named function w/ a loop:
// function justCoolStuff(firstArray, secondArray) {
//       function isInSecondArray(item){
//             for(let i = 0; i<secondArray.length; i++){
//                   if (secondArray[i] === item){
//                         return true
//                   }
//             }
//             return false
//       }
//       return firstArray.filter(isInSecondArray)
// }
// */

// const coolStuff = [
//   "gameboys",
//   "skateboards",
//   "backwards hats",
//   "fruit-by-the-foot",
//   "pogs",
//   "my room",
//   "temporary tattoos",
// ];

// const myStuff = [
//   "rules",
//   "fruit-by-the-foot",
//   "wedgies",
//   "sweaters",
//   "skateboards",
//   "family-night",
//   "my room",
//   "braces",
//   "the information superhighway",
// ];

// console.log(justCoolStuff(myStuff, coolStuff));

// Alternate solution:
// Using a function declaration, loop, and helper function:
// function isTheDinnerVegan(arr) {
//   const isVegan = (food) => {
//     if (food.source === "plant") {
//       return true;
//     }
//     return false;
//   };
//   for (let i = 0; i < arr.length; i++) {
//     if (!isVegan(arr[i])) {
//       return false;
//     }
//   }
//   return true;
// }

// const dinner = [
//   { name: "hamburger", source: "meat" },
//   { name: "cheese", source: "plant" },
//   { name: "ketchup", source: "plant" },
//   { name: "bun", source: "plant" },
//   { name: "dessert twinkies", source: "plant" },
// ];

// // const isTheDinnerVegan = (arr) => arr.every((food) => food.source === "plant");

// console.log(isTheDinnerVegan(dinner));

// const speciesArray = [
//   { speciesName: "shark", numTeeth: 50 },
//   { speciesName: "dog", numTeeth: 42 },
//   { speciesName: "alligator", numTeeth: 80 },
//   { speciesName: "human", numTeeth: 32 },
// ];

// const sortSpeciesByTeeth = (arr) =>
//   arr.sort(
//     (speciesObj1, speciesObj2) => speciesObj2.numTeeth > speciesObj1.numTeeth
//   );

// // As a function declaration AND using a named function:
// // function sortSpeciesByTeeth(arr) {
// //   const compareTeeth = (speciesObj1, speciesObj2) =>
// //     speciesObj1.numTeeth > speciesObj2.numTeeth;
// //   return arr.sort(compareTeeth);
// // }

// console.log(sortSpeciesByTeeth(speciesArray));

// const findMyKeys = (arr) => arr.findIndex((item) => item === "random");

// /*
// // Alternate solution:
// // As a function declaration using a loop:
// function findMyKeys(arr) {
//       let index = -1;
//       for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === 'keys') {
//                   index = i
//                   break
//             }
//       }
//       return index
// }
// */
// const randomStuff = [
//   "credit card",
//   "screwdriver",
//   "receipt",
//   "gum",
//   "keys",
//   "used gum",
//   "plastic spoon",
// ];

// console.log(findMyKeys(randomStuff));

// // Final solution:
// const dogFactory = (name, breed, weight) => {
//   return {
//     _name: name,
//     _breed: breed,
//     _weight: weight,
//     get name() {
//       return this._name;
//     },
//     set name(newName) {
//       this._name = newName;
//     },
//     get breed() {
//       return this._breed;
//     },
//     set breed(newBreed) {
//       this._breed = newBreed;
//     },
//     get weight() {
//       return this._weight;
//     },
//     set weight(newWeight) {
//       this._weight = newWeight;
//     },
//     bark() {
//       return "ruff! ruff!";
//     },
//     eatTooManyTreats() {
//       this._weight++;
//       console.log(this.eatTooManyTreats);
//     },
//   };
// };

// console.log(dogFactory("milo", "pug", 10).bark());

// /*
// // Solution to checkpoint 1:
// const dogFactory = (name, breed, weight) => {
//     return {
//           name: name,
//           breed: breed,
//           weight: weight
//     }
// }

// // Solution to checkpoint 2:
// const dogFactory = (name, breed, weight) => {
//     return {
//           _name: name,
//           _breed: breed,
//           _weight: weight,
//           get name() {
//                 return this._name;
//           },
//           set name(newName) {
//                 this._name = newName;
//           },
//           get breed() {
//                 return this._breed;
//           },
//           set breed(newBreed) {
//                 this._breed = newBreed;
//           },
//           get weight() {
//                 return this._weight;
//           },
//           set weight(newWeight) {
//                 this._weight = newWeight;
//           }
//     }
// }

// */

/*
Write a function factorial() that takes a number as an argument and returns the factorial of the number.

Example:

factorial(6); 
// returns `720` because 6 * 5 * 4 * 3 * 2 * 1 = 720 

Assume only positive numbers will be given as an argument for the factorial() function.
*/

// const factorial = (n) => {
//   let result = 1;

//   for (let i = n; i > 0; i--) {
//     result *= i;
//     console.log(result);
//   }
//   return result;
// };

// console.log(factorial(6));

/*

Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

*/

// // Write function below
// const subLength = (str, char) => {
//   let charCount = 0;
//   let len = -1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == char) {
//       charCount++;
//       if (charCount > 2) {
//         return 0;
//       }
//       if (len == -1) {
//         len = i;
//       } else {
//         len = i - len + 1;
//       }
//     }
//   }
//   if (charCount < 2) {
//     return 0;
//   }

//   return len;
// };

// console.log(subLength("Saturday", "a")); // returns 6
// console.log(subLength("summer", "m")); // returns 2
// console.log(subLength("digitize", "i")); // returns 0
// console.log(subLength("cheesecake", "k")); // returns 0

/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.
*/

// Write function below
// const groceries = (list) => {
//   let listString = "";

//   for (let i = 0; i < list.length; i++) {
//     listString += list[i].item;
//     console.log(list[i]);
//     console.log(list.length);
//     console.log(listString);
//     if (i < list.length - 2) {
//       listString += ", ";
//     } else if (i == list.length - 2) {
//       listString += " and ";
//     }
//   }

//   return listString;
// };

// const groceries = (list) => {
//   if (list.length === 0) {
//     return ""; // Handle empty list scenario
//   }

//   if (list.length === 1) {
//     return list[0].item; // Handle single item scenario
//   }

//   const items = list.map((obj) => obj.item);
//   return items.slice(0, -1).join(", ") + " and " + items[items.length - 1];
// };

// console.log(
//   groceries([
//     { item: "Carrots" },
//     { item: "Hummus" },
//     { item: "Pesto" },
//     { item: "Rigatoni" },
//     { item: "Carrots" },
//     { item: "Hummus" },
//     { item: "Pesto" },
//     { item: "Rigatoni" },
//   ])
// );
// // returns 'Carrots, Hummus, Pesto and Rigatoni'

// //groceries([{ item: "Bread" }, { item: "Butter" }]);
// // returns 'Bread and Butter'

// //groceries([{ item: "Cheese Balls" }]);
// // returns 'Cheese Balls'

//Credit Card Checker

// // All valid credit card numbers
// const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
// const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
// const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
// const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
// const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// // All invalid credit card numbers
// const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
// const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
// const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
// const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
// const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// // Can be either valid or invalid
// const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
// const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
// const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
// const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
// const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// // An array of all the arrays above
// const batch = [
//   valid1,
//   valid2,
//   valid3,
//   valid4,
//   valid5,
//   invalid1,
//   invalid2,
//   invalid3,
//   invalid4,
//   invalid5,
//   mystery1,
//   mystery2,
//   mystery3,
//   mystery4,
//   mystery5,
// ];

// // Add your functions below:
// // Add your functions below:
// function validateCred(numArr) {
//   let total = 0;
//   for (let i = numArr.length - 1; i >= 0; i--) {
//     let currValue = numArr[i];
//     if ((numArr.length - 1 - i) % 2 === 1) {
//       currValue *= 2;
//       if (currValue > 9) {
//         currValue -= 9;
//       }
//     }
//     total += currValue;
//   }

//   return total % 10 === 0;
// }

// // Test functions:
// console.log(validateCred(valid1)); // Should print true
// console.log(validateCred(invalid1)); // Should print false

// function findInvalidCards(cards) {
//   const invalid = [];

//   for (let i = 0; i < cards.length; i++) {
//     let currCred = cards[i];
//     if (!validateCred(currCred)) {
//       invalid.push(currCred);
//     }
//   }

//   return invalid;
// }

// // Test function
// console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
// console.log(
//   findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])
// ); // Should print all of the numbers

// console.log(findInvalidCards(batch)); // Test what the mystery numbers are

// function idInvalidCardCompanies(invalidBatch) {
//   const companies = [];
//   for (let i = 0; i < invalidBatch.length; i++) {
//     switch (invalidBatch[i][0]) {
//       case 3:
//         if (companies.indexOf("Amex") === -1) {
//           companies.push("Amex");
//         }
//         break;
//       case 4:
//         if (companies.indexOf("Visa") === -1) {
//           companies.push("Visa");
//         }
//         break;
//       case 5:
//         if (companies.indexOf("Mastercard") === -1) {
//           companies.push("Mastercard");
//         }
//         break;
//       case 6:
//         if (companies.indexOf("Discover") === -1) {
//           companies.push("Discover");
//         }
//         break;
//       default:
//         console.log("Company not found");
//     }
//   }
//   return companies;
// }

// console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
// console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
// console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards

// class Dog {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 5;
//   }

//   get name() {
//     return this._name;
//   }
//   get behavior() {
//     return this._behavior;
//   }

//   incrementBehavior() {
//     this._behavior++;
//   }
// }

// const halley = new Dog("Halley");
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior); // Print behavior value to console
// halley.incrementBehavior(); // Add one to behavior
// console.log(halley.name); // Print name value to console
// console.log(halley.behavior);

// const milo = new Dog("Milo");
// console.log(milo.name); // Print name value to console
// console.log(milo.behavior); // Print behavior value to console
// milo.incrementBehavior(); // Add one to behavior
// console.log(milo.name); // Print name value to console
// console.log(milo.behavior); // Print behavior value to console
// milo.incrementBehavior(); // Add one to behavior
// console.log(milo.name); // Print name value to console
// console.log(milo.behavior);

//Method Call
// class Surgeon {
//   constructor(name, department) {
//     this._name = name;
//     this._department = department;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get department() {
//     return this._department;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
// const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

// console.log(surgeonRomero.name);
// surgeonRomero.takeVacationDays(3);
// console.log(surgeonRomero.remainingVacationDays);

//Inheritance II

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
// }

// const doctorJackson = new HospitalEmployee("Jackson", 18);
// console.log(doctorJackson);
// console.log(HospitalEmployee.name);

//Inheritance III

// class Animal {
//   constructor(name) {
//     this._name = name;
//     this._behavior = 0;
//   }

//   get name() {
//     return this._name;
//   }

//   get behavior() {
//     return this._behavior;
//   }

//   incrementBehavior() {
//     this._behavior++;
//   }
// }

// class Cat extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
//   get usesLitter() {
//     return this._usesLitter;
//   }
// }

// class Dog extends Animal {
//   constructor(name, usesLitter) {
//     super(name);
//     this._usesLitter = usesLitter;
//   }
//   get usesLitter() {
//     return this._usesLitter;
//   }
// }

// const bryceCat = new Cat("Bryce", false);
// const miloDog = new Dog("milo", false);
// console.log(bryceCat._name); // output: Bryce
// console.log(miloDog._name); // output: Milo

// bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance
// miloDog.incrementBehavior(); // Call .incrementBehavior() on Cat instance
// console.log(bryceCat.behavior); // Output is 1. Why? Explain this to yourself
// console.log(miloDog.behavior); // Output is 1. Why? Explain this to yourself

/*
The Cat class inherits the _behavior property, behavior getter and the incrementBehavior() method 
from Animal class. 
*/

//For Nurse Case

// class HospitalEmployee {
//   constructor(name) {
//     this._name = name;
//     this._remainingVacationDays = 20;
//   }

//   get name() {
//     return this._name;
//   }

//   get remainingVacationDays() {
//     return this._remainingVacationDays;
//   }

//   takeVacationDays(daysOff) {
//     this._remainingVacationDays -= daysOff;
//   }
//   static generatePassword() {
//     return Math.floor(Math.random() * 10000);
//   }
// }

// //Create the Nurse class as a child of Hospital Employee
// //With the following properties and methods:
// // property: _name. _remainingVacationDays inside the constructor and _certifications
// class Nurse extends HospitalEmployee {
//   constructor(name, certifications) {
//     super(name);
//     this._certifications = certifications;
//   }

//   get certifications() {
//     return this._certifications;
//   }

//   addCertification(newCertification) {
//     this._certifications.push(newCertification);
//   }
// }

// const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification("Genetics");
// console.log(nurseOlynyk.certifications);

// console.log(
//   `The remaining vacation days for ${Nurse.name} is ${nurseOlynyk.remainingVacationDays} days`
// );

console.log("I'm learning about");

for (let idx = 0; idx < 999999999; idx++) {}

// The second console.log() statement is
// delayed by the for loop's execution
console.log("the Event Loop");

console.log("This is the first line of code in app.js.");

function usingsetTimeout() {
  console.log("I'm going to be queued in the Event Loop.");
}
setTimeout(usingsetTimeout, 3000);

console.log("This is the last line of code in app.js.");

const shopForBeans = () => {
  return new Promise((resolve, reject) => {
    const beanTypes = ["kidney", "fava", "pinto", "black", "garbanzo"];
    setTimeout(() => {
      let randomIndex = Math.floor(Math.random() * beanTypes.length);
      let beanType = beanTypes[randomIndex];
      console.log(`2. I bought ${beanType} beans because they were on sale.`);
      resolve(beanType);
    }, 1000);
  });
};

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();
console.log(
  "Describe what happens with this `console.log()` statement as well."
);
