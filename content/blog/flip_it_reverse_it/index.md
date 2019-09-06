---
title: Flip it and Reverse It
date: "2019-09-06T22:40:32.169Z"
description: In my last blog, I wrote about why technical interviews exist. In this post, I will break down a few very simple functions...
---

In my last blog, I wrote about why technical interviews exist. In this post, I will break down a few *very simple* functions. Please note: this blog post is not original in any way shape or form, but writing things like this 1) helps me to reinforce my own knowledge (I'm selfish), and 2) might be a good resource if you are just starting to work on small logic problems in JavaScript. 


### Reverse a string and return the result
<p align="center">
  <img width="460" height="300" src="./flip.png">
</p>

1. If you can use the built-in .reverse() function, use it!

```javascript 
function reverse(str) {
    return str.split('').reverse().join('')
}
```

2. Loop through that sucker

This approach is more conscientious of performance. If you're interested in learning more about the tradeoffs and considerations when looking at writing code for better performance, check out this resource on [Big O Notation](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity). 

```javascript 

function reverse(str){
    //create an empty string to return at the end
  let reversed = "";
  
  for (let i = str.length-1; i >= 0; i--){
      //set up for loop that increments until i reaches the end of the string
      //the first loop sets the 'reversed' string, which is empty, equal to whatever the letter of the string is on this particular loop
      //the next time through, that 'reversed' string has one letter in it, and the next letter in the string is added, thus beginning the reversal of the string
    reversed += str[i]
   }
   //don't forget to return!
   return reversed
}
```

### Identify the most frequently used character in a string
1. Iterate through the string to make it an object, then iterate through the object to tally. This approach is O(n), which means that as the data input increases, the function's performance will be linear in direct proportion. 

```javascript 
function maxChar(str) {
    //create an empty object so we can access values later on
    const charMap = {};
    //we'll need a counter to compare to so we can find whatever the maximum number of each character is
    let max = 0;
    //create empty maxChar variable so we can return the most used character at the end
    let maxChar = '';

    for(let char of str){
        //set up for...of loop in which each character in the string is called 'char'
        if(charMap[char]){
            //if the char at that particular place in the object exists, bump the value up 1
            charMap[char]++;
        } else {
            //if the char at that particular place in the object exists, set the value equal to 1
            charMap[char] = 1;
        }
    }
    //now, we have our charMap object constructed

    for(let char in charMap){
        //set up a for...in loop (use for...in for iterating through objects)
        if(charMap[char] > max){
            //if the value associated the the character is more than 0, set max equal to that number, and set maxChar equal to that char
            max = charMap[char];
            maxChar = char;
        }
    }
    
    //don't forget to return!
    return maxChar; 
}
```

### Check to see if two strings are anagrams of each other
1. Use regex (if you can remember the syntax)!

Regex (aka regular expressions) can remove special characters or spaces. Once that's taken care of, it's simple to make the string lowercase, turn it into an array, sort it, and join it back into a string. If the arrays match exactly, your function returns true. I like this method because it's not as much to type out; however, I can't remember regex to save my life, so I probably wouldn't gravitate toward this solution in an interview setting. It's also not optimal for performance. 

```javascript 
function anagrams(stringA, stringB){
    let arrayA = stringA.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
    let arrayB = stringB.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')

    return arrayA === arrayB
}
```
2. Loop it!

This solution is more typing, which I do not like. But it's also better in terms of Big O notation, which I do like. Life is about tradeoffs.

```javascript 

function anagrams(stringA, stringB){
    if (stringA.length !== stringB.length){
        //let's get this out of the way first. An easy way to end the program if we don't need to run the rest of the code!
        return false
    }
    //create empty object so we can compare characters later on
    let stringObject = {}

    for (letter of stringA){ 
        //set up for...of loop and use ternary expression to either add one to the value of the letter in the object or set it equal to one depending on if it already exists
        stringObject[letter] ? stringObject[letter] += 1 : stringObject[letter] = 1
    }

    for (letter of stringB){
        //if stringObject at the letter exists, subtract one from the value
        if(stringObject[letter]){
            stringObject[letter] -= 1
        }
        else {
            //if stringObject at the letter does not exist, it's not an anagram and we can return false
            return false
        }
    }
    return true
}
```


<br></br>
<p align="center">
  <img width="460" height="300" src="./clueless.gif">
</p>
I could keep going forever, but I will spare you. Instead I'll tell you to keep in mind that there are countless ways to write code that makes these little string goals work, so get out there into the world and explore. Try writing your own. Compare. Repeat. If you get this type of problem solving ability for free, thank your brain and rejoice. If not, know that it is okay, and the best way to get better at something is to practice! <-- (*me giving myself advice*)<br></br>