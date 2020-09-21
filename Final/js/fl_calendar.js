

/*
   Final Project

   calendar Form Script
   
   Author: Jiongjun Liu
   Date:   07/06/2020
   
   Filename: fl_calendar.js
   
   Function List
   =============
   



*/


var thisDay = new Date();

var tableHTML = "<table id='eventTable'><caption>Event Calendar</caption><tr><th>MON</th><th>TUE</th><th>WED</th><th>THUR</th><th>FIR</th><th>SAT</th><th>SUN</th></tr><tr><td></td><td></td>";


for (var i=0; i< eventDates.length; i++){
	
	var eventDate = new Date(eventDates[i]);
	
	if ( eventDate.getDay() == 1) {
		tableHTML += "</tr><tr>";
	}
	
	if (thisDay.getDate() == eventDate.getDate()) {
		tableHTML += "<td id='today'>"+ (i+1) + "<br><label>"+ eventDescriptions[i] + "</label></td>";
	} else {
		tableHTML += "<td>"+ eventDate.getDate() + "<br><label>"+ eventDescriptions[i] + "</label></td>";
	}
	
}

tableHTML += "</tr></table>";
document.getElementById("calendar").innerHTML = tableHTML;


	