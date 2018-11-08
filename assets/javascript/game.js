//GAME LEVEL VALUES
//===============================================================================================

//Array containing hidden words.
var word = ["bulliet",
    "jimbeam",
    "knobcreek",
    "buffalotrace",
    "wildturkey"
];

//Array containing quotes to display after word is guessed correctly
var quote = ["Never delay kissing a pretty girl or opening a bottle of whiskey. – Ernest Hemingway",
    "Civilization begins with distillation. – William Faulkner",
    "I have never in my life seen a Kentuckian who didn’t have a gun, a pack of cards, and a jug of whiskey. – Andrew Jackson",
    "Always drink your whiskey with your gun hand, to show your friendly intentions. – Scottish Klondiker’s Proverb",
    "Too much of anything is bad, but too much good whiskey is barely enough. – Mark Twain"
];

/*
  var guess=[
   {name: "Bullet", message="Never delay kissing a pretty girl or opening a bottle of whiskey. – Ernest Hemingway"},
   {name: "jmbeam", message="Never delay kissing a pretty girl or opening a bottle of whiskey. – Ernest Hemingway"}
  ];
  
  guess[0].name
*/

var maxGuesses = 12;            //Max guesses the user is allowed

var lettersGuessed = [];        //Stores the letters the user has guessed
var currentWordIndex;           //Index of the current word in the array
var currentWord = [];           //Stores the current word from the array
var remainingGuesses = 0;       //How many guesses the user has left
var wrongGuesses = [];          //Stores the incorrect letters guessed by the user
var gameStart = false;          //Flag for "press any key to start"
var wins = [];                  //Stores the number of user wins


//FUNCTIONS
//===============================================================================================

//This function resets our Game Level Values
function resetGame() {
    remainingGuesses = maxGuesses;
    gameStart = false;

    //returns the largest integer less than or equal to a given number.
    currentWordIndex = word.length - 1;

    //Clear the arrays
    lettersGuessed = [];
    currentWord = [];

    //For-loop to build the guessing word and clear it out
    for (var i = 0; i < word[currentWordIndex].length; i++) {
        currentWord.push("_");
    }

    //Use this to update the display based on these values
    updateDisplay()
}

/*function updateDisplay() {
    document.getElementById("win_count").innerText = wins;
    document.getElementById("display_letters").innerText = currentWord;
    
}*/


//GEARS TO THE GAME
//===============================================================================================


document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(gameStart) {
        resetGame();
        gameStart = false;
    } else {
        // Check to make sure a-z was pressed.  Ascii table
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (!gameStarted) {
            gameStarted = true;
        }

        // Make sure we didn't use this letter yet
        if (guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};









