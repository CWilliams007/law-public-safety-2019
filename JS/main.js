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
	var mNav = document.querySelector("#mobile");
}

function mobileNavToggle() {
	mNav = document.getElementById("mobile").classList.toggle("open");
}

function mobileNavScale() {
	mNav = document.getElementById("mobile").classList.remove("open");
}


function instructorToggle() {
	document.getElementById("instructor").classList.toggle("closedInstructor")
}