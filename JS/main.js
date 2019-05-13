/*
Main JS File
Capstone Law & Public Safety 2019 Central Campus
Date: 3.29.19
Authors: Chad Williams, Gabriel Fuentes
*/
"use strict";

window.addEventListener('load', init);

function init() {
	// body...
	document.addEventListener('click', instructor);
}

function mobileNavToggle() {
	var mNav = document.getElementById("mobile").classList.toggle("open");
}



function instructorToggle() {
	document.getElementById("instructor").classList.toggle("closedInstructor")
}