

var currentDayEl = $("#currentDay");
// displays the current date 
function displayDate() {
  var rightNow = dayjs().format("dddd, MMMM DD");
  currentDayEl.text(rightNow);
}
displayDate();


var userInput = document.querySelector("textarea");
var date = dayjs().hour();
console.log(date);



// saveBtn click event listener- stores items in local storage
$(".saveBtn").on("click", function () {
  // Get nearby values of the description in JQuery
  var text = $(this).siblings(".description").val();
  var events = $(this).parents().attr("id");
  console.log(events);
  // Save text in local storage
  localStorage.setItem(events, text);
})

// get items from local storage after page has been refreshed
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));



function schedule() {
  //go through each time block
   var blockTime = document.querySelector("#time-block");
  
    //check the time and add the classes for background indicators
    if (blockTime < date) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
      console.log();
    }
    else if (blockTime === date) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
      
    }
  }
  console.log(blockTime);


// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.