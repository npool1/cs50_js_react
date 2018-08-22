/*

JS is interpreted which means that it's basically read line by line.

JS has dynamic typubg meaning that given a variable it has no type associate with it.

types:

primatives (are immutable):
undefined
null
boolean
number
string
(symbol) *ECMAS6 addition*

non primatives:
Objects

Typecasting
change one type to another type

coercion is the act of changing type

explicit vs implicit

const explicit = String(x); // explicit === '42'
const implicit = x + ''; // implicit === '42'

== vs ===

== coerces the types
=== requires equivalent types

falsy is any value if cast to bool is false and truthy visa versa 

which values are falsy?
-undefined
-null
-false
- +0, -0, NaN
-""

which values are truthy?
-{}
-[]
-Everything else

Primitives vs Objects
-primitives are immutable
-objects are mutable and stored by reference

passing by reference vs passing by value

Scope
-Variable lifetime
    -lexical scoping (var): from when they're declared until when their function ends
    -block scoping(const, let): until the next } is reached
-Hoisting
    -fuction definitions are hoisted but not lexically-scoped initializations

The JavaScript Engine

Before executing the code, the enging reads the entire file and will throw a syntax error if one is found:
-any function defs will be saved in memory
-variable initializations will not be run, but lexically-scoped variable names will be declared

global and window are node and browser equivalents

*/
