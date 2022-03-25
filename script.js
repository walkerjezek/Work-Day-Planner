// Global Variables
// Times
var am9 = 9;
var am10 = 10;
var am11 = 11;
var pm12 = 12;
var pm1 = 13;
var pm2 = 14;
var pm3 = 15;
var pm4 = 16;
var pm5 = 17;
var hourBlock = $('.description');

//-----------------------------------------------------------------
//Todays date
var today = moment();
$("#currentDay").text(today.format("LL"));

var today = moment();
$("#currentTime").text(today.format("hh:mm a"));


//-----------------------------------------------------------------
// Function to add background based on time of day
var currentTime = moment().format("hh");
console.log(currentTime);

function colorChange() {
    if (currentTime < 18) {
        hourBlock.setAttribute("class", "past");
    }
}




//-----------------------------------------------------------------
// Keep text in local storage