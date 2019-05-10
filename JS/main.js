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
	mobileNavToggle();
}

function mobileNavToggle() {
   var mNav =  document.getElementById("mobile").classList.toggle("close");
   var iPhoto = document.getElementsByClassName('iPhoto').classList.toggle("show");
}

