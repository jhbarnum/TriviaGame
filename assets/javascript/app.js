console.log('hello')

var correctAnswers = 0;
var incorrectAnswers = 0;

var questionArr = ['Who writes all of the lyrics for the rock band Rush?',]
var answerArr = [['Neil Peart ','Jason Bonham ', 'Tommy Lee ']]
var correctAnswerArr = ['Neil Peart']
var chosenAnswer = 'Neil Peart';
var i = 0;


var number = 15;
var intervalId;
setTimeout(tenSeconds, 1000 * 15); 



//don't use a for loop. use the intervals. ex. if (intervalID === 0)
												//  "you have timed out.  next question in..."
												// 	change to wait screen for 5 seconds.
												// new question load with new question
												// if (guessed answer is correct)
												// 	change to wait screen for 5 seconds.
												// /	throw "correct"
												// 	move to new question
													// 	change to wait screen for 5 seconds.
												// new question load with new question

function run() {
	intervalId = setInterval(countdown, 1000);
    }

   // for
function countdown() {
    number--; 
    $("#countdown").html("<h2>" + number + "</h2>");
    $("#question").html(questionArr[0]);
    $("#answer").html(answerArr[0]);
	
	if (number === 0) {
        stop();
        fiveSeconds();
      }
    }
function stop() {
    clearInterval(intervalId); 
}
function tenSeconds() {
	console.log(questionArr[0])
	console.log(answerArr[0])
	if (chosenAnswer === correctAnswerArr[0]) {
		console.log('correct')
		
		}
}
function fiveSeconds() {
	$("#countdown").html("<h2>" + number + "</h2>");
	$("#question").html("Time's up. The answer is...");
    $("#answer").html(correctAnswerArr[0]);
    $("#choices").html("Get ready for the next question");
    // setTimeout(fiveSeconds, 1000 * 1);
    number = 5;
    if (number = 0) {
    	run();
    	
    }
  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  
  console.log("10 seconds left");
}

$(document).ready(function() {
	run();

	



});

