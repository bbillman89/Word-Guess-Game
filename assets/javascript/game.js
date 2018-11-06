//

// var word = ["Bulliet",
//     "Jim Beam",
//     "Knob Creek",
//     "Buffalo Trace",
//     "Wild Turkey"
// ]

var quote = ["Never delay kissing a pretty girl or opening a bottle of whiskey. – Ernest Hemingway",
    "“Civilization begins with distillation. – William Faulkner",
    "I have never in my life seen a Kentuckian who didn’t have a gun, a pack of cards, and a jug of whiskey. – Andrew Jackson",
    "Always drink your whiskey with your gun hand, to show your friendly intentions. – Scottish Klondiker’s Proverb",
    "Too much of anything is bad, but too much good whiskey is barely enough. – Mark Twain"
]

var wordElement = document.getElementById("display_letters");


var wins = [];

// var remainingGuesses = 12;
// var correctGuesses = [];
// var wrongGuesses = [];

function startGame() {

    var word = ["Bulliet",
    "Jim Beam",
    "Knob Creek",
    "Buffalo Trace",
    "Wild Turkey"
    ];
    var remainingGuesses = 12;
    var correctGuesses = [];
    var wrongGuesses = [];
]

    //This for-loop places the word from the array into the document.
    for (var i = 0; i < word.length; i++) {
        correctGuesses.push("_");
    }

    wordElement.innerHTML = correctGuesses.join("");

}

startGame ();


