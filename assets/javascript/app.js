console.log('hello')

var correctAnswers = 0;
var incorrectAnswers = 0;

var questionArr = ['Who writes all of the lyrics for the rock band Rush?', 'Who was the lead singer for the band Genesis before Phil Collins?',
					'Who played drums on Frank Zappas Joes Garage?'];
var answerArr = [['Neil Peart','Jason Bonham', 'Tommy Lee','Butch Vig'],['Anders Brittan', 'Adam Ant', 'Peter Cetera', 'Peter Gabriel'],
				['Steve Gadd', 'Vinnie Caliuta', 'Andre 3000', 'Mitch Mitchell']];
var correctAnswerArr = ['Neil Peart', 'Peter Gabriel', 'Vinnie Caliuta'];
var chosenAnswer = "";
var i;
var number = 15;
var counter; 
var numberB = 5;
var counterB;
var i = 0;
var winCount = 0;
var gameCount = 1;
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
	counter = setInterval(countdown, 1000);
    }
function stop() {
    clearInterval(counter); 
    clearInterval(counterB);
    numberB = 5;
    number = 15;
    if (gameCount == 3)
        endGame();
	}
function endGame() {
    if (winCount > 5) {
        alert('You got ' + winCount +' right! You Win!')
    } else {
        alert('You got ' + winCount +' right. You should read a book.')
    }
}
function countdown() {
    number--; 
    $("#questionNumber").html("<h2>" + gameCount + "</h2>");
    $("#countdown").html("<h2>" + number + "</h2>");
    $("#question").html(questionArr[i]);
    $("#one").val(answerArr[i][0]);
    $("#two").val(answerArr[i][1]);
    $("#three").val(answerArr[i][2]);
    $("#four").val(answerArr[i][3]);
    $("#rightAnswer").html("");  
    $("#choices").html("");
	if (number === 0) {
        stop();
        fiveSeconds();
        console.log("stop");
      } else if (chosenAnswer === correctAnswerArr[i]) {
		stop();
        fiveSeconds();
        winCount++;
        console.log(winCount);
		}
    }
function fiveSeconds() {
	counterB = setInterval(getReady, 1000);
	}
function fiveSecondsCorrect() {
    counterB = setInterval(youRight, 1000);
    }
function getReady() {
	numberB--;
	console.log(numberB);
	$("#countdown").html("<h2>" + numberB + "</h2>");
	$("#question").html("Time's up. The answer is...");
    $("#rightAnswer").html(correctAnswerArr[i]);
    $("#choices").html("Get ready for the next question");
    $("#one").val("");
    $("#two").val("");
    $("#three").val("");
    $("#four").val("");
	if (numberB === 0) {
        stop();
        i++;
        run();
         gameCount++;
      }
	}
function youRight() {
    numberB--;
    console.log(numberB);
    $("#countdown").html("<h2>" + numberB + "</h2>");
    $("#question").html("You are sooooooooo smart!");
    $("#rightAnswer").html(correctAnswerArr[i]);
    $("#choices").html("Here comes the next question");
    $("#one").val("");
    $("#two").val("");
    $("#three").val("");
    $("#four").val("");
    if (numberB === 0) {
        stop();
        i++;
        run();
        gameCount++;
      }
    }
function clickOne () {
    chosenAnswer = answerArr[i][0];
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
        console.log(winCount);
    } else {
        stop();
        fiveSeconds();
    }
}
function clickTwo () {
    chosenAnswer = answerArr[i][1];
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
        console.log(winCount);
    } else {
        stop();
        fiveSeconds();
    }
}
function clickThree () {
    chosenAnswer = answerArr[i][2];
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
        console.log(winCount);
    } else {
        stop();
        fiveSeconds();
    }
}
function clickFour () {
     chosenAnswer = answerArr[i][3];
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
        console.log(winCount);
    } else {
        stop();
        fiveSeconds();
    }

}
$(document).ready(function() {
	run();
    // if (gameCount == 3) {
    //     stop();
    //     promt('Game Over');
    
});

