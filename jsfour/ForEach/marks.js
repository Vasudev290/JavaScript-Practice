// sample of testing for each statement...

let marks = [35,30,40,30,25,10,12]
/* marks.forEach(()=>{
    console.log(marks);
}) */

let x = marks.forEach((marks)=>{
    return marks + 1
})
console.log(x);  // output : undefined