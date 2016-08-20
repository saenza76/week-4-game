var userNumber = 0
var counter = 0
var winCounter = 0
var lossCounter = 0

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var randomNumber = getRandomInt(19, 120);
	console.log(randomNumber);

//Random numbers for Gems
var diamondNumber = getRandomInt(1, 12);
	console.log(diamondNumber);
var emeraldNumber = getRandomInt(1, 12);
	console.log(emeraldNumber);
var rubyNumber = getRandomInt(1, 12);
	console.log(rubyNumber);
var sapphireNumber = getRandomInt(1, 12);
	console.log(sapphireNumber);

$(document).ready(function(){
	$('#randombox').text(randomNumber);


})


