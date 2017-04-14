var inquirer = require("inquirer");
var fs = require("fs");

//need to store arguments into an array, and log them via index.
// var frontArray = [];
// var backArray = [];

// Create a BasicCard constructor. It should accept front and back arguments.
var BasicCard = function() {
	inquirer.prompt({

	})
}

var firstPresident = function() {

	//front function firstPresident.front take in argF

	//back function takes in argB
}

var firstPresidentCloze = function() {
	
	// ClozeCard function

	// cloze function ex. 'George Washington'

	// partial function ex. 'was the first president of the United States Of America'

}

var pick = function(caseData, functionData) {
	switch (caseData) {
		case 
	}
}

// This take in command line arguments and will execute the correct function
var inputArgs = function(argF, argB) {
	pick(argF, argB);
};

inputArgs(process.argv[2], process.argv[3]);






// Create a ClozeCard constructor. It should accept text and cloze arguments.

// ClozeCard should have a property or method that contains or returns only the cloze-deleted portion of the text.
// ClozeCard should have a property or method that contains or returns only the partial text.
// ClozeCard should have a property or method that contains or returns only the full text.
// ClozeCard should throw or log an error when the cloze deletion does not appear in the input text.
// Use prototypes to attach these methods, wherever possible.






var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); "

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText): "

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze("This doesn't work", "oops"); 