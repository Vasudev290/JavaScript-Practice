// Task -1, Count the Occurrences of a Word in a String
function countWordOccurences(str, word){
    let wordArray = str.toLowerCase().split(/\s+/) //convert the lowercase and string;
    return wordArray.filter(w => w === word.toLowerCase()).length
}
console.log(countWordOccurences("Hello world!, hello welcome, Hello Again!", "hello"))  //count - 3
console.log(countWordOccurences("javascript is great!, I Love JavaScript", "javascript"))  //count - 2
console.log(countWordOccurences("This is a test case!", "test"))  //count - 1


//Task -2 Extract the Domain Name from an Email Address.
function extractName(name){
    return name.substring(0, name.indexOf("@"))
}
console.log(extractName("vasukesavulu@gmail.com"))
console.log(extractName("arjun@gmail.com"))
console.log(extractName("krishna@gmail.com"))

function extractDomain(email){
    return email.substring(email.indexOf("@") +1)
}
console.log(extractDomain("vasukesavulu@gmail.com"))
console.log(extractDomain("vasudev290@github.io"))
console.log(extractDomain("vasudev2@linkdin.in"))


//Task -3 Replace All Vowels in a String with *
function replaceVowelValue(str){
    return str.replace(/[aeiouAEIOU]/g, "*")
}
console.log(replaceVowelValue("Hello, world!"))

//Extract vowels charcters
function extractVowelValue(str){
    return str.match(/[aeiouAEIOU]/g)?.join('') || ''
}
console.log(extractVowelValue("Welcome to Bangalore!"))


//Task 4: Reverse a String Without Using reverse()
function reverseString(str){
    let reverse = "";
    for(let i= str.length - 1; i>=0; i--){
        reverse += str[i]
    }
    return reverse;
}
console.log(reverseString("Hello"))
console.log(reverseString("Vasu Devu"))


//with reverse Method()
function reverseMethod(str){
    return str.split('').reverse().join('')
}
console.log(reverseMethod("Hi"))

//with reverse method in numbers
function reverseNumber(num, rev=0){
    if(num === 0){
        return rev
    }
    return reverseNumber(Math.floor(num / 10), rev * 10 + (num%10))
}
console.log(reverseNumber(12345670))

//Reverse the Numbers
function reverseNumbers(num){
    return num.toString().split('').reverse().join('');

}
console.log(reverseNumbers(21435687))


//Task 5: Check if a String is a Palindrome
function isPalidrome(str){
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reversedStr = cleanStr.split('').reverse().join('')
    let inPalidrome = cleanStr === reversedStr;
    return {
        original : cleanStr,
        reversed : reversedStr,
        isPalindrome: inPalidrome
    }
}
console.log(isPalidrome("madam"))
console.log(isPalidrome("Hello"))


//Task 6: Capitalize the First Letter of Each Word
function capitalizeWord(str){
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}
console.log(capitalizeWord("javscript is very interesting language!"))


//Task 7: Find the Longest Word in a Sentence
function longestWord(str){
    let words = str.split(" ")
    console.log(words)
    return words.reduce((long, current) => current.length > long.length ? current : long)
}
console.log(longestWord("I love programming with javascript"))


//Task 8: Count the Number of Vowels in a String
function countVowels(str){
    let matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0
}
console.log(countVowels("Hello Everyone, Learn Javascript!"))


//Task 9: Remove Duplicate Characters from a String & Number 

//without set object
function removeDuplicateWords(str){
    let uniqueStr = "";
    for(let i=0; i<str.length; i++){
        if(!uniqueStr.includes(str[i])){
            uniqueStr += str[i]
        }
    }
    return uniqueStr;
}
console.log(removeDuplicateWords("Chenna Kesavulu"))

//with using of set object
function removeDuplicate(str){
    return[...new Set(str)].join('')
}
console.log(removeDuplicate("JavaaScriipt"))


//without set object
function removeDuplicateNumber(num){
    let numStr = num.toString();
    let uniqueNum = "";

    for(let i=0; i < numStr.length; i++){
        if(!uniqueNum.includes(numStr[i])){
            uniqueNum += numStr[i]
        }
    }
    return parseInt(uniqueNum, 10)
}
console.log(removeDuplicateNumber(112234455678895))
console.log(removeDuplicateNumber(55984455478743325445))

//with set Object in Number
function removeDuplicateNumberInMethod(num){
    return parseInt([...new Set(num.toString())].join(''), 10)
}
console.log(removeDuplicateNumberInMethod(34255476766789786943))


//Task 10: Check if Two Strings Are Anagrams
function isAgrams(str1, str2){
    return str1.toLowerCase().split("").sort().join('') === str2.toLowerCase().split("").sort().join('')
}
console.log(isAgrams("silent", "listen"))
console.log(isAgrams("hello", "hi"))