var userNumber = 0
var counter = 0
var winCounter = 0
var lossCounter = 0

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reset(){
	function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	var randomNumber = getRandomInt(19, 120);
	console.log(randomNumber);	

	$('#randombox').text(randomNumber);

	userNumber = 0;

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


	$('#diamond').click(function(){
		userNumber = userNumber + diamondNumber;
		console.log(userNumber);
		$('#currentscore').text(userNumber);
		if (userNumber === randomNumber){
			alert("You Win!");
			winCounter++;
			$('#wins').text("Wins: " + winCounter);
			reset()
		}else if (userNumber > randomNumber){
			alert("You Lose!");
			lossCounter++;
			$('#losses').text("Losses: " + lossCounter);
			reset()
		}
	})

	$('#emerald').click(function(){
		userNumber = userNumber + emeraldNumber;
		console.log(userNumber);
		$('#currentscore').text(userNumber);
		if (userNumber === randomNumber){
			alert("You Win!");
			winCounter++;
			$('#wins').text("Wins: " + winCounter);
			reset()
		}else if (userNumber > randomNumber){
			alert("You Lose!");
			lossCounter++;
			$('#losses').text("Losses: " + lossCounter);
			reset()
		}
	})

	$('#ruby').click(function(){
		userNumber = userNumber + rubyNumber;
		console.log(userNumber);
		$('#currentscore').text(userNumber);
		if (userNumber === randomNumber){
			alert("You Win!");
			winCounter++;
			$('#wins').text("Wins: " + winCounter);
			reset();
		}else if (userNumber > randomNumber){
			alert("You Lose!");
			lossCounter++;
			$('#losses').text("Losses: " + lossCounter);
			reset()
		}
	})

	$('#sapphire').click(function(){
		userNumber = userNumber + sapphireNumber;
		console.log(userNumber);
		$('#currentscore').text(userNumber);
		if (userNumber === randomNumber){
			alert("You Win!");
			winCounter++;
			$('#wins').text("Wins: " + winCounter);
			reset()
		}else if (userNumber > randomNumber){
			alert("You Lose!");
			lossCounter++;
			$('#losses').text("Losses: " + lossCounter);
			reset()
		}
	})

		$('#wins').text("Wins: " + winCounter);
		$('#losses').text("Losses: " + lossCounter);


})


