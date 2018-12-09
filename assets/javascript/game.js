//Letter choices available
var computerChoices = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Setting all to zero
var wins = 0;
var losses = 0;
var guessLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

document.onkeyup = function (event) {

    // Player Guess
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(playerGuess);

    //Lets the computer select a random letter from the available choices
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

    var keys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // On key press: If user presses an invalid character game will console.log
    if (keys.indexOf(playerGuess) == -1) {
        console.log("Invalid Key");
    }

    // On key press: If user presses a valid character the game will determine win or loss
    if (keys.indexOf(playerGuess) > -1) {

        // When player gets it right
        if (playerGuess === computerGuess) {
            wins++;
            guessLeft = 9;
            lettersGuessed = [];
            alert("Congratulations! You have Psychic Powers.");
        }
        // When player guess wrong, Guess Left Count drop by 1 and wrong letter is displayed at DOM
        if (playerGuess != computerGuess) {
            guessLeft--;
            lettersGuessed.push(playerGuess);
        }
        // When player makes 9 wrong guesses the Losses Count adds 1 and the game start over
        if (guessLeft === 0) {
            guessLeft = 9;
            losses++;
            lettersGuessed = [];
            alert("Keep trying");
        }

        var html =

            "<div class='row' id='output'>" +
            "<div class ='col-md-2'>" +
            "<p>Wins: " + wins + "</p>" + "</div>" +
            "<div class ='col-md-2' id='loose'>" +
            "<p>Loss: " + losses + "</p>" + "</div>" +
            "<div class ='col-md-4'>" +
            "<p>Guesses Left: " + guessLeft + "</p>" + "</div>" +
            "<div class ='col-md-4'>" +
            "<p>Letters Guessed: " + lettersGuessed.join(", ") + "</p>" + "</div>" + "</div>";

        document.querySelector("#game_output").innerHTML = html;

    }
};