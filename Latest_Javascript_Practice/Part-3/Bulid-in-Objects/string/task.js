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