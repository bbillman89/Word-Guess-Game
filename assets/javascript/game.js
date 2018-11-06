//GAME LEVEL VALUES
//===============================================================================================

//Array containing hidden words.
var word = ["Bulliet",
    "Jim Beam",
    "Knob Creek",
    "Buffalo Trace",
    "Wild Turkey"
];


//Array containing quotes to display after word is guessed correctly
var quote = ["Never delay kissing a pretty girl or opening a bottle of whiskey. – Ernest Hemingway",
    "Civilization begins with distillation. – William Faulkner",
    "I have never in my life seen a Kentuckian who didn’t have a gun, a pack of cards, and a jug of whiskey. – Andrew Jackson",
    "Always drink your whiskey with your gun hand, to show your friendly intentions. – Scottish Klondiker’s Proverb",
    "Too much of anything is bad, but too much good whiskey is barely enough. – Mark Twain"
];

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

    //returns the largest integer less than or equal to a given number
    currentWordIndex = Math.floor(word.length);

    //Clear the arrays
    lettersGuessed = [];
    currentWord = [];

    //For-loop to build the guessing word and clear it out
    for (var i = 0; i < word[currentWordIndex].length; i++) {
        currentWord.push("_");
    }

    //Use this method? to update the display based on these values
    updateDisplay()
}








//GEARS TO THE GAME
//===============================================================================================











