
var words = [
  "JAVASCRIPT",
  "MONKEY",
  "AMAZING",
  "PANCAKE"
];

//The current word that is being solved for;
var currentWord = "";

//the word that is being displayed to the player
var word = [];

var guessesLeft = 6;

var wordsUsed = "";

var used = [];

var pickWord = function(){
    var randomNumber = Math.floor(Math.random() * words.length);
    currentWord = currentWord + words[randomNumber].split(' ');
    console.log(currentWord);
    $("#movesLeft").html(guessesLeft);
}
var setupAnswerArray = function(){
  for(var i = 0; i < currentWord.length; i++){
      word.push("_ ")
  }
  $("#solve").html(word.join(""));
  console.log(word);
}

var showPlayerProgress = function(){
  alert("So far you have solved " + word + " and have " + guessesLeft + " guesses left and have used " + wordsUsed + ".");
}

var getGuess = function(guess){
  // console.log(guess);
  updateGameState(guess);
}

var updateGameState = function(guess){
    if(guessesLeft == 0){
      setTimeout(alertLose, 500);
    }else{
    if(used.indexOf(guess) == -1){
      used.push(guess);
      console.log(used);
    if(currentWord.indexOf(guess) == -1){
      guessesLeft--;
      console.log(guessesLeft);
      $("#movesLeft").html(guessesLeft);
    }
      for(var i = 0; i < currentWord.length; i++){
        if(currentWord[i] == guess){
            word[i] = guess;
            console.log(currentWord[i])
            console.log(word);
            $("#solve").html(word);
          }
        }
        if(guessesLeft == 0){
          setTimeout(alertLose, 500);
        }
      if(word.join('') == currentWord){
        setTimeout(showAnswerAndCongratulatePlayer, 500);
      }
    }
  }
}

var showAnswerAndCongratulatePlayer = function(){
    alert("You Won");
    console.log("you won");
}

var alertLose = function(){
  alert("You Lose");
}

$(document).ready(function(){
  pickWord();
  setupAnswerArray();
  // showPlayerProgress();
  $(".alpha").click(function(event){
    var letterID = event.currentTarget.id;
      console.log("click");
      getGuess(letterID);
  });
  $("#newGame").click(function(){
    location.reload();
  })
})
