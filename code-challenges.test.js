// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// discribe("peopleInfo",(array)=>{
//   test("array of objects and return an array with a sentence about each person with their name capitalized")
// expect("peopleInfo"("[
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]")).toEqual("["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]")
// 
// 
var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// b) Create the function that makes the test pass.

// Parameter - array
// Iterate - map
// String interpolation
//Return a sentence about each person with their name capitalized.

const peopleInfo = (array) => 
{
  let peopleInfo = [people.map(value => name.charAt+ array.slice(1))];   
    return `${value.name} is a ${value.occupation}`
  })
}
console.log(peopleInfo(people))
console.log(people.length)
// 3 the amount of arrays
console.log(people[0].name)  
// ford prefect is at 0 index
// Expected output: ["Ford Prefect is a hitchhiker."

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

discribe("numBy3",(array)=>{
  test("function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3")
expect("[dividedBy3]"("[23, "Heyyyy!", 45, -10, 0, "Yo", false]"")).toEqual([ 2, 0, -1, 0 ]")

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// b) Create the function that makes the test pass.

const numBy3 = (array) =>
 {
  return hodgepodge1.filter value => 
  {
      return typeof value === 0
       {
        return value / 3
})
}
console.log(numBy3(hodgepodge1))

// Expected output: [ 2, 0, -1, 0 ]

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

discribe("numCubed",(array)=>{
  test("takes in an array of numbers and returns the sum of all the numbers cubed")
expect("numCubed"("[2, 3, 4]")).toEqual(" 99")

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125


// b) Create the function that makes the test pass.
const numCubed = (array)=>
{
  let newArr =[]
  for (let i=0; i<array.length; i++)
  {
    let numCubed = cubeAndSum1[i]* 3 * 3;
    console.log(numCubed);
newArr += [i].push(numCubed);
  {
    console.log(newArray)
    