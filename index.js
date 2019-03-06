$(document).ready( function() {
  var arrayrps = ['rock', 'paper', 'scissors']
  var wins = 0
  var losses = 0
  var ties = 0

  $("#rock").on("click", function(){
    var rock = "rock"
    rps(rock)
  });
  $("#paper").on("click", function(){
    var paper = "paper"
    rps(paper)
  });
  $("#scissors").on("click", function(){
    var scissors = "scissors"
    rps(scissors)
  });

  $("#restart").on("click", function(){
    $("#result").text("")
    $("#score").text("Wins: 0 Losses: 0 Ties: 0")
  })

function rps(choice) {
  switch (choice) {
    case "rock":
      debugger
      winnerwinner(choice, arrayrps[Math.floor(Math.random() * arrayrps.length)])
      break;
    case "paper":
      winnerwinner(choice, arrayrps[Math.floor(Math.random() * arrayrps.length)])
      break;
    case "scissors":
      winnerwinner(choice, arrayrps[Math.floor(Math.random() * arrayrps.length)])
      break;
    default: 
  }
}

function winnerwinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    $("#result").text("You both chose " + userChoice + " you tied.")
    ties += 1
    $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)

  } else {
    switch (userChoice) {
      case "rock":
        if (computerChoice === "paper"){
          losses += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose paper. You Lost!!")
        } else {
          wins +=1
          $("#result").text("The computer chose scissors. You Won!!")
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)}
        break;
      case "paper":
        if (computerChoice === "scissors"){
          losses += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose scissors. You Lost!!")
        } else {
          $("#result").text("The computer chose rock. You Won!!")
          wins += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)}
        break;
      case "scissors":
        if (computerChoice === "rock") {
          losses += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose rock. You lost!!")
        } else {
          wins += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose paper. You won!!")}
        break;
      }
    }
  }




});