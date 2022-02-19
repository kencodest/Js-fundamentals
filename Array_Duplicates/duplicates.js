let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

function sortFruit() {
    
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎" + " "
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊" + " "
        }
    }
    let counts = {}
    fruit.forEach(function (x){
        counts[x] = (counts[x] || 0) + 1
    })
    
    appleShelf.textContent += " = " + counts["🍎"]
    orangeShelf.textContent += " = " + counts["🍊"]
}

sortFruit()
// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts.a)