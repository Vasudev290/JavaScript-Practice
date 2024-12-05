//For of [Array Method]

const numbers = [1,2,3,4,5,6,7,8,9,0]

for(const a of numbers){
    document.write(a + "<br>")
}


//for of {Object Method}

const SouthIndia = {
    TN:"Chennai",
    AP:"Amaravathi",
    TG:"Hydarbad",
    KL:"Kochi",
    KA:"Bangalore"
}

for (const x in SouthIndia) {
    document.write(SouthIndia[x] + "<br>")
}