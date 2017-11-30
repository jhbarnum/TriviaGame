console.log('hello')

var correctAnswers = 0;
var incorrectAnswers = 0;
// Questions array
var questionArr = ['Who writes all of the lyrics for the rock band Rush?', 'Who was the lead singer for the band Genesis before Phil Collins?',
					'Who played drums on Frank Zappas Joes Garage?', 'Who was NOT an original member of Fleetwood Mac?',
                    "What year was Michael Jackson's Thriller released?", "Miles Davis played what instrument?", "According to the RIAA, what is the best selling album of all time?",
                    "Which came out first, Nirvana's Nevermind, Pearl Jam's Ten, Alanis Morrisette's Jagged Little Pill, Alice in Chains Facelift?", "Originally members of what band, Neal Schon and Gregg Rolie left what band to start Journey?",
                    "Who famously put in their performance contracts that the promoter shall provide a bowl of MandM's minus any brown ones?"];
// Possible answers array
var answerArr = [['Neil Peart','Jason Bonham', 'Tommy Lee','Butch Vig'],['Anders Brittan', 'Adam Ant', 'Peter Cetera', 'Peter Gabriel'],
				['Steve Gadd', 'Vinnie Caliuta', 'Andre 3000', 'Mitch Mitchell'],['Mick Fleetwood','Peter Green', 'Jeremy Spencer', 'Stevie Nicks'],
                ['1986', '1984', '1982', '1983'],['Piano', 'Guitar', 'Trumpet', 'Saxaphone'],['Eagles - Greatest Hits', 'Michael Jackson Thriller', 'Led Zepplin IV', 'Pink Floyd The Wall'],
                ["Nirvana's Nevermind","Pearl Jam's Ten","Alanis Morrisette's Jagged Little Pill", "Alice in Chains Facelift"],["The Birds", "The Mothers", "Santana", "Jimi Hendrix"],
                ["Mariah Carey", "Motley Crue", "Whitney Houston", "Van Halen"]];
// Correct answer 
var correctAnswerArr = ['Neil Peart', 'Peter Gabriel', 'Vinnie Caliuta', 'Stevie Nicks', '1982', 'Trumpet', 'Eagles - Greatest Hits','Alice in Chains Facelift','Santana','Van Halen'];
var chosenAnswer = "";
var number = 15;
var numberB = 5;
var numberC = 5;
var counter; 
var counterB;
var counterC;
var i = 0;
var winCount = 0;
var gameCount = 1;
var messageArr = ['You are soooooo smart', 'You are the smartest', 'teach me your ways', 'Bring it!', "You're killin' it", "OMG, I want to be you", "On Fire!", "Stop it, you're making me feel stupid", "Nice Brain", "Way to go!" ]
// Sets the interval countdown for the question timer
function run() {
	counter = setInterval(countdown, 1000);
    }
//Clears interval timers and counter displays
function stop() {
    clearInterval(counter); 
    clearInterval(counterB);
    clearInterval(counterC);
    numberB = 5;
    number = 15;
    numberC = 5;
    }
//Game over. Clears divs and tells you if you won or not.
function endGame() {
    // If you did well......
    if (winCount > 5) {
        $("#questionNumber").html("");
        $("#countdown").html("");
        $("#question").html('You got ' + winCount +' right! You Win!');
        $("#questionNum").html("");
        $("#one").html("");
        $("#two").html("");
        $("#three").html("");
        $("#four").html("");
        $("#rightAnswer").html("");  
        $("#choices").html("");
        stop();
    } else {
    // If you did not do well...
        $("#questionNumber").html("");
        $("#countdown").html("");
        $("#question").html('You got ' + winCount +' right. You should read a book.');
        $("#questionNum").html("");
        $("#one").html("");
        $("#two").html("");
        $("#three").html("");
        $("#four").html("");
        $("#rightAnswer").html("");  
        $("#choices").html("");
        stop();
    }
   
}
// Sets up the 15 second countdown screen with new input from timers and question arrays.
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
    $("#answer").show();
	if (number === 0) {
        stop();
        fiveSecondsTimeOut();
        console.log("stop");
        } 
    }
// 5 second countdown until new question if you got your question wrong
function fiveSeconds() {
	counterB = setInterval(getReady, 1000);
	}
// 5 second countdown until new question if you got your question wright  
function fiveSecondsCorrect() {
    counterB = setInterval(youRight, 1000);
    }
// 5 second countdown until new question if you did not answer and were timed out
function fiveSecondsTimeOut() {
    counterC = setInterval(timeOut, 1000);
    }
// Wrong answer display screen
function getReady() {
	numberB--;
    if (gameCount < 10) {
	   $("#countdown").html("<h2>" + numberB + "</h2>");
	   $("#question").html("Nope. The answer is...");
        $("#rightAnswer").html(correctAnswerArr[i]);
        $("#choices").html("Get ready for the next question");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    if (gameCount === 10) {
        $("#choices").html("Calculating Your Results");
        $("#countdown").html("<h2>" + numberB + "</h2>");
        $("#question").html("Nope. The answer is...");
        $("#rightAnswer").html(correctAnswerArr[i]);
        $("#choices").html("");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    // When countdown is over, return to next question
	if (numberB === 0) {
        stop();
        i++;
        run();
        gameCount++;
     }
     if (gameCount === 11) {
        endGame();
      }
 }
 // Timed out answer display screen
function timeOut() {
    numberC--;
    if (gameCount < 10) {
        $("#countdown").html("<h2>" + numberC + "</h2>");
        $("#question").html("Time's up. The answer is...");
        $("#rightAnswer").html(correctAnswerArr[i]);
        $("#choices").html("Get ready for the next question");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    if (gameCount === 10) {
        $("#choices").html("Calculating Your Results");
        $("#countdown").html("<h2>" + numberC + "</h2>");
        $("#question").html("The answer is...");
        $("#rightAnswer").html(correctAnswerArr[i]);
        $("#choices").html("");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    // When countdown is over, return to next question
    if (numberC === 0) {
        stop();
        i++;
        run();
        gameCount++;
     }
    if (gameCount === 11) {
        endGame();
    
      }
	}
// Right answer display screen
function youRight() {
    numberB--;
    if (gameCount === 10) {
        $("#choices").html("Calculating Your Results");
        $("#countdown").html("<h2>" + numberB + "</h2>");
        $("#question").html("");
        $("#rightAnswer").html("");
        $("#choices").html("");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    if (gameCount < 10) {
        $("#countdown").html("<h2>" + numberB + "</h2>");
        $("#question").html(messageArr[i]);
        $("#rightAnswer").html(correctAnswerArr[i]);
        $("#choices").html("Here comes the next question");
        $("#one").val("");
        $("#two").val("");
        $("#three").val("");
        $("#four").val("");
        $("#questionNumber").html("");
        $("#answer").hide();
    }
    
    if (numberB === 0) {
        stop();
        i++;
        run();
        gameCount++;
    }
    if (gameCount === 11) {
        endGame();
      }
    }
// Captures click value on choice 1 and checks for right answer
function clickOne () {
    chosenAnswer = answerArr[i][0];
    // if right, correct answer screen and add one to win count
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
    } else {
        // if wrong, wrong answer screen 
        stop();
        fiveSeconds();
    }
}
// Captures click value on choice 2 and checks for right answer
function clickTwo () {
    chosenAnswer = answerArr[i][1];
    // if right, correct answer screen and add one to win count 
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
    } else {
        stop();
        fiveSeconds();
    }
}
// Captures click value on choice 3 and checks for right answer
function clickThree () {
    chosenAnswer = answerArr[i][2];
    // if right, correct answer screen and add one to win count
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
    } else {
        stop();
        fiveSeconds();
    }
}
// Captures click value on choice 4 and checks for right answer
function clickFour () {
     chosenAnswer = answerArr[i][3];
     // if right, correct answer screen and add one to win count
    if (chosenAnswer === correctAnswerArr[i]) {
        stop();
        fiveSecondsCorrect();
        winCount++;
    } else {
        stop();
        fiveSeconds();
    }

}
$(document).ready(function() {
	run();

});

