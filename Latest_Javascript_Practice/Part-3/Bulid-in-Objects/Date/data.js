//Date Object & Methods 
//The Date object in JavaScript allows working with dates and times. 
//It provides various methods to get and manipulate date, month, year, day, hours, minutes, seconds, and more.

//Creating a Date Object
// const currentDate = new Date();
// console.log(currentDate);  
// Output: Current date & time (e.g., 2025-02-14T12:34:56.789Z)


// getFullYear() → Returns the year (4-digit)
console.log("Year")
const date1 = new Date();
console.log(date1.getFullYear()) //2025

const date2 = new Date("1999-07-10");
console.log(date2.getFullYear());   //1999

const date3 = new Date(2005, 0, 1);
console.log(date3.getFullYear());  //2005

const date4 = new Date("December 25, 2012 12:00:00");
console.log(date4.getFullYear());  //2012


//getMonth() → Returns the month (0-11)
console.log("Month")
const month1 = new Date();
console.log(month1.getMonth()) //1

const month2 = new Date("1999-07-10");
console.log(month2.getMonth());   //6

const month3 = new Date(2015, 11, 25);
console.log(month3.getMonth());  //11

const month4 = new Date("March 15, 2008 15:30:00");
console.log(month4.getMonth());  //2


//getDate() → Returns the day of the month (1-31)
console.log("Day")
const day1 = new Date();
console.log(day1.getDate())

const day2 = new Date("2023-09-05");
console.log(day2.getDate());

const day3 = new Date(2020, 6, 20);
console.log(day3.getDate());

const day4 = new Date("April 30, 2000 10:15:00");
console.log(day4.getDate());


//getDay() → Returns the day of the week (0-6)
console.log('Day')
const weekDay1 = new Date();
console.log(weekDay1.getDay());  //1 (Monday)

const weekDay2 = new Date("2023-09-05");
console.log(weekDay2.getDay());

const weekDay3 = new Date(2010, 10, 28);
console.log(weekDay3.getDay()); 

const weekDay4 = new Date("July 15, 2015");
console.log(weekDay4.getDay());



//getHours() → Returns the hour (0-23)
console.log("Hours")
const hour1 = new Date();
console.log(hour1.getHours());  

const hour2 = new Date("2023-12-01T09:30:00");
console.log(hour2.getHours());  // Output: 9

const hour3 = new Date(2005, 2, 15, 22);
console.log(hour3.getHours());  // Output: 22 (10 PM)

const hour4 = new Date("November 5, 2012 04:00:00");
console.log(hour4.getHours());  


//getMinutes() → Returns the minutes (0-59)
console.log("Minutes")
const min1 = new Date();
console.log(min1.getMinutes());  

const min2 = new Date("2023-07-10T12:20:00");
console.log(min2.getMinutes());  

const min3 = new Date(2015, 6, 15, 18, 55);
console.log(min3.getMinutes());  

const min4 = new Date("October 25, 2018 07:05:00");
console.log(min4.getMinutes());  


//getSeconds() → Returns the seconds (0-59)
console.log("Seconds")
const sec1 = new Date();
console.log(sec1.getSeconds());  

const sec2 = new Date("2022-05-15T10:15:25");
console.log(sec2.getSeconds());  

const sec3 = new Date(2000, 1, 5, 12, 45, 50);
console.log(sec3.getSeconds()); 

const sec4 = new Date("March 8, 2024 06:10:05");
console.log(sec4.getSeconds()); 


//toDateString() → Returns the date as a readable string
const today = new Date();
console.log(today.toDateString());  


//toLocaleDateString() → Returns the date in a localized format
const dateLocalized = new Date();
console.log(dateLocalized.toLocaleDateString());  


//setFullYear() → Sets the year
const newDate = new Date();
newDate.setFullYear(2030);
console.log(newDate.getFullYear());  // Output: 2030


//setMonth() → Sets the month (0-11)
const newMonth = new Date();
newMonth.setMonth(5);
console.log(newMonth.getMonth());  // Output: 5 (June)
