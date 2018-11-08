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

var maxGuesses = 8;            //Max guesses the user is allowed

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
    gameStart = true;

    //
    currentWordIndex = Math.floor(Math.random() * (word.length));

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


//  Updates the display on the HTML Page
function updateDisplay() {

    document.getElementById("win_count").innerText = wins;
    document.getElementById("display_letters").innerText = "";
    for (var i = 0; i < currentWord.length; i++) {
        document.getElementById("display_letters").innerText += currentWord[i];
    }
    document.getElementById("guesses_counter").innerText = remainingGuesses;
    document.getElementById("letters_guessed").innerText = lettersGuessed;
    if(remainingGuesses <= 0) {
        //alert("Game Over!");
        resetGame();
    }
};


//GEARS TO THE GAME
//===============================================================================================


document.onkeydown = function(event) {
    // If we finished a game, dump one keystroke and reset.
    if(gameStart) {
        gameStart = false;
    } else {
        // Check to make sure a-z was pressed.  Ascii table keycode
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};

function makeGuess(letter) {
    if (remainingGuesses > 0) {
        if (gameStart) {
            gameStart = true;
        }

        // Make sure we didn't use this letter yet
        if (lettersGuessed.indexOf(letter) === -1) {
            lettersGuessed.push(letter);
            evaluateGuess(letter);
        }
    }
    
    updateDisplay();
    checkWin();
};

/* This function takes a letter and finds all instances of 
appearance in the string and replaces them in the guess word.*/
function evaluateGuess(letter) {
    // Array to store positions of letters in string
    var positions = [];

    // Loop through word finding all instances of guessed letter, store the indicies in an array.
    for (var i = 0; i < word[currentWordIndex].length; i++) {
        if(word[currentWordIndex][i] === letter) {
            positions.push(i);
        }
    }

    
    if (positions.length <= 0) {
        remainingGuesses--;
    } else {
        // Loop through all the indicies and replace the '_' with a letter.
        for(var i = 0; i < positions.length; i++) {
            currentWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(currentWord.indexOf("_") === -1) {
        wins++;
        gameStart = true;
        resetGame();
    }
};
 









