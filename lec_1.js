/*

Transpilers take new code from "future" versions of JS and make them backwards compatible.

Types of transpilers:
Babel
TypeScript
CoffeeScript
*/
//closure
function makeHelloFunction(){
    const message ='hello!'

    function sayHello(){
        console.log(message)
    }
    return sayHello
}
const sayHello = makeHelloFunction()

console.log('typeof message: ', typeof message)
console.log(sayHello.toString())
//closureBug

function makeFunctionArray(){
    const arr = []

    for (var i = 0; i < 5; i ++){ //should be let i = 0
        arr.push(function () { console.log(i)})
    }

    return arr
}
const functionArr = makeFunctionArray()

functionArr[0]()

/*
let allows you to declare variables that are limited in scope to the block, statement, 
or expression on which it is used. This is unlike the var keyword, which defines a variable 
globally, or locally to an entire function regardless of block scope.

IIFE (pronounced "IF-EE")
stands for immediately invoked function expression
-a function expresssion that gets invoked immediately
-creates closure
-doesn't add to or modify global object
*/

const sayHello = (function () {
    var message ='hello!'
    function sayHello(){
        console.log(message)
    }
    return sayHello
})()
    
console.log('typeof message: ', typeof message)
console.log(sayHello.toString())

//
const counter = (function(){
    let count = 0

    return {
        inc: functino() {count = count + 1},
        get: function(){ console.log(count)},
    }
})()

/*
First class Functions

-functions are treated the same way as any other value
    -can be assigned to variables, array values, object values
    -can be passed as arguments to other functions
    -can be returned from functions
-Allows for the creation of higher-order functions
    -Either takes one or more functions as arguments or returns a function
    -map(),filter(),reduce()
*/

//implementation of map()

function map(arr,fn){
    const newArr = []

    arr.forEach(function(val) {
        newArr.push(fn(val))
    })

    return newArr
}

function addOne(num) {return num + 1}

const x = [0,1,2,3]

console.log(map(x, addOne))

/*
Synchronus? Async? Single-Threaded?

-JS is single-threaded synchronous language
-A function that takes a long time to run will cause a page to become unresponsive

-JS has functions that act asynchronously

Asynchronous JS

Execution Stack:
    -functions invoked by other functions get added to the call stack
    -When functions complete, they are removed from the stack and the frame below continues
     executing
*/

function addOne(num){
    console.log("addOne")
      return num + 1
  }
  function getNum(){
    console.log("getNum")
      return addOne(10)
  }
  function c(){
    console.log("c")
      console.log(getNum()+getNum())
  }
  c()
/*
c() returns the following:
c
getNum
addOne
getNum
addOne
22
Allowing us to see the call stack (visually inverted)
so order of events is:
c() is called
getNum is called
add One is called
getNum is called
add One is called
c finishes up and returns 22

Browser APIs:
functions that run in the browser but not necessarily in JS
hold functions until they run then passes them to function queue

Function queue:
behaves as queue data stucture (fifo) holds function until event loop dictates
it should be moved to top of stack

Event Loop:
Metrnome that tracks the order of operations.

Stack is always handled first

Callbacks
-control flow with asynchronus calls
-Execute function once asynchronous call returns value
  -program doesn't have to talk and wait for value

Example: */

function doSomething(callback){
     console.log(callback(1))
}
//logs 1

function doSomethingAsync(callback){
    setTimeout(function() {callback(1)}, 1000)
}
doSomethingAsync(console.log)

/*

Promises

it's an object that alleviates call back hell
    -Allows you to write code that assumes a value is returned with a success function
    -only needs a single error handler

*/

const url = ''

fetch(url)
    .then(function(res)) {
        return res.json()
    })
    .then(function(json) {
        return({
            importantData: json.importantData,
        })
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(err) {
        //handle error
    })
...
/*

This

-Referes to an object that's set at the creation of a new executino context(function invocation)
-In the global execution context, refers to global object
-if Function is call as a method of an object,'this' is bound to the object the method is called on

*/

const person = {
    name: 'jordan',
    greet: function() { console.log(this.name)},
}

person.greet()

//jordan

const greet = person.greet

greet()

//undefined

const friend = {
    name: 'david'
}

friend.greet = person.greet

friend.greet()

//david

/*

Browsers and the DOM

-browsers render HTML to a webpage
-HTML defines a tree-like structure
-browsers construct this tree in memory before painting the page
-tree is called the Document Object Model (DOM)
-The DOM can be modified using JS