//THE CODE HERE IS PROVEN AND TESTED AS WORKING. UNCOMMENT THE CODE YOU NEED TO USE

// //function to arrange an array in ascending order
// const ascendFruits = ["Banana", "Orange", "Apple", "Mango"];
// ascendFruits.sort()
// console.log(`Ascending order: ${ascendFruits}`)

// //function to arrange an array in descending order. 
// //Sort the array in ascending order then reverse the array
// const descendFruits = ["Banana", "Orange", "Apple", "Mango"]
// descendFruits.sort()
// descendFruits.reverse()
// console.log(`Descending order: ${descendFruits}`)

//function to re-arrange an array of integers in ascending order
//the comparator function checks a-b;if a negative value is returned, a < b hence no swap needed; for the ascending case
//if a postive value is returned for a-b, it means a > b hence b and a should be swapped
// const ascendPoints = ["a", "A", "z", "Z", 0,1,2,3,4,5,40, 100, 1, 5, 25, 10]
// // ascendPoints.sort()
//  ascendPoints.sort(function(a, b){
//     console.log(a)
//     console.log(b)
//     console.log(`Subtraction: ${a - b}`)
//     console.log("New Set")
//     return a - b}
//     )

// const sorted = ascendPoints.sort()
// console.log(`Sorted: ${sorted}`)
// console.log(`Ascending order: ${ascendPoints}`)

// ascendPoints.forEach((ascendPoint) => {
//     console.log(ascendPoint, ' ', String(ascendPoint).charCodeAt(0))
// })

// //function to re-arrange an array of integers in descending order
// const descendPoints = [40, 100, 1, 5, 25, 10]
//  descendPoints.sort(function(a, b){
//     //  console.log(a,b)
// 	return b - a}
//     );

// console.log(`Descending order: ${descendPoints}`)

// //Another implementation which supposedly has a complex time complexity
// //using a for loop to sort in ascending order
// const numbers = [40, 100, 1, 5, 25, 10]

// for (let i=0; i<numbers.length; i++){
//     for (let j=i+1; j<numbers.length; j++){
//         if(numbers[i] > numbers[j]){
//             console.log(`Iteration: ${i}`)
//             console.log(numbers[i], numbers[j])
//             let t = numbers[i]
//             numbers[i] = numbers[j]
//             numbers[j] = t
//             console.log("Swapping the numbers")
//             console.log(numbers[i], numbers[j])
//             console.log({numbers})
//         }    
//     }
// }
// console.log(`Ascending order with a for loop:${numbers}`)

// //sort the properties of an object
// const spiceGirls = [
//     {name: "ginger", age:37},
//     {name: 'sporty', age:30},
//     {name: 'baby', age:19},
//     {name: "posh", age:20}
// ]
// //1. Sort to have age in ascending order
// spiceGirls.sort((a,b) => {
//     return a.age - b.age
// })
// console.log(spiceGirls)
// //2. Sort to have names in ascending order
// spiceGirls.sort((a,b) => {
//     //this conditions have to be specified explicitly for string object properties
//     if (a.name < b.name){
//         return -1
//     }
//     else if (a.name > b.name){
//         return 1
//     }
//     else {
//         return 0
//     }
// })
// console.log(spiceGirls)

//the sort function works with which is bigger based on 
//whether a negative (-1), or positive (1) or 0 is returned.
// if negative: a < b
// if positive: a > b
// if 0: a === b


//HOW TO SEARCH FOR ITEMS IN AN ARRAY
//1. Use of Array.filter()
// It outputs an array of the elements which satisfy the conditions specified in the callback function
// Returns an empty array if no oondition is met
const array = [10, 11, 3, 20, 5]

const greaterThanTen = array.filter(element => element >= 10)

console.log(greaterThanTen)

//2. Array.find()
// Returns the FIRST ELEMENT (not an array) which meets the specified condition in the callback
// Returns UNDEFINED if no element matches the given condition
const firstGreatTen = array.find((element) => element > 10)
console.log(firstGreatTen)

//3. Array.includes()
// Checks if a certain element is in the array and returns TRUE or FALSE
// Syntax: const includesValue = array.includes(valueToFind, fromIndex)
const includesTwenty = array.includes(20, 0)
console.log(includesTwenty)

//4. Array.indexOf()
// Looks for the index where the element appears first and retuns -1 if the elemet does not exist.

const indexOfThree = array.indexOf(3)
console.log(indexOfThree)

//what is a callback function => It is a function invoked insode another function