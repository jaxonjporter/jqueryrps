$(document).ready( function() {
  var count = 0
  $('#surprise').on('click', function() {
    if (count % 2 === 0) {
      $('#surprise').text('Welcome to the Rock, Paper mario, and Edward Scissor-Hands')
      $('#rocky').unbind('click')
      $('#rocky')
        .html('<img src="therock.png" />').on("click", function(){
          var rock = "rock"
          rps(rock)
        });
        $('#back').css({
          'background-image': 'url("arena.jpg")',
          'background-size': '100% 100%',
          'background-repeat': 'none',

          })
      $('#papery').unbind('click')
      $('#papery')
        .html('<img src="paper2.png" />').on("click", function(){
          var paper = "paper"
          rps(paper)
        });
      $('#scissory').unbind('click')
      $('#scissory')
        .html('<img src="scissors2.png" />').on("click", function(){
          var scissors = "scissors"
          rps(scissors)
        });
          
          count += 1 
      } else if (count%2===1) {
        $('#surprise').text('Welcome to Rock Paper Scissors')
      $('#rocky').unbind('click')
      $('#rocky').html('<img src="rock.png" id="rock" />').on("click", function(){
        var rock = "rock"
        rps(rock)
      });
      $('#papery').unbind('click')
      $('#papery')
        .html('<img src="paper.png" />').on("click", function(){
          var paper = "paper"
          rps(paper)
        });
      $('#scissory').unbind('click')
      $('#scissory')
        .html('<img src="scissors.png" />').on("click", function(){
          var scissors = "scissors"
          rps(scissors)
        });
      $('#back').css({
        'background-image': 'none',
        'background-size': '100% 100%',
        'background-repeat': 'none',

        })
        count += 1 
      };
  })
  
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
    $("#paper").stop();
    $("#paper").removeAttr('style');
    if (count % 2 === 0){
      count = 0
    } else {
      count = 1
    }
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
    $("#result").text("You both chose " + userChoice + ". You tied.")
    ties += 1
    $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)

  } else {
    switch (userChoice) {
      case "rock":
        if (computerChoice === "paper"){
          losses += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose paper. You lost!!")
        } else {
          wins +=1
          $("#result").text("The computer chose scissors. You won!!")
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)}
        break;
      case "paper":
        if (computerChoice === "scissors"){
          losses += 1
          $("#score").text("Wins: "+ wins +" Losses: "+ losses + " Ties: " + ties)
          $("#result").text("The computer chose scissors. You lost!!")
        } else {
          $("#result").text("The computer chose rock. You won!!")
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