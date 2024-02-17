// Write, Edit and Run your Javascript code using JS Online Compiler


let numbers = [12,3,89,4,22,99,3];

//ForEach
console.log("ForEach: ")
numbers.forEach((number) => {
     console.log(number," ");
})


//Map
console.log("Map: ")
let names = ["bony", "kalab", "gosa", "biruk"]
let nameUpperCase = names.map(name=> name.toUpperCase());
console.log(nameUpperCase);


// Filter
console.log("Filter: ")
const continents = ["Asia","Africa","North America", "South America", "Antarctica", "Europe","Australia"]

let filtered = continents.filter(continent => continent.startsWith('A'));

console.log(filtered)


//Every

console.log("Every: ")
var x = numbers.every(num => num > 0)
console.log(x)


// Some
console.log("Some: ")
var y = numbers.some(num => num > 10);
console.log(y);

// Reduce
console.log("Reduce: ")
var sum = numbers.reduce((acc, nxt) => acc + nxt);
console.log(sum);
