const time = new Date();
console.log(time)

// CREATING A NEW DATE

//TYPE 1
const time1 = new Date("2015-03-25");
console.log(time1)

//TYPE 2
const time3 = new Date(100000000000);
console.log(time3)

//TYPE 3
const time4 = new Date(2024, 11, 24, 10, 33, 30, 0);
console.log(time4)

//DATE METHODS

//getDate
const d = new Date("May 30, 2024 02:19:00");
let day = d.getDate();
console.log(day)

//getDay
const d1 = new Date("May 30, 2024 02:19:00");
let day1 = d.getDay();
console.log(day1)

//getFullYear
const d2 = new Date("May 30, 2024 02:19:00");
let day2 = d.getFullYear();
console.log(day2)

//getHour
const d3 = new Date("May 30, 2024 02:19:00");
let day3 = d.getHours();
console.log(day3)

//getMilliseconds
const d4 = new Date("May 30, 2024 02:19:00");
let day4 = d.getMilliseconds();
console.log(day4)

//getDay
const d5 = new Date("May 30, 2024 02:19:00");
let day5 = d.getMinutes();
console.log(day5)

//getMonth
const month = ["January","February","March",
"April","May","June",
"July","August","September",
"October","November","December"];
const d6 = new Date();
let name = month[d.getMonth()];
console.log(name);

//getSeconds
const d7 = new Date();
let seconds = d7.getSeconds();
console.log(seconds);
