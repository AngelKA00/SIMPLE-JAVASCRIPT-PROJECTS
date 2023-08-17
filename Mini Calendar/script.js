// declare variables

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

// we need to give this since computer gives output only in numbers 
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths = ["January","February","March","April","May","June","July","August","September","October","November","December",]

// to get date,day,month,year from system 
// checks condition if the month is january then it will have 1, 
// it should display as "01" not "1"
date.innerHTML = (today.getDate() < 10 ? "0" : "") + today.getDate() ;
// weekdays is used here so today's day/month will give its name
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();