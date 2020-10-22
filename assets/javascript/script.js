$(document).ready(function () {

    //Displays current day and time using moment
    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    //Defines variable for now that pulls the current time
    var now = parseInt(moment().format('HH'));
    
    //Definines variables for the textareas for each row for time
    var $text9AM = $("#text9AM");
    var $text10AM = $("#text10AM");
    var $text11AM = $("#text11AM");
    var $text12AM = $("#text12AM");
    var $text1PM = $("#text1PM");
    var $text2PM = $("#text2PM");
    var $text3PM = $("#text3PM");
    var $text4PM = $("#text4PM");
    var $text5PM = $("#text5PM");

    //Function to determine if a meeting is in the past, present or future by comparing the time of the meeting to the current time
    $("textarea").each(function () {
        var hour = parseInt($(this).attr("name"));

        //If the hour of the meeting has past, show the row as grey 
        if (hour < now) {
            $(this).addClass("past");
        }

        //If the hour of the meeting is in the future, show the row as green 
        if (hour > now) {
            $(this).addClass("future")
        }

        //If the hour of the meeting is now, show the time as red 
        if (hour === now) {
            $(this).addClass("present")
        }
    })

    $("button").on("click", function () {
        //Sets items in the local storage
        localStorage.setItem("9AM", ($text9AM.val()))
        localStorage.setItem("10AM", ($text10AM.val()))
        localStorage.setItem("11AM", ($text11AM.val()))
        localStorage.setItem("12AM", ($text12AM.val()))
        localStorage.setItem("13PM", ($text1PM.val()))
        localStorage.setItem("14PM", ($text2PM.val()))
        localStorage.setItem("15PM", ($text3PM.val()))
        localStorage.setItem("16PM", ($text4PM.val()))
        localStorage.setItem("17PM", ($text5PM.val()))
    })

    //Gets the content stored and sends it to the screen. The meetings on the calendar will stay when the page refreshes 
    $("#text9AM").append(localStorage.getItem("9AM"));
    $("#text10AM").append(localStorage.getItem("10AM"));
    $("#text11AM").append(localStorage.getItem("11AM"));
    $("#text12AM").append(localStorage.getItem("12AM"));
    $("#text1PM").append(localStorage.getItem("13PM"));
    $("#text2PM").append(localStorage.getItem("14PM"));
    $("#text3PM").append(localStorage.getItem("15PM"));
    $("#text4PM").append(localStorage.getItem("16PM"));
    $("#text5PM").append(localStorage.getItem("17PM"));
})


