// Global Variables
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
// Keep textarea text in local storage
// Doing this in probably the most inefficient way ever...
$( function() {
    $("#btn1").on("click", function() {
        var nineAM = document.getElementById("9am").value;
        localStorage.setItem("9am", nineAM);
        console.log(localStorage);
    });
});
$("#9am").val(localStorage.getItem("9am"));

$( function() {
    $("#btn2").on("click", function() {
        var tenAM = document.getElementById("10am").value;
        localStorage.setItem("10am", tenAM);
        console.log(localStorage);
    });
});
$("#10am").val(localStorage.getItem("10am"));

$( function() {
    $("#btn3").on("click", function() {
        var elevenAM = document.getElementById("11am").value;
        localStorage.setItem("11am", elevenAM);
        console.log(localStorage);
    });
});
$("#11am").val(localStorage.getItem("11am"));

$( function() {
    $("#btn4").on("click", function() {
        var twelvePM = document.getElementById("12pm").value;
        localStorage.setItem("12pm", twelvePM);
        console.log(localStorage);
    });
});
$("#12pm").val(localStorage.getItem("12pm"));

$( function() {
    $("#btn5").on("click", function() {
        var onePM = document.getElementById("1pm").value;
        localStorage.setItem("1pm", onePM);
        console.log(localStorage);
    });
});
$("#1pm").val(localStorage.getItem("1pm"));

$( function() {
    $("#btn6").on("click", function() {
        var twoPM = document.getElementById("2pm").value;
        localStorage.setItem("2pm", twoPM);
        console.log(localStorage);
    });
});
$("#2pm").val(localStorage.getItem("2pm"));

$( function() {
    $("#btn7").on("click", function() {
        var threePM = document.getElementById("3pm").value;
        localStorage.setItem("3pm", threePM);
        console.log(localStorage);
    });
});
$("#3pm").val(localStorage.getItem("3pm"));

$( function() {
    $("#btn8").on("click", function() {
        var fourPM = document.getElementById("4pm").value;
        localStorage.setItem("4pm", fourPM);
        console.log(localStorage);
    });
});
$("#4pm").val(localStorage.getItem("4pm"));

$( function() {
    $("#btn9").on("click", function() {
        var fivePM = document.getElementById("5pm").value;
        localStorage.setItem("5pm", fivePM);
        console.log(localStorage);
    });
});
$("#5pm").val(localStorage.getItem("5pm"));

// Clear localStorage and refresh the page
$( function() {
    $("#btn10").on("click", function() {
        localStorage.clear();
        window.location.reload();
        console.log(localStorage);
    });
});


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