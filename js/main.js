const userOptions = {
  rock: "/images/Rock.png",
  paper: "/images/Paper.png",
  scissors: "/images/Scissors.png",
  lizard: "/images/Lizard.jpg",
  spock: "/images/Spock.png",
};

let SCORE = 0;

const pickUserOption = (option) => {
  let options = document.querySelector(".options");
  options.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  // set user Image
  document.getElementById("userPickImage").src = userOptions[option];

  pickComputeroption(option);
};

const pickComputeroption = (option) => {
  let options = ["rock", "paper", "scissors", "lizard", "spock"];
  let computerOption = options[Math.floor(Math.random() * 5)];

  // set computer image
  document.getElementById("computerPickImage").src =
    userOptions[computerOption];

  result(option, computerOption);
};

const result = (userOption, computerOption) => {
  if (
    (userOption == "paper" && computerOption == "scissors") ||
    (userOption == "paper" && computerOption == "lizard")
  ) {
    setDecision("YOU LOSE!");
  }
  if (
    (userOption == "paper" && computerOption == "rock") ||
    (userOption == "paper" && computerOption == "spock")
  ) {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userOption == "paper" && computerOption == "paper") {
    setDecision("It's a tie!");
  }
  if (
    (userOption == "rock" && computerOption == "scissors") ||
    (userOption == "rock" && computerOption == "lizard")
  ) {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (
    (userOption == "rock" && computerOption == "paper") ||
    (userOption == "rock" && computerOption == "spock")
  ) {
    setDecision("YOU LOSE!");
  }
  if (userOption == "rock" && computerOption == "rock") {
    setDecision("It's a tie!");
  }

  if (
    (userOption == "scissors" && computerOption == "rock") ||
    (userOption == "scissors" && computerOption == "lizard")
  ) {
    setDecision("YOU LOSE!");
  }
  if (
    (userOption == "scissors" && computerOption == "paper") ||
    (userOption == "scissors" && computerOption == "spock")
  ) {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userOption == "scissors" && computerOption == "scissors") {
    setDecision("It's a tie!");
  }
  if (
    (userOption == "lizard" && computerOption == "rock") ||
    (userOption == "lizard" && computerOption == "scissors")
  ) {
    setDecision("YOU LOSE!");
  }
  if (
    (userOption == "lizard" && computerOption == "spock") ||
    (userOption == "lizard" && computerOption == "paper")
  ) {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userOption == "lizard" && computerOption == "lizard") {
    setDecision("It's a tie!");
  }
  if (
    (userOption == "spock" && computerOption == "scissors") ||
    (userOption == "spock" && computerOption == "rock")
  ) {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (
    (userOption == "spock" && computerOption == "paper") ||
    (userOption == "spock" && computerOption == "lizard")
  ) {
    setDecision("YOU LOSE!");
  }
  if (userOption == "spock" && computerOption == "spock") {
    setDecision("It's a tie!");
  }
};

const playAgainBtn = () => {
  let contest = document.querySelector(".contest");
  contest.style.display = "none";

  let options = document.querySelector(".options");
  options.style.display = "flex";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (newScore) => {
  SCORE = newScore;
  document.querySelector(".score h1").innerText = newScore;
};
