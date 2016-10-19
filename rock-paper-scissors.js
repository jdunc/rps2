$(document).ready(function (){
  userChoice = prompt("Do you choose rock, paper, scissors, spock or lizard?");
  if(userChoice == "lizard" || userChoice == "rock" || userChoice == "spock" || userChoice == "paper" || userChoice == "scissors"){
  } else{
    prompt("please choose one of the five options");
    $(".again").css("display","inline");
    $(".compare").css("display","none");

  }
});


var computerChoice = Math.random();

if (computerChoice <= 0.20) {    
  computerChoice = "rock";
} else if (computerChoice <= 0.40) {
  computerChoice = "paper";
} else if (computerChoice <= 0.60) {
  computerChoice = "scissors";
}else if (computerChoice <= 0.80) {
  computerChoice = "spock";
}else {
  computerChoice = "lizard";
}
var playAgain = function(){
  document.location.reload();

};
var compare = function(userChoice, computerChoice) {
  console.log(userChoice);
if (userChoice === computerChoice) {
    $("#result").html("The result is a tie!");
    $(".again").css("display","inline");

  } else if (userChoice === "rock") {
    if (computerChoice === "scissors" ) {
      $("#result").html("You Win! Rock beats Scissors.");
$(".again").css("display","inline");

    } else if (computerChoice === "lizard" ) {
      $("#result").html("You Win! Rock beats Lizard.");
$(".again").css("display","inline");

    } else{
      $("#result").html("You Lose! Paper and Spock beats Rock.");
$(".again").css("display","inline");

    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      $("#result").html("You Win! Paper beats Rock.");
$(".again").css("display","inline");

    } else if (computerChoice === "spock") {
      $("#result").html("You Win! Paper beats Spock.");
$(".again").css("display","inline");

    } else {
      $("#result").html("You Lose! Scissors and Lizard beats Paper.");
$(".again").css("display","inline");

    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      $("#result").html("You Win! Scissors beats Rock.");
$(".again").css("display","inline");

    } else if (computerChoice === "lizard") {
      $("#result").html("You Win! Scissors beats Lizard.");
$(".again").css("display","inline");

    } else{
      $("#result").html("You Lose! Rock and Spock beats Scissors.");
$(".again").css("display","inline");

    }
  } else if (userChoice === "lizard") {
    if (computerChoice === "paper") {
      $("#result").html("You Win! Lizard beats Paper.");
$(".again").css("display","inline");

    } else if (computerChoice === "spock") {
      $("#result").html("You Win! Lizard beats Spock.");
$(".again").css("display","inline");

    } else{
      $("#result").html("You Lose! Scissors and Rock beats Lizard.");
$(".again").css("display","inline");

    }
  } else if (userChoice === "spock") {
    if (computerChoice === "scissors") {
      $("#result").html("You Win! Spock beats Scissors.");
$(".again").css("display","inline");

    } else if (computerChoice === "rock") {
      $("#result").html("You Win! Spock beats Rock.");
$(".again").css("display","inline");

    } else{
      $("#result").html("You Lose! Lizard and Paper beats Spock.");
$(".again").css("display","inline");

    }
  }
};


       
