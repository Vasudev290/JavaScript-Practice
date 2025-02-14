//while loop => A loop that runs as long as a specific condition is true.

//syntex
// initialistion
// while(condition){
      //code block
// }

//print 1 to 10
let i=1;
while(i<=10){
    console.log(i)
    i++
}

//print 10 to 1
i=10;
while(i>=1){
    console.log(i)
    i--
}

//Write a program to print 1 to 10 numbers using a while loop
i=1;
while(i<=10){
    console.log(i)
    i++
}

//Write a program to print 10 to 1 numbers using a while loop
i=10;
while(i>=1){
    console.log(i)
    i--
}

//Write a program to print 10 to 15 numbers using a while loop
a=10;
while(a<=15){
    console.log(a)
    a++
}

//Write a program to print 15 to 10 numbers using a while loop
b=15;
while(b>=10){
    console.log(b)
    b--
}

//Write a program to print 1 to 10 even numbers using a while loop
c=2;
while(c<=10){
    console.log(c)
    c+=2
}

//Write a program to print 1 to 10 odd numbers using a while loop
d=1;
while(d<=10){
    console.log(d)
    d+=2
}


 // this condition was false that's why this not executing..!
 
e=1;
while(e>=10){ 
    console.log(e)
    e+=3
}



//Write a program first ten multiples of 4 using a while loop (4, 8, 12, 16…)
f=1;
while(f<=10){
    console.log(f*4)
    f++
}

//Write a program to print a multiplication table of 6 using a while loop.
e=1;
while(e<=10){
    console.log("6" + "x" + e + "=" + e*6)
    e++
}


///Write a program Factors of 24 using while loop (Factors of 24 are 1, ,3, 4, 6, 12, 24)

let num = 24;
let iValue = 1;
while(iValue <= num){
    if(num % iValue === 0 ){
        console.log(iValue)
    }
    iValue++
}