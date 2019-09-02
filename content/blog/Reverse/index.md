---
title: Flip it and Reverse It
date: "2019-09-06T22:40:32.169Z"
description: placeholder
---
### Reverse a string
1. If you can use the built-in .reverse() function, use it!

```javascript 
function reverse(string) {
    return string.split('').reverse().join('')
}
```

2. Transform your given string to an array and iterate

```javascript 

function reverse(string){
    let array = string.split('')
    let reversed = ''
    
    for(let letter of array){
        reversed = letter + reversed
    }
    return reversed
}
```

### Identify the most frequently used character in a string
1. Iterate through the string to make it an object, then iterate through the object to tally

```javascript 
function maxChar(string){
    let object = {}
    let max = 0
    let mostUsed = ''

    for(let letter of string){
        if (object[letter]){
             object[letter] ++
        }
        else {
            object[letter] = 1
        }
    }

   for(let char in object){
       if (object[char] > max){
        max = object[char]
        mostUsed = char
       }
   }
   return mostUsed
}
```

### Check to see if two strings are anagrams of each other
1. Use regex (regular expressions) to remove any special characters or spaces, make it lowercase, then array it, sort, it, and join it

```javascript 
function anagrams(stringA, stringB){
    let arrayA = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
    let arrayB = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')

    return arrayA === arrayB
}
```

### Capitalize the first letter of each word in a string
1. PLaceholder

```javascript 
function capitalize(string){
  
}
```

### FizzBuzz
1. Use the modulo operator
```javascript
    function fizzBuzz(n){
        for (let i=1; i <= n; i++){
            if (i % 15 == 0) 
            console.log("FizzBuzz");
            
            else if (i % 3 == 0) 
            console.log("Fizz");
            
            else if (i % 5 == 0) 
            console.log("Buzz");
            
            else console.log(i);
        }
    }