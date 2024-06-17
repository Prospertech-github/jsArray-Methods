// CRUD application ==> [Create, Read, Update, Delete]

//JS Data Type
//string, numbers, null, undefined, symbol, bigInt, objects={arrays, object literals, functions .etc }

// Arrays & Array methods
let arr = ["prosper", 23, "single"];
// push method to add to an array from behind
arr.push("ikechukwu");
arr.push("cambodia");

console.log(arr);
// pop method to remove from an array from behind
arr.pop();
console.log(arr);

//shift and unshift methods
// shift method to remove item from an array from the front
arr.shift();
console.log(arr);

// unshift method to add item to an array from the front
arr.unshift("anambra");
console.log(arr);

// Another way of creating arrays
let arr2 = new Array();
arr2.push("ann", "scate", "yoruba", 36);
console.log(arr2);

//Length property
// arr.length
// length of an array is different from the index of arrays. Arrays are zero indexed
console.log(arr.length);

//FUNCTIONS IN JS
// DRY principle === Don't Repeat Yourself
// let num1 = 5
// let num2 = 8
// let sum = num1 + num2;
// console.log(sum)

//function declaration
function sumOfNumber(num1, num2) {
  let sum = num1 + num2;
  console.log(sum);
}
//calling a function
sumOfNumber(6, 3);
sumOfNumber(19674280, 2300647430);

//Anonymous function
let multiply = function (num1, num2) {
  let product = num1 * num2;
  console.log(product);
};
multiply(6, 8);

//Arrow functions
const divide = (num1, num2) => {
  let dividend = num1 / num2;
  console.log(dividend);
};
divide(4, 8);

function logToConsole() {
  console.log("Nigeria we Hail Thee!!");
}
logToConsole();
//Study the THIS keyword

//Advanced array methods == slice, splice, delete, join, map, forEach, sort, reduce, concat, filter
// Concat method: used to join two arrays
let evenNum = [2, 4, 6, 8, 10];
let oddNum = [1, 3, 5, 7, 9];
let allNum = evenNum.concat(oddNum);
console.log(allNum);
let moreEven = evenNum.concat([12, 14, 16, 18, 20]);
console.log(moreEven);

// Slice method: used to create a SLICED COPY  of an array
//Note: the slice method creates a new array and does not remove items from the source array
let slicedArr = evenNum.slice(1, 4);
console.log(slicedArr);
console.log(evenNum);

// Splice method: used to add or remove items in an array
// when used to add, it mutates our source array; when used to delete it returns an array of deleted items
//adding items with the splice
// let oddNum = [1,3,5,7,9]
oddNum.splice(3, 0, "food", "bread", "tigernut");
console.log(oddNum);

//using splice to delete items
// oddNum.splice(3, 3);
let deletedItems = oddNum.splice(3, 3);
// console.log(oddNum);
console.log(deletedItems);

//Join method: used to join items in an array and return a strings
let word = ["Tiger", "nut"];
let newWord = word.join("");
console.log(newWord);

let word2 = ["Hamster", "Kombat"];
let airdrop = word2.join(" ");
console.log(airdrop);

// Delete method: used to leave undefined in your array items
delete word2[0];
console.log(word2);

//Filter method
const ages = [6, 12, 24, 74, 56, 15];
// return new array with ages above 18
let adults = ages.filter(checkAge);
//how filter works under the hood
// at adults[0] === 6 >>> checkAge(6)
// at adults[1] === 12 >>> checkAge(12)
// at adults[2] === 24 >>> checkAge(24)
// at adults[3] === 74 >>> checkAge(74)
// at adults[4] === 56 >>> checkAge(56)
// at adults[5] === 15 >>> checkAge(15)
console.log(adults);

function checkAge(age) {
  return age >= 18;
}

// const divide = (num1, num2) => {
//     let dividend = num1 / num2;
//     console.log(dividend);
// };
let minors = ages.filter((age) => age <= 18);
console.log(minors);

//Sort Method: used to arrange array items in ascending or descending order
const fruits = ["banana", "paw-paw", "agbalumo", "watermelon"];
fruits.sort();
console.log(fruits);
// Using sort method for numbers
const scatNum = [23, 4.5, 0.7, 89, 300, 56, 34.87, 72];
scatNum.sort(ascendCompareFn);
//comparing in an ascending order
function ascendCompareFn(a, b) {
  return a - b;
}
//comparing in an descending order
// function descendCompareFn(a,b){
//     return b - a;
// }

scatNum.sort((a, b) => {
  return b - a;
});
console.log(scatNum);

//Reduce Method: used to add total items in an array
// let totalScatNum = scatNum.reduce(sumArrItems, 0)

function sumArrItems(acc, curr){
    return acc + curr
} 

let totalScatNum = scatNum.reduce((acc,num)=>{
    return acc + num
}, 0)

console.log(totalScatNum)