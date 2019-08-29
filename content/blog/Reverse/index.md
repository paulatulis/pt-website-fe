---
title: Flip It and Reverse It
date: "2019-08-30T22:40:32.169Z"
description: 'Quick disclaimer: there are many different solutions to these questions, and all of them have been covered ad nauseam on the world wide web. This is simply a follow up to another blog post with some actual code. It is not fresh, nor is it original.' 
---

Quick disclaimer: there are many different solutions to these questions, and all of them have been covered ad nauseam on the world wide web. This is simply a follow up to another blog post with some actual code. It is not fresh, nor is it original. 

Okay, let’s get started!


###Reverse a string: 

Solution 1: Using a for loop with ES6 syntax

~~~~
function reverse(string){
  let reversedString = "";
  for(let letter of string){
    reversedString = letter + reversedString;
  }
  return reversedString;
}
~~~~

Solution 2: Relying on reduce

~~~~
function reverse(string){
  return string.split("").reduce((reverse, letter) => letter + reverse, "")
}
~~~~

Solution 3: If you're able to, just use the built-in method

~~~~
function reverse(string){
  return string.split("").reverse().join("");
}
~~~~


###Pig Latin: 

Since we now know how to reverse a string, making it into Pig Latin is just a small additional embellishment

Solution 1: If you can use the built-in reverse method, use it!
~~~~
function reverse(string){
  return string.split("").reverse().join("");
}
~~~~

###Most commonly used character: 
