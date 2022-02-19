//In this file we will have a look at several string methods in Js
const stringOne = "Freecodecamp is the best place to learn"
const stringTwo = "frontend and backend development"


//1. charAt() - returns the character at a given index
console.log(`Character at index 0: ${stringOne.charAt(0)}\n`)

//2. charCodeAt() - returns the ASCII code for a character at a given index
console.log(`ASCII code at index 0 : ${stringOne.charCodeAt(0)}\n`)

//3. concat() - joins two strings and returns one joined string
console.log(`The two strings combined read: "${stringOne.concat(stringTwo)}"\n`)

//4. endsWith() - checks whether a string ends with a specified character /string
console.log(`Does stringOne end with "learn": ${stringOne.endsWith("learn")}\n`)

//5. fromCharCode() - converts ASCII code values to characters
console.log(`The character represented by code 70 is: ${String.fromCharCode(70)}\n`)

//6. includes() - checks whether a string contains a specified string/haracter
console.log(`Does stringTwo include "and": ${stringTwo.includes("and")}\n`)

//7. indexOf() - returns the index of the first occurence of a character/string
console.log(`The index of e in stringTwo is: ${stringTwo.indexOf("e")}\n`)

//8. lastIndexOf() - checks the last index of the occurence of a given character/string
console.log(`The last index of e in stringTwo is: ${stringTwo.lastIndexOf("e")}\n`)

//9. match() - checks for the occurence of a regular expression in a string and returns the match as an array
//Here “g” flag indicates that the regular expression should be tested against all possible matches in a string. 
console.log(`Match "end" in stringTwo: ${stringTwo.match(/end/g)}\n`)

//10. repeat() - repeats a given string the specified number of times
console.log(`stringOne repeated two times is: ${stringOne.repeat(2)}\n`)

//11.replace() - checks a string for a given regex and replaces it with the given regex if a match is found
console.log(`Replace "end" with "END"in stringTwo: ${stringTwo.replace(/end/g, "END")}\n`)

//12.search() - searches the given character/string and returns the indexof the first occurence
//similar to indexOf()
console.log(`The postion/index of "end" in stringTwo is: ${stringTwo.search("end")}\n`)

//13. slice() - extract a part of string specified using index; slice(startIndex, stopIndex)
//It does not include the last index
console.log(`Slice stringTwo: ${stringTwo.slice(2, 5)}\n`)

//14. substring()  - works exactly the same as slice() above
console.log(`Slice stringTwo using substring(): ${stringTwo.substring(2,5)}\n`)

//15. split() - splits a string into an array of substrings
console.log(`${stringOne.split("e")}\n`)

//16. startWith() - check whether a givrn string starts with a given character/string
console.log(`Check if stringOne starts with "free": ${stringOne.startsWith("free")}\n`)

//17. substr() - extracts characters from a string begining from a specified position and  counts charachers forward
console.log(`Extract four characters from stringTwo starting from position 3: ${stringTwo.substr(2, 4)}\n`)

//18. toLowerCase() - makes the string to all lowercase letters
console.log(`Lowercase stringOne: ${stringOne.toLowerCase()}\n`)

//19. toUpperCase() - makes the string to all uppercase letters
console.log(`Uppercase stringOne: ${stringOne.toUpperCase()}\n`)

//20. trim() - removes whitespaces from both sides of a string
const stringThree = "                Hello World               "
console.log(`Without spaces: ${stringThree.trim()}\n`)


//splice() - can be used to add or remove elements in an array
//splice(indexToAddNewElements, numberOfElementsToRemove, newElementsToAdd)
//returns an array of the elements that have being removed
const numbers = [1,2,3,4,5]
const removed = numbers.splice(2, 2,"I was added after 3 and 4 were removed")
console.log(removed)
console.log(numbers)

//One of the main differences of splice and slice is that splice() alters the original array while slice()does not
const newNum = numbers.slice(1, 3)
console.log(newNum)