$(document).ready(function(){
	var $rpsHeader = $('#rps_header');
	var $rulesButton = $('#show_rules');
	var $rulesContent = $('#rules');
	var $nameInput = $('#name_input');
	var $gameButtons = $('.game_button');
	var $rock = $('#rock');
	var $paper = $('#paper');
	var $scissors = $('#scissors');
	var $winner = $('#winner');
	var $playButton = $('#play_button');
	var gameChoices = ['Rock', 'Paper', 'Scissors'];
	var cpuChoice = '';
	var userChoice;
	var winnerString = '';

	$gameButtons.click(function() {
		cpuChoice = gameChoices[Math.floor ( Math.random() * gameChoices.length )];
	});

	$rock.click(function() {
		switch(cpuChoice) {
			case "Rock":
				$winner.val("You Tied!");
				break;
			case "Paper":
				$winner.val("You Lose!");
				break;
			case "Scissors":
				$winner.val("You Win!");
				break;
			default:
				console.log("cpu didnt work");
		}
	});

	$paper.click(function() {
		switch(cpuChoice) {
			case "Rock":
				$winner.val("You Win!");
				break;
			case "Paper":
				$winner.val("You Tied!");
				break;
			case "Scissors":
				$winner.val("You Lose!");
				break;
			default:
				console.log("cpu didnt work");
		}
	});

	$scissors.click(function() {
		switch(cpuChoice) {
			case "Rock":
				$winner.val("You Lose!");
				break;
			case "Paper":
				$winner.val("You Win!");
				break;
			case "Scissors":
				$winner.val("You Tied!");
				break;
			default:
				console.log("cpu didnt work");
		}
	});

	$nameInput.keyup(function(e){
		if(e.keyCode === 13){
			var nameValue = $nameInput.val();
			if(nameValue.length) {
			  $rpsHeader.text('Welcome to Rock-Paper-Scissors, ' + nameValue);
				$nameInput.removeClass('error-border')
			} else {
				alert('You need to add a name!');
				$nameInput.addClass('error-border');
				$rpsHeader.text('Rock, Paper, Scissors');
			}
		}
	});

	$rulesButton.click(function(){
		$rulesContent.slideToggle();
	});

	$rpsHeader.mouseenter(function(){
		// $calcHeader.css('color', 'red');
		$rpsHeader.addClass('black');
	});

	$rpsHeader.mouseout(function(){
		// $calcHeader.css('color', 'blue');
		$rpsHeader.removeClass('black');
	});
});
