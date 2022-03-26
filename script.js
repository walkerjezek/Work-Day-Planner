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

// Gather the elements
var nine = document.getElementById('9am');
var ten = document.getElementById('10am');
var eleven = document.getElementById('11am');
var twelve = document.getElementById('12pm');
var one = document.getElementById('1pm');
var two = document.getElementById('2pm');
var three = document.getElementById('3pm');
var four = document.getElementById('4pm');
var five = document.getElementById('5pm');

// Store these items in an array to iterate through in the for loop?




//-----------------------------------------------------------------
//Todays date and time
var today = moment();
$("#currentDay").text(today.format("LL"));

var today = moment();
$("#currentTime").text(today.format("hh:mm a"));


//-----------------------------------------------------------------
// Using Moment to grab the current time
var currentTime = moment().format("HH");
console.log(currentTime);


//-----------------------------------------------------------------
// Loop for color coding time blocks
// for (i = 9; i < 18; i++) {
//     if (currentTime == i) {
//         nine.setAttribute("class", "present");
//     } else if (currentTime > i) {
//         nine.setAttribute("class", "past");
//     } else {
//         nine.setAttribute("class", "future")
//     }
// };


//-----------------------------------------------------------------
// Keep textarea text in local storage. Doing this in probably the most inefficient way ever
$( function() {
    $("#btn1").on("click", function() {
        var nineAM = document.getElementById("9am").value;
        localStorage.setItem("9am", nineAM);
        console.log(localStorage);
    });
});
$("#9am").val(localStorage.getItem("9am"));




//-----------------------------------------------------------------
// Horribly inefficient way of color coding the time blocks but it works so....
if (currentTime == 9) {
    nine.setAttribute("class", "present");
} else if (currentTime > 9) {
    nine.setAttribute("class", "past")
} else {
    nine.setAttribute("class", "future")
}

if (currentTime == 10) {
    ten.setAttribute("class", "present");
} else if (currentTime > 10) {
    ten.setAttribute("class", "past")
} else {
    ten.setAttribute("class", "future")
}

if (currentTime == 11) {
    eleven.setAttribute("class", "present");
} else if (currentTime > 11) {
    eleven.setAttribute("class", "past")
} else {
    eleven.setAttribute("class", "future")
}

if (currentTime == 12) {
    twelve.setAttribute("class", "present");
} else if (currentTime > 12) {
    twelve.setAttribute("class", "past")
} else {
    twelve.setAttribute("class", "future")
}

if (currentTime == 13) {
    one.setAttribute("class", "present");
} else if (currentTime > 13) {
    one.setAttribute("class", "past")
} else {
    one.setAttribute("class", "future")
}

if (currentTime == 14) {
    two.setAttribute("class", "present");
} else if (currentTime > 14) {
    two.setAttribute("class", "past")
} else {
    two.setAttribute("class", "future")
}

if (currentTime == 15) {
    three.setAttribute("class", "present");
} else if (currentTime > 15) {
    three.setAttribute("class", "past")
} else {
    three.setAttribute("class", "future")
}

if (currentTime == 16) {
    four.setAttribute("class", "present");
} else if (currentTime > 16) {
    four.setAttribute("class", "past")
} else {
    four.setAttribute("class", "future")
}

if (currentTime == 17) {
    five.setAttribute("class", "present");
} else if (currentTime > 17) {
    five.setAttribute("class", "past")
} else {
    five.setAttribute("class", "future")
}

