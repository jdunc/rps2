
computerChoice = Math.random();
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

function newChoice(){
  computerChoice = Math.random();
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
}
yourScore = 0;
compScore = 0;
var playAgain = function(){
  document.location.reload();

};
var compare = function(userChoice, computerChoice) {
  newChoice()
  console.log(userChoice);
  if (userChoice === computerChoice) {
    $("#result").html("The result is a tie!");
    $(".again").css("display","inline");
    $("#computerChoice").html('The computer chose ' + computerChoice);
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors" ) {
      $("#result").html("You Win! Rock beats Scissors.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else if (computerChoice === "lizard" ) {
      $("#result").html("You Win! Rock beats Lizard.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else{
      $("#result").html("You Lose! Paper and Spock beats Rock.");
      compScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      $("#result").html("You Win! Paper beats Rock.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else if (computerChoice === "spock") {
      $("#result").html("You Win! Paper beats Spock.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else {
      $("#result").html("You Lose! Scissors and Lizard beats Paper.");
      compScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      $("#result").html("You Win! Scissors beats Paper.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else if (computerChoice === "lizard") {
      $("#result").html("You Win! Scissors beats Lizard.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else{
      $("#result").html("You Lose! Rock and Spock beats Scissors.");
      compScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    }
  } else if (userChoice === "lizard") {
    if (computerChoice === "paper") {
      $("#result").html("You Win! Lizard beats Paper.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else if (computerChoice === "spock") {
      $("#result").html("You Win! Lizard beats Spock.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else{
      $("#result").html("You Lose! Scissors and Rock beats Lizard.");
      compScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    }
  } else if (userChoice === "spock") {
    if (computerChoice === "scissors") {
      $("#result").html("You Win! Spock beats Scissors.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else if (computerChoice === "rock") {
      $("#result").html("You Win! Spock beats Rock.");
      yourScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    } else{
      $("#result").html("You Lose! Lizard and Paper beats Spock.");
      compScore++;
      $(".again").css("display","inline");
      $("#computerChoice").html('The computer chose ' + computerChoice);
    }``
  }
  $("#myscore").html('Your score is ' + yourScore + ' and the computers score is ' + compScore);
};
