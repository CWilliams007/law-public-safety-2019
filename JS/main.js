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
	mobileNavToggle();
}

function mobileNavToggle() {
   var mNav =  document.getElementById("mobile").classList.toggle("close");
}

function instructor(e) {
	// body...
	var iPhoto = document.getElementById('iPhoto');
	
	var pic = document.createElement("img");
}

