//String Built-in Methods

//valueOf() method returns the primitive value of a string.
let str1 = new String("Hello, World")
console.log(str1.valueOf())  //Hello, World

let str2 = "JavaScript";
console.log(str2.valueOf())  //JavaScript

let str3 = "";
console.log(str3.valueOf())  //empty space

let str4 = new String("123456");
console.log(str4.valueOf())   //123456
console.log(typeof(str4.valueOf()))  //String


//length property => returns the number of characters in a string.
let text = "JavaScript";
console.log(text.length)  //10

let empty = "";
console.log(empty.length)  //0

let spaced = "Hello, World!"
console.log(spaced.length)  //=> even space also calculated total 13

let specialChar = "!@#$&_!*"
console.log(specialChar.length)   //8


//charAt() method returns the character at the specified index.
let str5 = "JavaScript Programming Language"
console.log(str5.charAt(2))  //v
console.log(str5.charAt(0))  //J
console.log(str5.charAt(9))  //t
console.log(str5.charAt(10))  //Space even space also calculated!
console.log(str5.charAt(str5.length -1))  //e
console.log(str5.charAt(100))  //empty string


//find the indexOf a substring (returns -1 if not found).
let sentence = "I Love JavaScript!"
console.log(sentence.indexOf("Love"))  //2
console.log(sentence.indexOf(2))   //-1  
console.log(sentence.indexOf("Python"))   //-1
console.log(sentence.indexOf("L", 2))   //2


//lastIndex of a substring (returns -1 if not found).
let tet = "Hello world, welcome to the world!";
console.log(tet.lastIndexOf("world"))  //29
console.log(tet.lastIndexOf("o"))
console.log(tet.lastIndexOf("Python"))  //-1
console.log(tet.lastIndexOf("world", 10))  //6


//concat() – Merge multiple Strings together.
let strA = "Hello";
let strB = "World!"

console.log(strA.concat(" ", strB))
console.log("Good".concat(" ", "Morning", "!"));
console.log("Front".concat("end", " ", "Devloper!"))
console.log("A".concat("B", "C", "D"))


//split(separator, limit) - Splits a string into an array.
let phrase = "Apple, Banana, Orange";
console.log(phrase.split(","))   //[ 'Apple', ' Banana', ' Orange' ]
console.log("Hello, World!".split(", "))  //[ 'Hello', 'World!' ]
console.log("a,b,c,d".split(","))  //[ 'a', 'b', 'c', 'd' ]
console.log("hello".split(""))  //[ 'h', 'e', 'l', 'l', 'o' ]


//slice(start, end) – Extract Part of a String.
let word = "JavaScript"
console.log(word.slice(0, 4))  //Java
console.log(word.slice(-6))   //Script
console.log(word.slice(2, 8))  //vaScri
console.log(word.slice(4))  //Script


//substring(start, end) – Similar to slice()
let msg = "Welcome";
console.log(msg.substring(0, 4))  //Wekc
console.log(msg.substring(2, 5))  //lco
console.log(msg.substring(3))  //come
console.log(msg.substring(4, 2))  //(swaps values if start > end)  lc


//replace(search, replaceValue) - Replaces a part of string.
let sentences = "Hello World!";
console.log(sentences.replace("World", "Everyone"))  //Hello Everyone!
console.log("Apple, Banana, Orange".replace(",", " and"))  //Apple and Banana, Orange
console.log("aaa".replace("a", "b"))  //baa, => only first occurrence
console.log("Learn JavaScript".replace(/JavaScript/i, "Python!"))  //Learn Python!


//toLowerCase() - convert into lowercase;
console.log("HELLO".toLowerCase())  //hello
console.log("Javascript".toLowerCase())   //javascript
console.log("Welcome to Coding".toLowerCase())  //welcome to coding
console.log("123ABC".toLowerCase())  //123abc


//toUpperCase() - convert into Uppercase;
console.log("hello".toUpperCase())
console.log("javascript".toUpperCase())
console.log("welcome to coding".toUpperCase())
console.log("123abc".toUpperCase())


//trim() Method - Removes whitespace from both ends of a string.
let string = "   Trim me!   ";

// Example 1: Removing spaces
console.log(string.trim()); // "Trim me!"

// Example 2: Trim and check length
console.log(string.trim().length); // 8

// Example 3: Trim user input
let userInput = "   user123   ";
console.log(`Welcome, ${userInput.trim()}!`); // "Welcome, user123!"

// Example 4: Trim on an empty string
console.log("   ".trim()); // ""
