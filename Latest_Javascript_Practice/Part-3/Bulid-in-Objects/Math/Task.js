//Random Dice Roll Simulator 🎲
function diceRoll(){
    let diceValue = Math.floor(Math.random() * 6) + 1 //Genarate 1 to 6
    console.log(`🎲 you rolled a ${diceValue}!`)
}
diceRoll()


//Find the Largest and Smallest Number in an Array
function findMinMax(number){
    let maxValue = Math.max(...number);
    let minValue = Math.min(...number);

    console.log(`🔺 Maximum Value: ${maxValue}`);
    console.log(`🔻 Minimum Value: ${minValue}`);
}

let numberValue = [10, 67, 4, 9, 54, 87, 65, 1, 9]
findMinMax(numberValue)

//Generate a Random Password
function genaratePassword(){
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    for(i=0; i<8; i++){
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex]
    }
    console.log(`🔑 Your Random Password: ${password}`);
}

genaratePassword()


//Create a function that generates a random number between any given min and max.
function getRandomNumbets(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(getRandomNumbets(5, 20))


//genarate four otp numbers
console.log(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)


//Genarate random Language
let language = ['Python', 'Javascript','PHP', 'Java', '.Net', 'Ruby']
//normal approach
let randomLanguage = Math.floor(Math.random() * language.length);
console.log(`🎲 Random Language: ${language[randomLanguage]}`)

//functionMethod
function getRandomLanguage(){
    let randomLanguage = Math.floor(Math.random() * language.length);
    return language[randomLanguage];
}
console.log(`🎲 Randomly Selected Language: ${getRandomLanguage()}`);