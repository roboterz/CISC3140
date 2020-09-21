
/*
   Final Project

   Gallery Form Script
   
   Author: Jiongjun Liu
   Date:   07/06/2020
   
   Filename: fl_gallery.js
   
   Function List
   =============
   
   nextPic()
      show next picture
      
   currentDiv()
      call showDivs function and save current order number
      
   showDivs()
      show clicked picture.


*/



window.setInterval(nextPic, 2000);

	
function nextPic(){
	var cid = document.getElementById("currentID").value;
	cid = cid*1  + 1;
	if (cid > 12){
		cid = 1;
	}
	currentDiv(cid);
}

function currentDiv(n) {
	showDivs(slideIndex = n);
	document.getElementById("currentID").value = n;
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("thumb");
	if (n > x.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = x.length
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" opacity-off", "");
	}
	x[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " opacity-off";
}
